import React, {useState, useEffect} from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar/';
import {useSelector} from 'react-redux';

import OrderCard from '../../components/order-card/';
import firebase from '../../config/firebase';




function Home(){

    const [order, setOrder] = useState([]);
    const [search, setSearch] = useState('');
    let listorders = [];

    useEffect(() =>{
     firebase.firestore().collection('order').get().then(async (result) => {
         await result.docs.forEach(doc =>{
           
           if(doc.data().name.indexOf(search) >= 0){

            listorders.push({
               id: doc.id,
               ...doc.data()
           })}
         })

         setOrder(listorders);
     })
    });

    

    return(
        <>
         <Navbar/>
        <div className="home ">

           <div class="row p-5">
           <h2 class="mx-auto pb-5 text-white">Pedidos</h2>

           <input onChange={(e) => setSearch(e.target.value)} type="text" class="form-control text-center" placeholder="Pesquisar pedido..." />
           </div>
           


        <div class="row p-5 d-flex justify-content-around">
        {order.map(item => <OrderCard key={item.id} id={item.id} model={item.model} name={item.name} adress={item.adress} />)}
        
        </div>
        
        
        </div>

        
        </>

    )
    
}

export default Home;
