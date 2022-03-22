var regioni = document.querySelector('#regioni');
var provincie = document.querySelector('#provincie');
var regSel = document.querySelector('#reg-sel');
var provSel = document.querySelector('#prov-sel');
var i1 = document.querySelector('#img-reg');
var i2 = document.querySelector('#img-prov');
fetch('regioni.json')
    .then(function (response) { return response.json(); })
    .then(function (risposta) {
    populateRegioni(risposta);
    regioni.addEventListener('change', populateProvincie);
    provincie.addEventListener('change', populateHtml);
});
function populateRegioni(p) {
    for (var i = 0; i < p.length; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', p[i].prov_regione);
        option.innerText = p[i].prov_regione;
        regioni.append(option);
    }
}
function populateProvincie() {
    var opt = document.querySelectorAll('#provincie option');
    var arrProvincie = [];
    var selezionato = regioni.value;
    fetch('province.json')
        .then(function (response) { return response.json(); })
        .then(function (risposta) {
        var option = document.createElement('option');
        opt.forEach(function (prop) {
            prop.remove();
        });
        option.setAttribute('value', 'none');
        provincie.append(option);
        for (var i = 0; i < risposta.length; i++) {
            if (risposta[i].prov_reg == selezionato) {
                arrProvincie.push(risposta[i].prov_nome);
            }
        }
        arrProvincie.forEach(function (element) {
            var option = document.createElement('option');
            option.setAttribute('value', element);
            option.innerText = element;
            provincie.append(option);
        });
    });
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
