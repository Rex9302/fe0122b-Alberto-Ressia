//scaricare utenti
//inserirli nella tabella
//tasto cancella per eliminare utenti
//tasto modifica
//tasto aggiungi utente -> link a un'altra pagina con form per aggiungere utenti

fetch('https://sofin.wp-admin.it/public/api/v1/user')
.then(response => response.json())
.then(data => {var ciao = (data)
console.log(data)


function creaTabella(){
    var select = document.querySelector('#tab')

    data.forEach(function(elemento){
        let riga = document.createElement('tr');
        let cancella = document.createElement('button');
        let modifica = document.createElement('a');
        cancella.innerText = 'Cancella'
        modifica.innerText = 'Modifica'
        modifica.href = 'edit.html?id=' + elemento.id
        cancella.classList.add('delete')
        modifica.classList.add('modifica')
        select.append(riga)

        for (let prop in elemento){

            if(prop == 'name' ||  prop == 'lastname' ||  prop == 'email' ||  prop == 'role_id'){
            let cella = document.createElement('td')
            cella.innerText = elemento[prop]
            riga.append(cella)
            riga.append(cancella)
            riga.append(modifica)
            };
        };


       //Cancella
        cancella.setAttribute('id', elemento.id)
        let deleta = riga.querySelector(".delete")
        deleta.addEventListener('click', function(){
             // cancello l'HTML

            fetch(
                'https://sofin.wp-admin.it/public/api/v1/user/' + elemento.id, 
                {
                    method: 'DELETE', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )
            .then(response => response.json())
            .then(data => {

                Swal.fire({
                    icon: 'success',
                    title: 'Ottimo!',
                    text: elemento.name+' Eliminato',
                  })
                riga.remove()
            })
            
        })
        //Fine Cancella

        //Modifica
        modifica.setAttribute('id', 'modifica' + elemento.id)
        let edit = riga.querySelector('.modifica')
        edit.addEventListener('click', function(){
            console.log(this.id)
            console.log('edit ok')
        })
        //Fine Modifica
    });

    
};
creaTabella();

})

