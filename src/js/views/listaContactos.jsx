import React, {useContext, useEffect} from "react"
import { Context } from "../store/appContext";
import { Contacto } from "../component/contacto.jsx";

export const ListaContactos = () =>{
    const { store, actions } = useContext(Context);
    useEffect(() => {actions.getListaContactos()},[])
    return <>
        {console.log (store.listaContactos)}


    {store.listaContactos.map((contacto) => {
        return <Contacto {...contacto}/>
    })}

    </>
}