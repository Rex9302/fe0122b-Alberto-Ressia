abstract class Tasse {
    redditoannuolordo:number

    constructor(redditoannuolordo:number) {
        this.redditoannuolordo = redditoannuolordo;
    }
    abstract getFascia():number
    abstract getTasseInps():number
    abstract getTasseIrpef():number
    abstract getTotTasse():number
    abstract getNetto():number

}
class Fascia1 extends Tasse {
    fascia:number
    constructor(redditoannuolordo:number, fascia:number) {
        super(redditoannuolordo)
        this.fascia = fascia;
    }
    getFascia(): number {
        if(this.fascia == 0){
            return Math.round(this.redditoannuolordo * 0.78)
        }else if (this.fascia == 1){
            return Math.round(this.redditoannuolordo * 0.56)
        }else{
            return Math.round(this.redditoannuolordo * 0.4)
        }
    }
    getTasseInps():number {
        if(this.redditoannuolordo >= 30000){
            return Math.round((this.getFascia() * 0.27))
        }else if (this.redditoannuolordo < 30000 && this.redditoannuolordo > 18000){
            return Math.round((this.getFascia() * 0.24))
        }else{
            return Math.round((this.getFascia() * 0.2))
        }
    }
    getTasseIrpef():number {
        if(this.redditoannuolordo >= 30000){
            return Math.round((this.getFascia() * 0.3))
        }else if (this.redditoannuolordo < 30000 && this.redditoannuolordo > 18000){
            return Math.round((this.getFascia() * 0.2))
        }else{
            return Math.round((this.getFascia() * 0.1))
        }
    }
    getTotTasse():number {
        return this.getTasseInps() + this.getTasseIrpef()
    }
    getNetto():number {
        return this.redditoannuolordo - this.getTotTasse()
    }
}

var fascia:any = document.querySelector('#fascia')
var input:any = document.querySelector('#reddito')

document.querySelector('#btn').addEventListener('click',function(){
    var reddito = Number(input.value)
    if(reddito == 0){
        alert('Controlla l\'importo inserito')
    }else{
    var classeReddito = fascia.selectedIndex
    var calcInps = new Fascia1(reddito, classeReddito)
    var cInps:any = document.querySelector('#inps')
    cInps.innerHTML = calcInps.getTasseInps() 
    var cIrpef:any = document.querySelector('#irpef')
    cIrpef.innerHTML = calcInps.getTasseIrpef() 
    var Tot:any = document.querySelector('#tasse')
    Tot.innerHTML = calcInps.getTotTasse() 
    var Netto:any = document.querySelector('#netto')
    Netto.innerHTML = calcInps.getNetto() 
    var imponibile:any = document.querySelector('#imponibile')
    imponibile.innerHTML = calcInps.getFascia() 
    }
    input.value = ''
})

