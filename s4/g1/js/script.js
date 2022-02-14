document.getElementById('titolo').innerHTML = 'Titolo in h1';
console.log(3+4);


function change() {
    document.getElementById('titolo').innerHTML = 'Ciao'
    document.getElementById('titolo').style.color = 'white';
    document.getElementById('titolo').style.fontSize = '3.5rem';
    document.getElementById('titolo').style.fontFamily = 'Poppins';
    document.getElementById('titolo').style.backgroundColor = 'red';
    window.alert('Hai cambiato tutto');
    document.getElementById('btn-1').style.backgroundColor = 'white';
    document.getElementById('btn-1').style.fontSize = '2.5rem'
    document.getElementById('btn-1').innerHTML = 'Hai cambiato tutto'
    document.getElementById('btn-1').style.fontFamily = 'Poppins';
    document.getElementById('btn-1').style.borderRadius = '0px';
    document.getElementById('btn-1').style.color = 'red';
    document.getElementById('btn-1').style.border = '3px solid red';
}
