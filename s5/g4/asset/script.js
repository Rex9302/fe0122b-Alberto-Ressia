document.querySelector('#add').addEventListener('click', function () {
    let valore = document.querySelector('#testo').value;
    if (!valore)
        return
    let li = document.createElement('li')
    li.innerText = valore;
    document.querySelector('#lista').append(li)
    document.querySelector('#testo').value = ''

    li.addEventListener('click', function (){
    li.remove()
    elimina(valore)
})
salva(valore);
})


function salva(testo) {

    let elementiSalvati = localStorage.getItem('lista')
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)
    db.push(testo)
    localStorage.setItem('lista', JSON.stringify(db))
}

function creaHtml() {

    let elementiSalvati = localStorage.getItem('lista')
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)

    db.forEach(function (elemento) {
        let li = document.createElement('li')
        li.innerText = elemento

        document.querySelector('#lista').append(li)

        li.addEventListener('click', function () {
            li.remove()
            elimina(elemento)
        })
    })
}
creaHtml();

function elimina(elemento){
    let elementiSalvati = localStorage.getItem('lista')
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)
    let indice = db.indexOf(elemento)
    db.splice(indice,1)
    localStorage.setItem('lista', JSON.stringify(db))
}