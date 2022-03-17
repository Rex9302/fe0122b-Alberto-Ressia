interface SmartPhone {

    ricarica() :void
    chiamata() :void
    azzeraChiamate() :void

}

class FirstUser implements SmartPhone{
    carica: number;
    numeroChiamate: number;
    durataChiamate: number;
    constructor(carica:number,numeroChiamate:number,durataChiamate: number){
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.durataChiamate = durataChiamate;
    }
    public ricarica(): void {
        let agg = Number(input.value)
        saldoOne.innerHTML = Math.ceil(Number(saldoOne.innerHTML) + agg)
        
    }
    public chiamata(): void { 
        this.numeroChiamate = this.numeroChiamate + 1
        chiamate.innerHTML = this.numeroChiamate;
        let costo = this.durataChiamate *0.2
        saldoOne.innerHTML = Math.ceil(saldoOne.innerHTML - costo)
    }
    public azzeraChiamate(): void {
        this.numeroChiamate = 0
        chiamate.innerHTML = 0
    }
}
class SecondUser implements SmartPhone{
    carica: number;
    numeroChiamate: number;
    durataChiamate: number;
    constructor(carica:number,numeroChiamate:number,durataChiamate: number){
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.durataChiamate = durataChiamate;
    }
    public ricarica(): void {
        let agg = Number(input.value)
        saldoTwo.innerHTML = Math.ceil(Number(saldoTwo.innerHTML) + agg)
        
    }
    public chiamata(): void { 
        this.numeroChiamate = this.numeroChiamate + 1
        chiamateTwo.innerHTML = this.numeroChiamate;
        let costo = this.durataChiamate *0.2
        saldoTwo.innerHTML = Math.ceil(saldoTwo.innerHTML - costo)
    }
    public azzeraChiamate(): void {
        this.numeroChiamate = 0
        chiamateTwo.innerHTML = 0
    }
}
class ThirdUser implements SmartPhone{
    carica: number;
    numeroChiamate: number;
    durataChiamate: number;
    constructor(carica:number,numeroChiamate:number,durataChiamate: number){
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.durataChiamate = durataChiamate;
    }
    public ricarica(): void {
        let agg = Number(input.value)
        saldoThree.innerHTML = Math.ceil(Number(saldoThree.innerHTML) + agg)
        
    }
    public chiamata(): void { 
        this.numeroChiamate = this.numeroChiamate + 1
        chiamateThree.innerHTML = this.numeroChiamate;
        let costo = this.durataChiamate *0.2
        saldoThree.innerHTML = Math.ceil(saldoThree.innerHTML - costo)
    }
    public azzeraChiamate(): void {
        this.numeroChiamate = 0
        chiamateThree.innerHTML = 0
    }
}
var userOne = new FirstUser(10,5,60)
var userTwo = new SecondUser(50,0,25)
var userThree = new ThirdUser(45,3,12)

var input:any = document.querySelector('#input')
var invia:any = document.querySelector('#invia')
var call:any = document.querySelector('#chiama')
var azzera:any = document.querySelector('#azzera')
var chiamate:any = document.querySelector('#chiamateOne')
var chiamateTwo:any = document.querySelector('#chiamateTwo')
var chiamateThree:any = document.querySelector('#chiamateThree')
var saldoOne:any = document.querySelector('#saldoCorrenteOne')
var saldoTwo:any = document.querySelector('#saldoCorrenteTwo')
var saldoThree:any = document.querySelector('#saldoCorrenteThree')

saldoOne.innerHTML = userOne.carica
chiamate.innerHTML = userOne.numeroChiamate

saldoTwo.innerHTML = userTwo.carica
chiamateTwo.innerHTML = userTwo.numeroChiamate

saldoThree.innerHTML = userThree.carica
chiamateThree.innerHTML = userThree.numeroChiamate

invia.addEventListener('click',function(){
    userOne.ricarica();
    userTwo.ricarica();
    userThree.ricarica();
})

call.addEventListener('click',function(){
    userOne.chiamata();
    userTwo.chiamata();
    userThree.chiamata();
})

azzera.addEventListener('click',function(){
    userOne.azzeraChiamate();
    userTwo.azzeraChiamate();
    userThree.azzeraChiamate();
})