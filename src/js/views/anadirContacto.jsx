import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const AnadirContacto = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [adress, setAdress] = useState("")

    const createContact = (name, phone, email, adress) => {
        actions.createContact(name, phone, email, adress);
        navigate("/")
    }

    return (
            <div className="d-flex flex-column" >
                <label htmlFor="">Full Name</label>
                <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />

                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />

                <label htmlFor="">Phone</label>
                <input type="number" value={phone}  onChange={(e) => {setPhone(e.target.value)}}/>

                <label htmlFor="">Adress</label>
                <input type="text" value={adress}  onChange={(e) => {setAdress(e.target.value)}}/>

                <button onClick={() => {createContact(name, phone, email, adress)}} >Save</button>
            </div>    
    )

}

export default AnadirContacto;