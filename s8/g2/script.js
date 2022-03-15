var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit) {
        this.balanceInit = balanceInit;
    }
    SonAccount.prototype.oneDeposit = function () {
        var add = document.querySelector('#add2');
        var versamento = Number(add.value);
        this.balanceInit += versamento;
        depoF.innerHTML = this.balanceInit;
    };
    SonAccount.prototype.oneWithDraw = function () {
        var remove = document.querySelector('#remove2');
        var prelievo = Number(remove.value);
        this.balanceInit -= prelievo;
        depoF.innerHTML = this.balanceInit;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function () {
    function MotherAccount(balanceInit, balanceNoInt) {
        this.balanceInit = balanceInit;
        this.balanceNoInt = balanceNoInt;
    }
    MotherAccount.prototype.Deposit1 = function () {
        var add = document.querySelector('#add1');
        var versamento = Number(add.value);
        var VInteresse = Math.round((versamento * 1.1));
        this.balanceInit += VInteresse;
        depoM.innerHTML = this.balanceInit;
        this.balanceNoInt += versamento;
        depoNoInt.innerHTML = this.balanceNoInt;
    };
    MotherAccount.prototype.WithDraw1 = function () {
        var remove = document.querySelector('#remove1');
        var prelievo = Number(remove.value);
        this.balanceInit -= prelievo;
        depoM.innerHTML = this.balanceInit;
        this.balanceNoInt -= prelievo;
        depoNoInt.innerHTML = this.balanceNoInt;
    };
    return MotherAccount;
}());
var Storico = /** @class */ (function () {
    function Storico(utente, deposito, prelievo) {
        this.utente = utente;
        this.deposito = deposito;
        this.prelievo = prelievo;
    }
    Storico.prototype.storicoF = function () {
        var add = document.querySelector('#add2');
        var versamento = Number(add.value);
        var oggi = new Date();
        this.deposito = versamento;
        var storicoFiglio = this.utente + ' versa ' + this.deposito + ' ' + oggi;
        arrayF.push(storicoFiglio);
        console.log(arrayF);
    };
    Storico.prototype.storicoFP = function () {
        var remove = document.querySelector('#remove2');
        var presa = Number(remove.value);
        var oggi = new Date();
        this.prelievo = presa;
        var storicoFiglio = this.utente + ' preleva ' + this.deposito + ' ' + oggi;
        arrayF.push(storicoFiglio);
        console.log(arrayF);
    };
    Storico.prototype.storicoM = function () {
        var add = document.querySelector('#add1');
        var versamento = Number(add.value);
        var oggi = new Date();
        this.deposito = versamento;
        var storicoMadre = this.utente + ' versa ' + this.deposito + ' ' + oggi;
        arrayM.push(storicoMadre);
        console.log(arrayM);
    };
    Storico.prototype.storicoMP = function () {
        var remove = document.querySelector('#remove1');
        var presa = Number(remove.value);
        var oggi = new Date();
        this.prelievo = presa;
        var storicoMadre = this.utente + ' preleva ' + this.deposito + ' ' + oggi;
        arrayM.push(storicoMadre);
        console.log(arrayM);
    };
    return Storico;
}());
//selezione
var depoM = document.querySelector('#conto1');
var depoF = document.querySelector('#conto2');
var depoNoInt = document.querySelector('#conto3');
//creazione
var contoF = new SonAccount(0);
var contoM = new MotherAccount(0, 0);
var storicoFiglio = new Storico('Figlio', 0, 0);
var storicoMadre = new Storico('Madre', 0, 0);
//array
var arrayM = [];
var arrayF = [];
//
depoF.innerHTML = contoF.balanceInit;
depoM.innerHTML = contoM.balanceInit;
depoNoInt.innerHTML = contoM.balanceNoInt;
document.querySelector('#versamento2').addEventListener('click', function () {
    contoF.oneDeposit();
    storicoFiglio.storicoF();
    var add = document.querySelector('#add2');
    add.value = '';
});
document.querySelector('#prelievo2').addEventListener('click', function () {
    contoF.oneWithDraw();
    storicoFiglio.storicoFP();
    var remove = document.querySelector('#remove2');
    remove.value = '';
});
document.querySelector('#versamento1').addEventListener('click', function () {
    contoM.Deposit1();
    storicoMadre.storicoM();
    var add = document.querySelector('#add1');
    add.value = '';
});
document.querySelector('#prelievo1').addEventListener('click', function () {
    contoM.WithDraw1();
    storicoMadre.storicoMP();
    var remove = document.querySelector('#remove1');
    remove.value = '';
});
