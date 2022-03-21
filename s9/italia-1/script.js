///DICHIARO VAR GLOBALI
var regioni = document.querySelector('#regioni');
var provincie = document.querySelector('#provincie');
var regSel = document.querySelector('#reg-sel');
var provSel = document.querySelector('#prov-sel');
var i1 = document.querySelector('#img-reg');
var i2 = document.querySelector('#img-prov');
///FETCHO LE REGIONI E ASSOCIO FUNZIONI PER RIEMPIRE LE OPTION DELLE REGIONI E AGGIUNGO EVENTLISTENER AL CHANGE
fetch('regioni.json')
    .then(function (response) { return response.json(); })
    .then(function (risposta) {
    populateRegioni(risposta);
    regioni.addEventListener('change', populateProvincie);
    provincie.addEventListener('change', populateHtml);
});
///AGGIUNGO LE OPTION AL SELECT REGIONI
function populateRegioni(p) {
    for (var i = 0; i < p.length; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', p[i].prov_regione);
        option.innerText = p[i].prov_regione;
        regioni.append(option);
    }
}
///FUNZIONE CHE RIEMPIE LE OPTION DELLE PROVINCIE AL CHANGE DEL SELETTORE REGIONI
function populateProvincie() {
    ///DICHIARO VARIABILI///
    var opt = document.querySelector('#provincie option');
    var arrProvincie = [];
    var selezionato = regioni.value;
    ///FETCHO IL JSON PROVINCE, CON UN CICLO FOR RIEMPIO UN ARRAY CON LE PROVINCE DELLA REGIONE SELEZIONATA
    fetch('province.json')
        .then(function (response) { return response.json(); })
        .then(function (risposta) {
        var option = document.createElement('option');
        for (var i = 0; i < risposta.length; i++) {
            if (risposta[i].prov_reg == selezionato) {
                arrProvincie.push(risposta[i].prov_nome);
            }
            else {
                arrProvincie.splice(0, risposta[i].prov_nome); //QUESTA SEZIONE SERVE PER AGGIORNARE L'ARRAY E LE OPTION DEL SELETTTORE AD OGNI CHANGE
                provincie.remove(opt);
                option.setAttribute('value', 'none');
                provincie.append(option);
            }
        }
        arrProvincie.forEach(function (element) {
            var option = document.createElement('option');
            option.setAttribute('value', element);
            option.innerText = element;
            provincie.append(option);
        });
    });
    ///RESET DEI CAMPI AL CHANGE DELLA REGIONE SELEZIONATA///
    regSel.innerText = '';
    provSel.innerText = '';
    i1.setAttribute('src', '');
    i2.setAttribute('src', '');
}
function populateHtml() {
    var selezionato = provincie.value;
    fetch('province.json')
        .then(function (response) { return response.json(); })
        .then(function (risposta) {
        for (var i = 0; i < risposta.length; i++) {
            if (risposta[i].prov_nome == selezionato) {
                regSel.innerText = risposta[i].prov_reg;
                provSel.innerText = risposta[i].prov_nome;
                i1.setAttribute('src', risposta[i].prov_url);
                i2.setAttribute('src', 'assets/img/province/' + risposta[i].prov_nome + '.png');
            }
            if (selezionato == 'none') {
                regSel.innerText = '';
                provSel.innerText = '';
                i1.setAttribute('src', '');
                i2.setAttribute('src', '');
            }
        }
    });
}
