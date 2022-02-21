var oggi = new Date()


document.getElementById('data').innerHTML = oggi;

document.getElementById('dataEU').innerHTML = oggi.toLocaleString();



var anno = oggi.getFullYear()
var mese = oggi.getMonth()
var giorno = oggi.getDate()
var ore = oggi.getHours()
var minuti = oggi.getMinutes()
var gsettimana = oggi.getDay()


document.getElementById('anno').innerHTML = anno;
document.getElementById('mese').innerHTML = mese;
document.getElementById('giorno').innerHTML = giorno;
document.getElementById('ore').innerHTML = ore + ':' + minuti;
document.getElementById('gsettimana').innerHTML = gsettimana;




function olologio(){
    var date = new Date();
    var o = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 

    o = (o < 10) ? "0" + o : o;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

var tempo = o + ':' + m + ':' + s;

document.getElementById('orologio').innerHTML = tempo;

setTimeout(olologio, 1000);

}

olologio();