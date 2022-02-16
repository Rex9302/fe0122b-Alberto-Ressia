//calcolo range anni
function invio() {
    var anni = document.getElementById('eta').value;
    var lavoro = 40;
    var rimanenza = (lavoro - anni);
    if (anni >= 40 && anni < 99) {
        document.getElementById('risultato').innerHTML = 'Fila via in pensione!';
    } else if (anni >= 99) {
        document.getElementById('risultato').innerHTML = 'Eh la madonna!';
    } else {
        document.getElementById('risultato').innerHTML = 'Ti rimangono ' + rimanenza + ' anni di lavoro';
    }
};

//funzione freccia

benvenuto = () => { alert('Benvenuto al calcolo pensione INPS') };

//funzione dentro ad una funzione


function lavoro() {

    var prova = 'Testo Prova';

    function test() {
        console.log(prova + ' ho finito la fantasia')
    }
    return test();
}

var prova2 = lavoro();


function muovi() {
    document.getElementById('cubo').style.marginLeft = (89 + 'vw')
}

function enlarge() {
    document.getElementById('cubo').style.paddingLeft = (89 + 'vw')
}