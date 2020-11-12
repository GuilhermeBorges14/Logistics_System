import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './orderCard.css';

function OrderCard({ id,model, name, adress }) {

    return (

        <div className="card col-md-3 col-sm-12 p-3 my-4">
            <div className="card-body">
                <h5 class="model">{model}</h5>
                <p className="card-text text-justify"><strong>{name}</strong><br></br>{adress}</p>
                

                <div className="row rodape-card d-flex align-items-center">
                    <Link to={'/orderdetails/' + id } className="btn btn-sm btn-details">detalhes</Link>
                </div>
            </div>
        </div>
    )
}

export default OrderCard;