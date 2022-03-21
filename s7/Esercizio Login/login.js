////LOGIN////

document.querySelector('#login').addEventListener('click', function () {

var userLogin = document.querySelector('#userlogin').value
var emaillLogin = document.querySelector('#emailLogin').value
var pwLogin = document.querySelector('#pwlogin').value

var listaUtenti = localStorage.getItem('utenti') == null ? [] : JSON.parse(localStorage.getItem('utenti'))

let checkUser = listaUtenti.find(o => o.username == userLogin && o.password == pwLogin && o.email == emaillLogin )

if (checkUser == undefined){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Dati inseriti non validi!',
      })
}else{
        Swal.fire({
            icon: 'success',
            title: 'Ottimo!',
            text: 'Login effettuato!',
          })
          localStorage.setItem('nome', userLogin)
          localStorage.setItem('email', emaillLogin)
          localStorage.setItem('pw', pwLogin)
          localStorage.setItem('token', 'ok')

            setTimeout(function(){
            window.location.href = 'cartella/profile.html'
        }, 2000);  
}

});
