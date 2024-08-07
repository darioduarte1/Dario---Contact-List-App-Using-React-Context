import React, {useContext, useEffect} from "react"
import { Context } from "../store/appContext";

export const ListaContactos = () =>{
    const { store, actions } = useContext(Context);
    useEffect(() => {actions.getListaContactos()},[])
    return <>
        {console.log (store.listaContactos)}
    </>
}