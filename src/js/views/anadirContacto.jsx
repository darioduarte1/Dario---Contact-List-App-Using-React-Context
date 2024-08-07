import React, { useState } from "react";

const AnadirContacto = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [adress, setAdress] = useState("")

    const createContact = (name, email, phone, adress) => {
        fetch("https://playground.4geeks.com/contact/agendas/Dario/contacts", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(
                {
                    name: name,
                    phone: phone,
                    email: email,
                    address: adress
                  }
            )
    })
    .then(resp => resp.json())
    .then(data => data)
    .catch(error => console.log (error))
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