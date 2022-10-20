

interface Multimedia{
    cim : string;
    kiir() : void;
    toString() : string;
}

class Kony implements Multimedia{
    
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

    

