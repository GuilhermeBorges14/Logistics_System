import React, { useState } from 'react';
import './login.css';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import firebaseConfig from '../../config/firebase';
import 'firebase/auth';





function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msgTipo, setMsgTipo] = useState('');

    const dispatch = useDispatch();

    function logar() {
        firebaseConfig.auth().signInWithEmailAndPassword(email, senha).then(result => {
            setTimeout(() => { dispatch({ type: 'Log_in', userEmail: email }) }, 500)

        }).catch(error => {
            setMsgTipo('erro');
        });
    }


    return (





        <div className="login-content d-flex align-items-center">



            {useSelector(state => state.userLogin) > 0 ? <Redirect to='./home' /> : null}

            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <h1 className="system mb-3 font-weight-normal  font-weight-bold">Sistema de Logística</h1>
                    <i className="fas fa-truck-moving text-white my-4"></i>
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>

                </div>


                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />


                

                <button onClick={logar} class="btn btn-lg  btn-block btn-login" type="button">Entrar</button>

                <div className="error-login text-white my-4">
                    {msgTipo === 'erro' && <span><strong>Ops!</strong> &#128542;  Verifique seu e-mail e/ou senha</span>}

                </div>

                <div className="login-options mt-4">
                    <a href="#" >Recuperar Senha</a>
                </div>
            </form>
        </div>

        





    )
}

export default Login;
