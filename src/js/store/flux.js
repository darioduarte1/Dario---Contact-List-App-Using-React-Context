

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
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
                        "Content-Type":"application/json"
                    }
                });
                const {contacts} = await response.json();
                const store = getStore();
                setStore({...store, listaContactos: contacts});
            },

            createContact : (name, email, phone, adress) => {
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
        }
    };
};
export default getState;