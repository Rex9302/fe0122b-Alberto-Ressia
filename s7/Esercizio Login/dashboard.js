let tk = localStorage.getItem('token')

if(tk === 'ok'){
function creaTabella(){
    var select = document.querySelector('#tab')

    let listaUtenti = localStorage.getItem('utenti')

    let db = listaUtenti == null ? [] : JSON.parse(listaUtenti)
    
    db.forEach(function(elemento){
        let riga = document.createElement('tr');
        let cancella = document.createElement('button');
        let modifica = document.createElement('a');
        cancella.innerText = 'Cancella'
        modifica.innerText = 'Modifica'
        modifica.href = '../edit.html?id=' + elemento.id
        cancella.classList.add('delete')
        modifica.classList.add('modifica')
        select.append(riga)

        for (let prop in elemento){
            if(prop != 'id' && prop != 'password'){
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
            riga.remove()
            let idB = this.id
            let elementiSalvati = localStorage.getItem('utenti')
            let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)
            let sel = db.findIndex(element => element.id == idB)
            db.splice(sel,1)
            localStorage.setItem('utenti', JSON.stringify(db))
        })
        //Fine Cancella

        //Modifica
        modifica.setAttribute('id', 'modifica' + elemento.id)
        let edit = riga.querySelector('.modifica')
        edit.addEventListener('click', function(){
            console.log(this.id)
            console.log('edit ok')
        })

    });

    
};
creaTabella();

document.querySelector('#logout').addEventListener('click', function(){
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    window.location.href="/login.html";
})

}else{
    window.location.href="/login.html";
}
