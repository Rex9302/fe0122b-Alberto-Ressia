let tk = localStorage.getItem('token')

if(tk === 'ok'){

var selectUser = document.querySelector('#user')
var selectMail = document.querySelector('#mail')
let nome = localStorage.getItem('nome')
let email = localStorage.getItem('email')
let pw = localStorage.getItem('pw')

function cardDati(){
    
    selectUser.innerHTML = nome
    selectMail.innerHTML = email
    document.querySelector('#example-name').placeholder = nome
    document.querySelector('#example-email').placeholder = email
    document.querySelector('#example-pw').value = pw
};

cardDati();

document.querySelector('#logout').addEventListener('click', function(){
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    window.location.href="/login.html";
})


}else{
    window.location.href="/login.html";
}