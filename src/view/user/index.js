import React, {useState} from 'react';
import './user.css';
import firebase from '../../config/firebase';
import 'firebase/auth';

function NewUser(){

    return(
        <div className="form-newuser">
            <form className="text-center form login mx-auto mt-6">
                <h1 className="h3 mb-3 text-black font-weigth-bold">Eu</h1>
            </form>
        </div>
    )
}

export default NewUser;