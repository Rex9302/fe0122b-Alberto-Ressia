
document.getElementById("myBtn").addEventListener("click", showMenu);
document.getElementById("grande").addEventListener("click", grande);
document.getElementById("colore").addEventListener("click", colore);
document.getElementById("maiuscolo").addEventListener("click", maiuscolo);
document.getElementById("nascondi").addEventListener("click", nascondi);
document.getElementById("mostra").addEventListener("click", mostra);
document.getElementById("elemento1").addEventListener("click", elemento1);
document.getElementById("elemento2").addEventListener("click", elemento2);
document.getElementById("elemento3").addEventListener("click", elemento3);
document.getElementById("elemento4").addEventListener("click", elemento4);

//menu
function showMenu() {
    document.getElementById('dropdown').classList.toggle('naso')
}

//bottoni
function grande() {
    document.getElementById('titolone').style.fontSize = '90px'
}
function colore() {
    document.getElementById('titolone').style.color = 'red'
}
function maiuscolo() {
    document.getElementById('titolone').style.textTransform = 'uppercase'
}
function nascondi() {
    document.getElementById('titolone').style.visibility = 'hidden'
}
function mostra() {
    document.getElementById('titolone').style.visibility = 'visible'
}

var counter = 0;
//elementi lista
function elemento1() {

    document.getElementById('elemento1').classList.toggle('boh')
}




function elemento2() {

    document.getElementById('elemento2').classList.toggle('boh')





}
function elemento3() {
    document.getElementById('elemento3').classList.toggle('boh')

}
function elemento4() {
    document.getElementById('elemento4').classList.toggle('boh')

}
