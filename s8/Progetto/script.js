fetch('Abbigliamento.json')
    .then(function (response) { return response.json(); })
    .then(function (risposta) {
    risposta.forEach(function (item) {
        var vestiti = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
        console.log('Prezzo scontato senza IVA ' + vestiti.getSaldocapo());
        console.log('Prezzo da pagare scontato più IVA ' + vestiti.getAcquistoCapo());
        console.log(vestiti);
    });
    console.log(vestito, vestito2, vestito3);
    console.log(vestito.getSaldocapo());
    console.log(vestito2.getSaldocapo());
    console.log(vestito3.getSaldocapo());
    console.log(vestito.getAcquistoCapo());
    console.log(vestito2.getAcquistoCapo());
    console.log(vestito3.getAcquistoCapo());
});
//CLASSE//
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
    //Applico il saldo//
    Abbigliamento.prototype.getSaldocapo = function () {
        return Number((this.prezzoivaesclusa - (this.prezzoivaesclusa * this.saldo) / 100).toFixed(2));
    };
    //Calcolo il costo tot. del capo//
    Abbigliamento.prototype.getAcquistoCapo = function () {
        return Number((this.getSaldocapo() * 1.22).toFixed(2));
    };
    return Abbigliamento;
}());
var vestito = new Abbigliamento(6, 1727, 'estate', 'canotta', 1245, 6, 'bianco', 100, 122, 'negozio', 10);
var vestito2 = new Abbigliamento(7, 8712, 'autunno', 'cappello', 8945, 7, 'verde', 10, 12, 'magazzino', 8);
var vestito3 = new Abbigliamento(8, 9832, 'inverno', 'sciarpa', 1597, 6, 'giallo', 20, 24.4, 'negozio', 10);
