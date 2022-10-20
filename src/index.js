"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Kony_cim;
class Kony {
    constructor(cim) {
        _Kony_cim.set(this, void 0);
        __classPrivateFieldSet(this, _Kony_cim, cim, "f");
    }
    get cim() { return __classPrivateFieldGet(this, _Kony_cim, "f"); }
    set cim(cim) { __classPrivateFieldSet(this, _Kony_cim, cim, "f"); }
    kiir() {
        console.log(this.toString());
    }
    toString() {
        return __classPrivateFieldGet(this, _Kony_cim, "f");
    }
}
_Kony_cim = new WeakMap();
class Zene {
    constructor(cim, hossz) {
        this.cim = cim;
        this.hossz = hossz;
    }
    kiir() {
        console.log(this.toString());
    }
    toString() {
        return this.cim + " (" + this.hossz + " sec.)";
    }
}
class Film {
    constructor(cim, evszam) {
        this.cim = cim;
        this.evszam = evszam;
    }
    kiir() {
        console.log(this.toString());
    }
    toString() {
        return this.cim + "(" + this.evszam + " [year])";
    }
}
/*let SpitItOut = new Zene('Spit it out', 230);
SpitItOut.kiir();

let TheLordOfTheRings = new Kony("The Lord of the Rings");
TheLordOfTheRings.kiir();
*/
let termekek = [
    new Zene('Spit it out', 230),
    new Kony("The Lord of the Rings"),
    new Film("Galaxis Őrzöi", 2021)
];
for (let termek of termekek) {
    termek.kiir();
}
