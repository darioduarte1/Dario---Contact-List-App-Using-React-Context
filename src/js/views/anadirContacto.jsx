import React from "react";

const AnadirContacto = () => {
    return (
            <>
                <label htmlFor="">Full Name</label>
                <input type="text" />

                <label htmlFor="">Email</label>
                <input type="email" />

                <label htmlFor="">Phone</label>
                <input type="number" />

                <label htmlFor="">Adress</label>
                <input type="text" />

                <button>Save</button>
            </>    
    )

}

export default AnadirContacto;