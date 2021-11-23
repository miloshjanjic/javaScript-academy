let niza = [
  { ime: "nekoe ime", prezime: "nekoe prezime", godini: 10 },
  { ime: "Sanja", prezime: "Tash", godini: 19 },
  { ime: "Petko", prezime: "Stolev", godini: 31 }
]
// function Rabbit(type,color) {
//   this.type = type;
//   this.color = color;
// }
// Rabbit.prototype.speak = (phrase)=>{
//   console.log(phrase);
// }
// let zajak = new Rabbit("a","c");

// console.log(zajak.type);
// zajak.speak("Zdravo");

// let zajak1 = new Rabbit("Polar","white");

// console.log(zajak1.type);
// zajak.speak("Hello");

// let zajaci = [zajak,zajak1];
// ako prethodno ne e definirano koi svojstva tocno ke gi ima prototyp funkciite, togas moze da si dodavame parametri na objektite koi gi kreirame od taa prototypfunkcija

// console.dir(zajak1);

class Avtobus {
  marka = "default";
  boja = "crvena";
  godina = 1999;

  constructor(marka, boja, godina) {
    this.marka = marka;
    this.boja = boja;
    this.godina = godina;
  }
  pecati() {
    console.log(" Avtobusot so marka " + this.marka + " so " + this.boja + " e od " + this.godina);
  }
  prikaziNaHtml() {

  }
}
let avtobusJSP = new Avtobus("yutong", "crvena", 1980);
// avtobusJSP.a = 1990;
// delete avtobusJSP.a;

let avtobusi = [new Avtobus("a", "b", "c"), avtobusJSP];
for (avtobus of avtobusi) {
  avtobus.pecati();
  avtobus.prikaziNaHtml();
}

class miniBus extends Avtobus {

  constructor(marka, boja, godina, registracija) {
    super(marka, boja, godina);
    this.registracija = registracija;

  }
  getRegistracija() {
    console.log(this.registracija);
  }

}
let minibus = new miniBus("marka", "sina", 2010, "sk8279pa");
minibus.pecati();
minibus.getRegistracija();
