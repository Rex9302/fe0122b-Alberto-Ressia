var regioni: any = document.querySelector('#regioni')
var provincie: any = document.querySelector('#provincie')
var regSel: any = document.querySelector('#reg-sel')
var provSel: any = document.querySelector('#prov-sel')
var i1: any = document.querySelector('#img-reg')
var i2: any = document.querySelector('#img-prov')

fetch('regioni.json')
    .then(response => response.json())
    .then(risposta => {
        populateRegioni(risposta)
        regioni.addEventListener('change', populateProvincie)
        provincie.addEventListener('change', populateHtml)
    })
function populateRegioni(p: any) {
    for (var i = 0; i < p.length; i++) {
        var option = document.createElement('option')
        option.setAttribute('value', p[i].prov_regione)
        option.innerText = p[i].prov_regione
        regioni.append(option)
    }
}
function populateProvincie() {
    var opt: any = document.querySelectorAll('#provincie option')
    var arrProvincie: any = []
    var selezionato = regioni.value
    fetch('province.json')
        .then(response => response.json())
        .then(risposta => {
            var option = document.createElement('option')
            opt.forEach((prop:any)=>{
                prop.remove()
            })
            option.setAttribute('value', 'none')
            provincie.append(option)

            for (var i = 0; i < risposta.length; i++) {
                if (risposta[i].prov_reg == selezionato) {
                    arrProvincie.push(risposta[i].prov_nome)
                }
            }
            arrProvincie.forEach(element => {
                var option = document.createElement('option')
                option.setAttribute('value', element)
                option.innerText = element
                provincie.append(option)
            })
        });

    regSel.innerText = ''
    provSel.innerText = ''
    i1.setAttribute('src', '')
    i2.setAttribute('src', '')
}
function populateHtml() {
    var selezionato = provincie.value;
    fetch('province.json')
        .then(response => response.json())
        .then(risposta => {
            for (var i = 0; i < risposta.length; i++) {
                if (risposta[i].prov_nome == selezionato) {
                    regSel.innerText = risposta[i].prov_reg
                    provSel.innerText = risposta[i].prov_nome
                    i1.setAttribute('src', risposta[i].prov_url)
                    i2.setAttribute('src', 'assets/img/province/' + risposta[i].prov_nome + '.png')
                }
                if (selezionato == 'none') {
                    regSel.innerText = ''
                    provSel.innerText = ''
                    i1.setAttribute('src', '')
                    i2.setAttribute('src', '')
                }
            }
        });
}