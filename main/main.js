const app = new Vue({
    el: "#root",
    data: {
        contacts: [
            {
                name: 'Tony',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che è successo l\'altro giorno?',
                    status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No! Che è successo?',
                        status: 'received'
                    },
                    {
                    date: '10/01/2020 15:51:01',
                    message: 'La tipa che ho conosciuto al pub... te la ricordi?',
                    status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:53:23',
                        message: 'Si che mi ricordo zio...Che topa!!',
                        status: 'received'
                    },
                    {
                    date: '10/01/2020 15:54:10',
                    message: 'Mi ha scritto...',
                    status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:54:27',
                        message: 'E...........',
                        status: 'received'
                    },
                    {
                    date: '10/01/2020 15:55:08',
                    message: 'Niente, mi ha detto che ha il tipo...',
                    status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:55:37',
                        message: 'Ma vaff....Non te lo poteva dire subito???',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:56:01',
                        message: 'Donne Hermano...Donne',
                        status: 'sent'
                        }
                ],
            },
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eos dolor aliquid saepe amet quibusdam nostrum incidunt ab provident enim a, perspiciatis aperiam voluptatem ducimus obcaecati reiciendis cumque ratione quae!',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eos dolor aliquid saepe amet quibusdam nostrum incidunt ab provident enim a, perspiciatis aperiam voluptatem ducimus obcaecati reiciendis cumque ratione quae!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Beppo',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, bella zio!!! Allora stasera mi sfondo...',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Margherita',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Pino',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Serafino',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che è successo l\'altro giorno?',
                    status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No! Che è successo?',
                        status: 'received'
                    },
                    {
                    date: '10/01/2020 15:51:01',
                    message: 'La tipa che ho conosciuto al pub... te la ricordi?',
                    status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:53:23',
                        message: 'Si che mi ricordo zio...Che topa!!',
                        status: 'received'
                    },
                    {
                    date: '10/01/2020 15:54:10',
                    message: 'Mi ha scritto...',
                    status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:54:27',
                        message: 'E...........',
                        status: 'received'
                    },
                    {
                    date: '10/01/2020 15:55:08',
                    message: 'Niente, mi ha detto che ha il tipo...',
                    status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:55:37',
                        message: 'Ma vaff....',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Gioia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Ruggero',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            }
        ],
        indexContact: 0,
        newMessage: "",
        searchProfile: ""
        
        
    },
    methods: {
        selectProfile(index) {
            this.indexContact = index;
        },
        sendMessage() {
            
            //vado a pushare il nuovo messaggio nel contatto corrente
            this.contacts[this.indexContact].messages.push({
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: this.newMessage,
                status: 'sent'
            });
            //resetto l'input
            this.newMessage = "";
            //creo una risposta automatica
            //creo un'arrowfunction per il this che altrimenti sarebbe window
            setTimeout(() => {
                this.contacts[this.indexContact].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    message: 'ok',
                    status: 'recived'
                });
            }, 2000);
        
        },
        filterProfile() {
            this.contacts.forEach((elm) => {
                if(elm.name.toLowerCase().includes(this.searchProfile.toLowerCase())) {
                    elm.visible = true;
                }else {
                    elm.visible = false;
                }
            });
        }
    },
    // per scrollare ogni volta che va inserito un messaggio con l'id al div contenitore
    updated() {
        let objDiv = document.getElementById("scroll-down");
        objDiv.scrollTop = objDiv.scrollHeight;
    }
    
    
});
