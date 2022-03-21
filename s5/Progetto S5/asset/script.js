
document.querySelector('#add').addEventListener('click', function () {
    let valore = document.querySelector('#testo').value;
    if (!valore)
        return
    let li = document.createElement('li')

    li.innerHTML = valore + '<i class="bi bi-dash-circle-fill"></i>'

    let close = li.querySelector('li i')

    document.querySelector('#lista').append(li)
    document.querySelector('#testo').value = ''

    close.addEventListener('click', function (){
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
        li.innerHTML = elemento + '<i class="bi bi-dash-circle-fill"></i>';
        let close = li.querySelector('li i')

        document.querySelector('#lista').append(li)

        close.addEventListener('click', function () {
            li.remove()
            elimina(elemento)
        })
    })
}
creaHtml();

function elimina(elemento){
    let elementiSalvati = localStorage.getItem('lista')
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)
    console.log(db)
    let indice = db.indexOf(elemento)
    console.log(indice)
    db.splice(indice,1)
    localStorage.setItem('lista', JSON.stringify(db))
}