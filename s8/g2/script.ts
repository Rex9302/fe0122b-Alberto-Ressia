class SonAccount{
    balanceInit:number; 
    constructor(balanceInit:number){
    this.balanceInit = balanceInit
    }

    oneDeposit(){
       var add :any = document.querySelector('#add2') ;
       var versamento = Number(add.value);
        this.balanceInit += versamento;
       depoF.innerHTML = this.balanceInit;
    }
    oneWithDraw(){
        var remove :any = document.querySelector('#remove2') ;
        var prelievo = Number(remove.value);
        this.balanceInit -= prelievo;
        depoF.innerHTML = this.balanceInit;
    }
}

class MotherAccount{
    balanceInit:number; 
    balanceNoInt:number;
    constructor(balanceInit:number , balanceNoInt:number){
    this.balanceInit = balanceInit;
    this.balanceNoInt = balanceNoInt;
    }

    Deposit1(){
       var add :any = document.querySelector('#add1') ;
       var versamento = Number(add.value);
       var VInteresse = Math.round((versamento * 1.1)) 
        this.balanceInit += VInteresse ;
       depoM.innerHTML = this.balanceInit;
       this.balanceNoInt += versamento;
       depoNoInt.innerHTML = this.balanceNoInt;
    }
    WithDraw1(){
        var remove :any = document.querySelector('#remove1') ;
        var prelievo = Number(remove.value);
        this.balanceInit -= prelievo;
        depoM.innerHTML = this.balanceInit;

        this.balanceNoInt -= prelievo;
        depoNoInt.innerHTML = this.balanceNoInt;
    }
}
interface movimento{
    tipoOperazione : string;
    utente : string;
    valore : number;
    data : Date
}

class Storico{
    utente:string;
    deposito:number;
    prelievo:number;
    constructor(utente:string,deposito:number,prelievo:number){
        this.utente = utente;
        this.deposito = deposito;
        this.prelievo = prelievo;
    }

    storicoF(){
        var add :any = document.querySelector('#add2');
        var versamento = Number(add.value);
        var oggi = new Date();
        var obj:movimento = {
            tipoOperazione : 'Versamento',
            utente : this.utente,
            valore : versamento,
            data : oggi
        }
        array.push(obj)
        console.table(array)
    }
    storicoFP(){
        var add :any = document.querySelector('#remove2');
        var deposito = Number(add.value);
        var oggi = new Date();
        var objP:movimento = {
            tipoOperazione : 'Prelievo',
            utente : this.utente,
            valore : deposito,
            data : oggi
        }
        array.push(objP)
        console.table(array)
    }
    storicoM(){
        var add :any = document.querySelector('#add1') ;
        var versamento = Number(add.value);
        var oggi = new Date();
        var obj:movimento = {
            tipoOperazione : 'Versamento',
            utente : this.utente,
            valore : versamento,
            data : oggi
        }
        array.push(obj)
        console.table(array)
    }
    storicoMP(){
        var remove :any = document.querySelector('#remove1') ;
        var presa = Number(remove.value);
        var oggi = new Date();
        var objP:movimento = {
            tipoOperazione : 'Prelievo',
            utente : this.utente,
            valore : presa,
            data : oggi
        }
        array.push(objP)
        console.table(array)
    }
}


//selezione
var depoM:any = document.querySelector('#conto1');
var depoF:any = document.querySelector('#conto2');
var depoNoInt :any = document.querySelector('#conto3');

//creazione
var contoF = new SonAccount(1500);
var contoM = new MotherAccount(2000,2000);
var storicoFiglio = new Storico('Figlio',0,0);
var storicoMadre = new Storico('Madre',0,0);

//array
var array = [];
//
depoF.innerHTML = contoF.balanceInit ;
depoM.innerHTML = contoM.balanceInit ;
depoNoInt.innerHTML = contoM.balanceNoInt;

//figlio
document.querySelector('#versamento2').addEventListener('click', function(){
    contoF.oneDeposit();
    storicoFiglio.storicoF();
    var add :any = document.querySelector('#add2')
    add.value = ''
})
document.querySelector('#prelievo2').addEventListener('click', function(){
    contoF.oneWithDraw();
    storicoFiglio.storicoFP();
    var remove :any = document.querySelector('#remove2')
    remove.value = ''
})
//madre
document.querySelector('#versamento1').addEventListener('click', function(){
    contoM.Deposit1();
    storicoMadre.storicoM();
    var add :any = document.querySelector('#add1')
    add.value = ''
})
document.querySelector('#prelievo1').addEventListener('click', function(){
    contoM.WithDraw1();
    storicoMadre.storicoMP();
    var remove :any = document.querySelector('#remove1')
    remove.value = ''
})
