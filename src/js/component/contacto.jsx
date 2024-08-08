import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Contacto = ({id, name, email, phone, adress}) => {
    const { store, actions } = useContext(Context);
    return <>
        <div>
            <h2>{name} <button onClick={() => {actions.eliminarContacto(id)}} >Eliminar</button></h2>
                <ul>
                    <li><bold>email:</bold>
                        {email}
                    </li>
                    <li><bold>phone:</bold>
                        {phone}
                    </li>
                    <li><bold>adress:</bold>
                        {adress}
                    </li>
                </ul>
        </div>
    </>
}