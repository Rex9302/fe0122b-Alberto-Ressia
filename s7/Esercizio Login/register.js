class datiUtente {
    constructor(username, email, password) {
        this.id = (() => {
            let newID = localStorage.getItem('id') == null ? 1 : Number(localStorage.getItem('id')) + 1
            localStorage.setItem('id', newID)
            return newID
        })()

        this.username = username;
        this.email = email;
        this.password = password;
    }
}



document.querySelector('#reg').addEventListener('click', function () {

    var controllo = true
    var controlloUser = true
    var campi = document.querySelectorAll('.pippo-franco')

    let valori = Array.from(campi).map(elemento => elemento.value)

    var [userRegister,emailRegister,passwordRegister,password2Register] = valori

    var listaUtenti = localStorage.getItem('utenti') == null ? [] : JSON.parse(localStorage.getItem('utenti'))

    var checkNome = listaUtenti.find(o => o.username == userRegister)
    var checkMail = listaUtenti.find(o => o.email == emailRegister)

    if (checkMail == null && checkNome == null){
        console.log('Dati validi')
    }else{
        controllo = false
        controlloUser = false
    }


    campi.forEach(function (campo) {

        if (campo.value == "") {
            controllo = false
            campo.style.border = "1px solid red"
        } else {
            console.log(campo.id + "  valido")
            campo.style.border = ""
        }
    });

    if (password2Register != passwordRegister) {
        controllo = false
    } else {
        console.log('Pass combaciano')
    }

    if (controllo == true) {

        //pusho i dati corretti e li salvo in localStorage
        let utentiSalvati = localStorage.getItem('utenti') == null ? [] : JSON.parse(localStorage.getItem('utenti'))
        let dati = new datiUtente(userRegister, emailRegister, passwordRegister)
        utentiSalvati.push(dati)
        localStorage.setItem('utenti', JSON.stringify(utentiSalvati))

        Swal.fire({
            icon: 'success',
            title: 'Ottimo!',
            text: 'Ti sei registrato!',
          })

          setTimeout(function(){
            window.location.href = 'login.html'
        }, 2000);

    } else {
        if(controlloUser == false){
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Utente o email già utilizzate!',
              })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Controlla i campi!',
              })
        }

    }

});

