"use strict";
class Kony {
}
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
let SpitItOut = new Zene('Spit it out', 230);
Sp