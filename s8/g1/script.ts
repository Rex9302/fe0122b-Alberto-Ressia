var giocatore1: any = document.querySelector('#g1');
var giocatore2: any = document.querySelector('#g2');
var risultato = document.querySelector('#risultato');
var random: any = document.querySelector('#random');

document.querySelector('#invia').addEventListener('click', function () {
    if(giocatore1.value < 1 || giocatore1.value > 100 || giocatore2.value < 1 || giocatore2.value > 100){
        alert('inserisci dei numeri da 1 a 100')
    }else{
        var randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
        random.innerHTML = randomNumber
    
        if (giocatore1.value == randomNumber) {
            document.querySelector('#risultato-perfetto').innerHTML = 'Giocare 1 ha indovinato!'
        }
        if (giocatore2.value == randomNumber) {
            document.querySelector('#risultato-perfetto').innerHTML = 'Giocare 2 ha indovinato!'
        }

        let diff1:number = Math.abs(randomNumber-giocatore1.value)
        let diff2:number = Math.abs(randomNumber-giocatore2.value)

        if(diff1 > diff2){
            risultato.innerHTML = 'Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!'
        }else{
            risultato.innerHTML = 'Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!'
        }
    }
})
