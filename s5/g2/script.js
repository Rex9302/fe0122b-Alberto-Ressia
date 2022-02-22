


function calcoloBudget() {

    let budget = 100;

    while (budget > 0) {

        let spese = Math.floor(Math.random() * 10);

        console.log(budget);

        if (budget <= 50 && budget >= 45) {
            document.querySelector('#test').innerHTML = `<br>Hai speso ben : ${spese} dobloni! Ti rimangono ${budget} dobloni. <b>Sei al 50%!</b>`
            console.log('Il budget è al 50%!')

        }
        if (budget <= 25 && budget >= 20) {
            document.querySelector('#test1').innerHTML = `<br>Hai speso ben : ${spese} dobloni! Ti rimangono ${budget} dobloni. <b>Sei al 25%!</b>`
            console.log('Il budget è al 25%!')

        }
        if (budget <= 10) {
            document.querySelector('#test2').innerHTML = `<b>Hai quasi finito i dobloni!</b>`
            console.log('Hai quasi finito i dobloni!')

        }

        budget = budget - spese;
        document.querySelector('#lista').innerHTML += `<p> Hai speso ben : ${spese} dobloni! Ti rimangono ${budget} dobloni`
    }
}


var totale = 100;

function esperimento() {

    tempo = setTimeout(esperimento, 100);

    let spese = Math.floor(Math.random() * 8);

    if (totale <= 50 && totale >= 45) {
        document.querySelector('#test').innerHTML = `<br>Hai speso ben : ${spese} dobloni! Ti rimangono ${totale} dobloni. <b>Sei al 50%!</b>`
        console.log('Il totale è al 50%!')

    }
    if (totale <= 25 && totale >= 20) {
        document.querySelector('#test1').innerHTML = `<br>Hai speso ben : ${spese} dobloni! Ti rimangono ${totale} dobloni. <b>Sei al 25%!</b>`
        console.log('Il totale è al 25%!')

    }
    if (totale <= 0) {
        document.querySelector('#test2').innerHTML = `<b>Hai quasi finito i dobloni!</b>`;
        console.log('Hai quasi finito i dobloni!');
        clearTimeout(tempo);

    }

    totale = totale - spese;
    document.querySelector('#lista').innerHTML += `<p> Hai speso ben : ${spese} dobloni! Ti rimangono ${totale} dobloni`

}
