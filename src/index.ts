

interface Multimedia{
    cim : string;
    kiir() : void;
    toString() : string;
}


class Kony implements Multimedia{
    #cim : string;

    constructor(cim : string){
        this.#cim = cim;
    }

    get cim() {return this.#cim;}
    set cim(cim : string){this.#cim = cim;}

    kiir(): void {
        console.log(this.toString());
        
    }

    toString(): string {
        return this.#cim;
    }
}


class Zene implements Multimedia{
    cim : string;
    hossz: number;

    kiir(): void{
        console.log(this.toString());
    }


    constructor(cim : string, hossz : number){
        this.cim = cim;
        this.hossz = hossz;
    }

    

    toString() : string{
        return this.cim + " (" + this.hossz + " sec.)";
    }

}


/*let SpitItOut = new Zene('Spit it out', 230);
SpitItOut.kiir();

let TheLordOfTheRings = new Kony("The Lord of the Rings");
TheLordOfTheRings.kiir();
*/

let termekek : Multimedia[] = [
    new Zene('Spit it out', 230)
    new Kony("The Lord of the Rings")
];


for(let termek of termekek){
    termek.kiir();
}


