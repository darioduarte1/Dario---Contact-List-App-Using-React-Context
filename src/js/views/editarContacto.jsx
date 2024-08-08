import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const EditarContacto = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [id, setId] = useState("")

    useEffect(() => {
        if (store.selectContact) {
            setName(store.selectContact[0].name || '');
            setEmail(store.selectContact[0].email || '');
            setPhone(store.selectContact[0].phone || '');
            setAddress(store.selectContact[0].address || '');
            setId(store.selectContact[0].id || '');
        }
    }, [store.selectedContact])

    const handleEdit = () => {
        actions.editarContact(id, name, phone, email, address)
        navigate("/")
    }

    return (
            <div className="d-flex flex-column" >
                <h1>
                    Editar Contacto
                </h1>
                <label htmlFor="">Full Name</label>
                <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />

                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />

                <label htmlFor="">Phone</label>
                <input type="number" value={phone}  onChange={(e) => {setPhone(e.target.value)}}/>

                <label htmlFor="">Address</label>
                <input type="text" value={address}  onChange={(e) => {setAddress(e.target.value)}}/>

                <button onClick={() => handleEdit()} >Save</button>
            </div>    
    )

}

export default EditarContacto;