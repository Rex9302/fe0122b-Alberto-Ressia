fetch('Abbigliamento.json')
    .then(response => response.json())
    .then(risposta => {
        let arrVestiti: any = [];
        risposta.forEach((item: Abbigliamento) => {

            var vestiti = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);

            arrVestiti.push(vestiti)
            console.log(vestiti);
            console.log('Prezzo scontato senza IVA ' + vestiti.getSaldocapo());
            console.log('Prezzo da pagare scontato più IVA ' + vestiti.getAcquistoCapo());
        });
        for (let i = 0; i < arrVestiti.length; i++) {
            console.log(arrVestiti[i].getSaldocapo());
        }
        //ELEMENTI CREATI A MANO
        arrVestiti.push(vestito)
        arrVestiti.push(vestito2)
        arrVestiti.push(vestito3)
        
        populateSelectOptions(arrVestiti)
    })
//CLASSE//
class Abbigliamento {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;

    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getSaldocapo(): number {
        return Number((this.prezzoivaesclusa - (this.prezzoivaesclusa * this.saldo) / 100).toFixed(2))
    }
    getAcquistoCapo(): number {
        return Number((this.getSaldocapo() * 1.22).toFixed(2))
    }
}
//OGGETTI CREATI A MANO
let vestito = new Abbigliamento(6, 5473, 'inverno', 'giacca', 2174, 6, 'nero', 200, 244, 'negozio', 35)
let vestito2 = new Abbigliamento(7, 8219, 'estate', 'bermuda', 8529, 7, 'blu', 15, 18.3, 'magazzino', 20)
let vestito3 = new Abbigliamento(8, 3752, 'autunno', 'sciarpa', 9638, 6, 'giallo', 12, 14.64, 'negozio', 15)

//VARIABILI
var select: any = document.querySelector('#vestiti')
var collect: any = document.querySelector('#collezione');
var capo: any = document.querySelector('#capo');
var quantita: any = document.querySelector('#quantita');
var colore: any = document.querySelector('#colore');
var ivaInclusa: any = document.querySelector('#ivaInclusa');
var disponibile: any = document.querySelector('#disponibile');
var saldo: any = document.querySelector('#saldo');
var scontato: any = document.querySelector('#scontato')


//FUNZIONI
function populateSelectOptions(p: any) {

    for (var i = 0; i < p.length; i++) {
      //  for( var prop in p[i]){
      //      console.log(prop)
      //      console.log(p[i][prop])
      //  }
        var option = document.createElement('option')
        option.setAttribute('value', p[i].id)
        option.innerText = `${p[i].capo.toUpperCase()} `
        select.append(option)
    }

    select.addEventListener('change', function mostraVestiti() {

    try{
        var idVestito = select.value;
        var vestitoSel: any;
        for (var i = 0; i < p.length; i++) {
            if (p[i].id == idVestito) {
                vestitoSel = p[i]
            }
        }
        collect.innerText = vestitoSel.collezione;
        capo.innerText = vestitoSel.capo;
        quantita.innerText = vestitoSel.quantita;
        colore.innerText = vestitoSel.colore;
        ivaInclusa.innerText = vestitoSel.prezzoivainclusa + '€';
        disponibile.innerText = vestitoSel.disponibile;
        saldo.innerText = vestitoSel.saldo + '%';
        scontato.innerText = 'Prezzo scontato: ' + vestitoSel.getAcquistoCapo() + ' €'
    }
    catch{
        collect.innerText = '-';
        capo.innerText = '-';
        quantita.innerText = '-';
        colore.innerText = '-';
        ivaInclusa.innerText = '-';
        disponibile.innerText = '-';
        saldo.innerText = '-';
        scontato.innerText = 'Seleziona un capo d\' abbigliamento';
    }
    });
}
