//esempio var
var a = 3;
var b = 4;
var c = a + b;
document.getElementById('esempioVar').innerHTML = c;

var alpha = 'Giovanni';
var beta = 'Giorgio';
var theta = 'My name is';
var finale = theta + " " + alpha + " " + beta;
document.getElementById('esempioVar2').innerHTML = finale;

//esempio let
var a = 34;
var b = 45; {
    let a = 5;
    let b = 4;
    let c = a + b;
    document.getElementById('esempioLet').innerHTML = c;
}
var alpha = 'test';
var theta = ' Call me'; {
    let alpha = 'But';
    let theta = 'Everybody';
    let zeta = 'Calls Me';
    let finale = alpha + " " + theta + " " + zeta + " " + beta;
    document.getElementById('esempioLet2').innerHTML = finale;
}
//esempio const
const GiovanniGiorgio = 'Giovanni Giorgio';
document.getElementById('esempioConst').innerHTML = theta + " " + GiovanniGiorgio;

//esempio boolean 
document.getElementById('boolean').innerHTML = Boolean(a > b);

//calcolatrice

var operazioneCliccata = false;

function tasti(valore) {

    if (valore == "+" || valore == "-" || valore == "*" || valore == "/") {
        if (operazioneCliccata == false) {
            document.getElementById("ops").value += valore;
            operazioneCliccata = true;
        }
    }

    if (Number.isInteger(valore) || valore == ".") {
        document.getElementById("ops").value += valore;
    }
}

function operazione() {
    document.getElementById("ops").value = eval(document.getElementById("ops").value);
    operazioneCliccata = false;
}

function cancella() {
    document.getElementById("ops").value = "";
    operazioneCliccata = false;
}