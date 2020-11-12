import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './order.css';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import firebase from '../../config/firebase';

function Order(props) {

    const [loading, setLoading] = useState();
    const [msgType, setMsgType] = useState();
    const [name, setName] = useState();
    const [adress, setAdress] = useState(); 
    const [adressNumber, setAdressNumber] = useState(); 
    const [neighborhood, setNeighborhood] = useState(); 
    const [city, setCity] = useState(); 
    const [cep, setCep] = useState(); 
    const [date, setDate] = useState();
    const [time, setTime] = useState();   
    const [model, setModel] = useState(); 
    const [qtd, setQtd] = useState(); 
    const [obs, setObs] = useState(); 
    const userEmail = useSelector(state => state.userEmail);
    

    const db = firebase.firestore();

    useEffect(() => {
        if(props.match.params.id){
        firebase.firestore().collection('order').doc(props.match.params.id).get().then(result =>{
          setName(result.data().name)
          setAdress(result.data().adress)
          setAdressNumber(result.data().adressNumber)
          setNeighborhood(result.data().neighborhood)
          setCity(result.data().city)
          setCep(result.data().cep)
          setDate(result.data().date)
          setTime(result.data().time)
          setModel(result.data().model)
          setQtd(result.data().qtd)
          setObs(result.data().obs)
        });
    }
    },[loading])

    
    
    
    
    function Edit(){

        setLoading(1);
        
        db.collection('order').doc(props.match.params.id).update({

            name: name,
            adress: adress,
            adressNumber: adressNumber,
            neighborhood: neighborhood,
            city: city,
            cep: cep,
            date: date,
            time: time,
            model: model, 
            qtd: qtd,
            obs: obs
            
        }).then(() => {
            setMsgType('sucess');
            setLoading(0);
        });
    }
    
    
    function Create(){

        setLoading(1);
        
        db.collection('order').add({

            name: name,
            adress: adress,
            adressNumber: adressNumber,
            neighborhood: neighborhood,
            city: city,
            cep: cep,
            date: date,
            time: time,
            model: model, 
            qtd: qtd,
            obs: obs,
            public: 1,
            userEmail: userEmail,
            creation: new Date() 
        }).then(() => {
            setMsgType('sucess');
            setLoading(0);
        })
    }
    

    return (
        <>
            <Navbar />


            
            <div className="order">
            <div className="col-12">
                <div className="row">
                    <h3 className="mx-auto font-weight bold my-5">{props.match.params.id ? 'Editar Pedido' : 'Novo Pedido'}</h3>
                </div>
                <form>
                    <div className="mx-auto form-group col-8">
                        <label>Nome do cliente</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" value={name && name} />
                    </div>

                    <div className="mx-auto form-group col-8">
                        <label>Endereço da entrega</label>
                        <input onChange={(e) => setAdress(e.target.value)}  type="text" className="form-control" value={adress && adress} />
                    </div>

                    <div className="mx-auto form-group row col-8">
                        <div className=" col-6">
                            <label>Número</label>
                            <input onChange={(e) => setAdressNumber(e.target.value)} type="number" className="form-control"  value={adressNumber && adressNumber}/>
                        </div>
                        <div className=" col-6">
                            <label>Bairro</label>
                            <input onChange={(e) => setNeighborhood(e.target.value)} type="text" className="form-control" value={neighborhood && neighborhood} />
                        </div>
                    </div>
                    
                    <div className=" mx-auto form-group row col-8 ">
                        <div className="col-6">
                            <label>Cidade</label>
                            <input onChange={(e) => setCity(e.target.value)} type="text" className="form-control" value={city && city} />
                        </div>
                        <div className="col-6">
                            <label>CEP</label>
                            <input onChange={(e) => setCep(e.target.value)} type="text" className="form-control" value={cep && cep} />
                        </div>
                    </div>

                    <div className=" mx-auto form-group row col-8">
                        <div className="col-6">
                            <label>Data da entrega</label>
                            <input onChange={(e) => setDate(e.target.value)} type="date" className="form-control" value={date && date} />
                        </div>
                        <div className="col-6">
                            <label>Horário da saída</label>
                            <input onChange={(e) => setTime(e.target.value)} type="time" className="form-control" value={time && time} />
                        </div>
                    </div>

                    <div className=" mx-auto form-group row col-8">
                        <div className="col-6">
                            <label>Lote do pedido</label>
                            <input onChange={(e) => setModel(e.target.value)} type="text" className="form-control" value={model && model} />
                        </div>
                        <div className="col-6">
                            <label>Quantidade de itens</label>
                            <input onChange={(e) => setQtd(e.target.value)} type="number" className="form-control" value={qtd && qtd} />
                        </div>
                    </div>
                   
                   
                    {/*
                    <div className="mx-auto form-group col-8">
                        <label>Modelo do Sapato:</label>
                        <select onChange={(e) => setModel(e.target.value)} className="form-control" >
                            <option disabled selected value>-- Selecione uma categoria --</option>
                            <option>Sapato Masculino</option>
                            <option>Sapato Feminino</option>
                            <option>Sapato Adulto</option>
                            <option>Sapato Infantil</option>
                        </select>
                    </div> */}

                   

                    <div className="mx-auto form-group col-8">
                        <label>Observações</label>
                        <textarea onChange={(e) => setObs(e.target.value)} className="form-control" rows="2" value={obs && obs} />
                    </div>

                    <div class="row">
                    {
                        loading > 0 ?
                    <div className="spinner-border text-warning mx-auto" role="status"><span class="sr-only">Loading...</span></div>
                    : <button onClick={props.match.params.id ? Edit : Create} type="button" className="mx-auto btn btn-lg btn-block mt-3 mb-5 btn-order col-6">{props.match.params.id ? 'Atualizar Pedido' : 'Registrar Pedido'}</button>
                    }
                    </div>

                    <div className="mx-auto col-4 text-white my-4">
                    {msgType === 'sucess' && <span><strong>Pedido Cadastrado!</strong> &#128513;</span>}
                    
                </div>
                </form>

                
                
            </div>
            </div>
            
        </>
    )
}

export default Order;
