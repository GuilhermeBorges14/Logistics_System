import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {

    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand " href="#"><i class="fas fa-truck-moving text-dark"></i></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-caret-square-down text-dark"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        

                            <li className="nav-item font-weight-bold">
                            <Link className="nav-link "  to="/home">Início </Link></li>
                            <li className="nav-item font-weight-bold">
                            <Link className="nav-link "  to="/order">Novo pedido </Link></li>
                            
                            
                        <li className="nav-item font-weight-bold">
                            <Link className="nav-link " onClick={() => dispatch({ type: 'Log_out' })} to="/login">Sair </Link></li>
                        

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;