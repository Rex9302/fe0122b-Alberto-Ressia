var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tasse = /** @class */ (function () {
    function Tasse(redditoannuolordo) {
        this.redditoannuolordo = redditoannuolordo;
    }
    return Tasse;
}());
var Fascia1 = /** @class */ (function (_super) {
    __extends(Fascia1, _super);
    function Fascia1(redditoannuolordo, fascia) {
        var _this = _super.call(this, redditoannuolordo) || this;
        _this.fascia = fascia;
        return _this;
    }
    Fascia1.prototype.getFascia = function () {
        if (this.fascia == 0) {
            return Math.round(this.redditoannuolordo * 0.78);
        }
        else if (this.fascia == 1) {
            return Math.round(this.redditoannuolordo * 0.56);
        }
        else {
            return Math.round(this.redditoannuolordo * 0.4);
        }
    };
    Fascia1.prototype.getTasseInps = function () {
        if (this.redditoannuolordo >= 30000) {
            return Math.round((this.getFascia() * 0.27));
        }
        else if (this.redditoannuolordo < 30000 && this.redditoannuolordo > 18000) {
            return Math.round((this.getFascia() * 0.24));
        }
        else {
            return Math.round((this.getFascia() * 0.2));
        }
    };
    Fascia1.prototype.getTasseIrpef = function () {
        if (this.redditoannuolordo >= 30000) {
            return Math.round((this.getFascia() * 0.3));
        }
        else if (this.redditoannuolordo < 30000 && this.redditoannuolordo > 18000) {
            return Math.round((this.getFascia() * 0.2));
        }
        else {
            return Math.round((this.getFascia() * 0.1));
        }
    };
    Fascia1.prototype.getTotTasse = function () {
        return this.getTasseInps() + this.getTasseIrpef();
    };
    Fascia1.prototype.getNetto = function () {
        return this.redditoannuolordo - this.getTotTasse();
    };
    return Fascia1;
}(Tasse));
var fascia = document.querySelector('#fascia');
var input = document.querySelector('#reddito');
document.querySelector('#btn').addEventListener('click', function () {
    var reddito = Number(input.value);
    var classeReddito = fascia.selectedIndex;
    var calcInps = new Fascia1(reddito, classeReddito);
    var cInps = document.querySelector('#inps');
    cInps.innerHTML = calcInps.getTasseInps();
    var cIrpef = document.querySelector('#irpef');
    cIrpef.innerHTML = calcInps.getTasseIrpef();
    var Tot = document.querySelector('#tasse');
    Tot.innerHTML = calcInps.getTotTasse();
    var Netto = document.querySelector('#netto');
    Netto.innerHTML = calcInps.getNetto();
    var imponibile = document.querySelector('#imponibile');
    imponibile.innerHTML = calcInps.getFascia();
    console.log(classeReddito);
});
