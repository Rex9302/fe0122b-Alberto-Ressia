var FirstUser = /** @class */ (function () {
    function FirstUser(carica, numeroChiamate, durataChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.durataChiamate = durataChiamate;
    }
    FirstUser.prototype.ricarica = function () {
        var agg = Number(input.value);
        saldoOne.innerHTML = Math.ceil(Number(saldoOne.innerHTML) + agg);
    };
    FirstUser.prototype.chiamata = function () {
        this.numeroChiamate = this.numeroChiamate + 1;
        chiamate.innerHTML = this.numeroChiamate;
        var costo = this.durataChiamate * 0.2;
        saldoOne.innerHTML = Math.ceil(saldoOne.innerHTML - costo);
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        chiamate.innerHTML = 0;
    };
    return FirstUser;
}());
var SecondUser = /** @class */ (function () {
    function SecondUser(carica, numeroChiamate, durataChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.durataChiamate = durataChiamate;
    }
    SecondUser.prototype.ricarica = function () {
        var agg = Number(input.value);
        saldoTwo.innerHTML = Math.ceil(Number(saldoTwo.innerHTML) + agg);
    };
    SecondUser.prototype.chiamata = function () {
        this.numeroChiamate = this.numeroChiamate + 1;
        chiamateTwo.innerHTML = this.numeroChiamate;
        var costo = this.durataChiamate * 0.2;
        saldoTwo.innerHTML = Math.ceil(saldoTwo.innerHTML - costo);
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        chiamateTwo.innerHTML = 0;
    };
    return SecondUser;
}());
var ThirdUser = /** @class */ (function () {
    function ThirdUser(carica, numeroChiamate, durataChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.durataChiamate = durataChiamate;
    }
    ThirdUser.prototype.ricarica = function () {
        var agg = Number(input.value);
        saldoThree.innerHTML = Math.ceil(Number(saldoThree.innerHTML) + agg);
    };
    ThirdUser.prototype.chiamata = function () {
        this.numeroChiamate = this.numeroChiamate + 1;
        chiamateThree.innerHTML = this.numeroChiamate;
        var costo = this.durataChiamate * 0.2;
        saldoThree.innerHTML = Math.ceil(saldoThree.innerHTML - costo);
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        chiamateThree.innerHTML = 0;
    };
    return ThirdUser;
}());
var userOne = new FirstUser(10, 5, 60);
var userTwo = new SecondUser(50, 0, 25);
var userThree = new ThirdUser(45, 3, 12);
var input = document.querySelector('#input');
var invia = document.querySelector('#invia');
var call = document.querySelector('#chiama');
var azzera = document.querySelector('#azzera');
var chiamate = document.querySelector('#chiamateOne');
var chiamateTwo = document.querySelector('#chiamateTwo');
var chiamateThree = document.querySelector('#chiamateThree');
var saldoOne = document.querySelector('#saldoCorrenteOne');
var saldoTwo = document.querySelector('#saldoCorrenteTwo');
var saldoThree = document.querySelector('#saldoCorrenteThree');
saldoOne.innerHTML = userOne.carica;
chiamate.innerHTML = userOne.numeroChiamate;
saldoTwo.innerHTML = userTwo.carica;
chiamateTwo.innerHTML = userTwo.numeroChiamate;
saldoThree.innerHTML = userThree.carica;
chiamateThree.innerHTML = userThree.numeroChiamate;
invia.addEventListener('click', function () {
    userOne.ricarica();
    userTwo.ricarica();
    userThree.ricarica();
});
call.addEventListener('click', function () {
    userOne.chiamata();
    userTwo.chiamata();
    userThree.chiamata();
});
azzera.addEventListener('click', function () {
    userOne.azzeraChiamate();
    userTwo.azzeraChiamate();
    userThree.azzeraChiamate();
});
