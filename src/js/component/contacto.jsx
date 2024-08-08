import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Contacto = ({id, name, email, phone, address}) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const handleEdit = (id) =>{
        actions.selectContact(id)
        navigate("/editar-contacto")
    }
    return <>
        <div>
            <h2>{name} <button onClick={() => {actions.eliminarContacto(id)}} >Eliminar</button> 
            <button onClick={() => handleEdit(id)} >Editar</button></h2>
                <ul>
                    <li><bold>email:</bold>
                        {email}
                    </li>
                    <li><bold>phone:</bold>
                        {phone}
                    </li>
                    <li><bold>address:</bold>
                        {address}
                    </li>
                </ul>
        </div>
    </>
}