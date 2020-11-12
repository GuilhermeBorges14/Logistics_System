import React, {useState, useEffect} from 'react';
import './order-details.css';
import {Link, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import firebase from '../../config/firebase';
import Navbar from '../../components/navbar';


function OrderDetails(props){

    const [order, setOrder] = useState({});
    const [remove, setRemove] = useState(0);

    function Delete(){
      
        firebase.firestore().collection('order').doc(props.match.params.id).delete().then(() =>{
            setRemove(1);
        })
    }

    useEffect(() => {
        firebase.firestore().collection('order').doc(props.match.params.id).get().then(result =>{
          setOrder(result.data());
        });
    },[])
    
    return(
        <>
       <Navbar/>

       {remove ? <Redirect to='/home'/> : null}

       <div className="back container-fluid">
           <div className="row mt-5 d-flex justify-content-around">
               
               <div className="col-md-3 col-sm-12 box-info p-3 my-4">
               <i class="fas fa-box-open fa-2x"></i>
               <h5><strong>Pedido</strong></h5>
               <span class="mt-3">{order.model}</span>
               </div>

               <div className="col-md-3 col-sm-12 box-info p-3 my-4">
               <i class="fas fa-user fa-2x"></i>
               <h5><strong>Nome</strong></h5>
               <span class="mt-3">{order.name}</span>
               </div>

               <div className="col-md-3 col-sm-12 box-info p-3 my-4">
               <i class="fas fa-map-marked-alt fa-2x"></i>
               <h5><strong>Endereço</strong></h5>
               <span class="mt-3">{order.adress}, n° {order.adressNumber} - {order.neighborhood}</span>
               </div>

               <div className="col-md-3 col-sm-12 box-info p-3 my-4">
               <i class="fas fa-city fa-2x"></i>
               <h5><strong>Cidade e CEP</strong></h5>
               <span class="mt-3">{order.city}, CEP: {order.cep}</span>
               </div>

               <div className="col-md-3 col-sm-12 box-info p-3 my-4">
               <i class="far fa-calendar-alt fa-2x"></i>
               <h5><strong>Data</strong></h5>
               <span class="mt-3">{order.date}</span>
               </div>

               <div className="col-md-3 col-sm-12 box-info p-3 my-4">
               <i class="far fa-clock fa-2x"></i>
               <h5><strong>Hora</strong></h5>
               <span class="mt-3">{order.time}</span>
               </div>

               <div className="col-md-3 col-sm-12 box-info p-3 my-4">
               <i class="fas fa-sort-amount-up fa-2x"></i>
               <h5><strong>Quantidade</strong></h5>
               <span class="mt-3">{order.qtd} itens!</span>
               </div>

               <div className="col-md-3 col-sm-12 box-info p-3 my-4">
               <i class="fas fa-info-circle fa-2x"></i>
               <h5><strong>Observações</strong></h5>
               <span class="mt-3">{order.obs}</span>
               </div>

          <Link to={`/orderedit/${props.match.params.id}`} className="btn-edit"><i class="fa fa-pen-square fa-3x"></i></Link>

           </div>

           <button onClick={Delete} class="btn btn-delete"><i class="fas fa-trash-alt fa-3x"></i></button>
       </div>
        </>
    )
}

export default OrderDetails;