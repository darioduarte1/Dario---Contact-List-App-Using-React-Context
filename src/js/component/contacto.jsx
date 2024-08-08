import React from "react";

export const Contacto = ({name, email, phone, adress}) => {
    return <>
        <div>
            <h2>{name}</h2>
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