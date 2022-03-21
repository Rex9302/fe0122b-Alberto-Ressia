let tk = localStorage.getItem('token')

if (tk === 'ok') {

    let param = new URLSearchParams(location.search)
    let id = param.get('id')

    let listaUtenti = localStorage.getItem('utenti')

    let db = listaUtenti == null ? [] : JSON.parse(listaUtenti)

    let utente = db.find(u => u.id == id)

    document.querySelector('#newNome').placeholder = utente.username
    document.querySelector('#newMail').placeholder = utente.email
    document.querySelector('#newPw').placeholder = utente.password

    document.querySelector('#boh').addEventListener('click', function () {
        let newNome = document.querySelector('#newNome').value
        let newMail = document.querySelector('#newMail').value
        let newPw = document.querySelector('#newPw').value
        var controllo = true

        var checkUser = db.find(o => o.email === newMail || o.username === newNome) //checkuser
        console.log(checkUser)
        console.log(db)
        console.log(controllo)

        if (newNome == '' || newMail == '' || newPw == '') { //controllo stringa vuota
            controllo = false
            console.log(controllo)
        } else {
            console.log('ok')
            console.log(controllo)
        }

        if (checkUser == undefined) {
            console.log(controllo)
        } else {
            controllo = false
            console.log(controllo)
        }

        if (controllo == true) {
            console.log(controllo)

            let newArr = db.map(obj => {
                if (obj.id == id) {
                    return {
                        id: Number(id),
                        username: newNome,
                        email: newMail,
                        password: newPw
                    };
                }

                return obj;
            });

            localStorage.setItem('utenti', JSON.stringify(newArr))

            localStorage.setItem('nome', newNome)
            localStorage.setItem('email', newMail)
            localStorage.setItem('pw', newPw)


            Swal.fire({
                icon: 'success',
                title: 'Ottimo!',
                text: 'Hai modificato i tuoi dati!',
            })
            setTimeout(function () {
                window.location.href = "/cartella/profile.html";
            }, 2000);

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Utente già in uso o campi vuoti!',
            })
        }
    })

} else {
    window.location.href = "/login.html";
}

