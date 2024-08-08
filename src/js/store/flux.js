

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            selectContact: null,
            listaContactos: []
        },
        actions: {
            createAgenda: () => {
                fetch("https://playground.4geeks.com/contact/agendas/Dario", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({})
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Success:', data);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            },
            getListaContactos: async () => {
                const response = await fetch("https://playground.4geeks.com/contact/agendas/Dario/contacts", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const { contacts } = await response.json();
                const store = getStore();
                setStore({ ...store, listaContactos: contacts });
            },

            createContact: (name, email, phone, address) => {
                fetch("https://playground.4geeks.com/contact/agendas/Dario/contacts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            name: name,
                            phone: phone,
                            email: email,
                            address: address
                        }
                    )
                })
                    .then(resp => resp.json())
                    .then(data => data)
                    .catch(error => console.log(error))
            },

            eliminarContacto: (id) => {
                fetch(`https://playground.4geeks.com/contact/agendas/Dario/contacts/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                    .then(resp => {
                        if (resp.ok) {
                            getActions().getListaContactos()
                            return resp.json()
                        }
                    })
                    .then(data => data)
                    .catch(error => console.log(error))
            },

            editarContact: (id, name, email, phone, address) => {
                fetch(`https://playground.4geeks.com/contact/agendas/Dario/contacts/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            name: name,
                            phone: phone,
                            email: email,
                            address: address
                        }
                    )
                })
                    .then(resp => resp.json())
                    .then(data => data)
                    .catch(error => console.log(error))
            },

            selectContact: (id) => {
                const contactoElegido = getStore().listaContactos.filter((contacto) => contacto.id === id)
                setStore({selectContact:contactoElegido})
            }
        }
    };
};
export default getState;