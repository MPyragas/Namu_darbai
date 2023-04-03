class Troleibusas {
  static visiKeleiviai = 0;
  constructor() {
    this.keleiviuSkaicius = 0;
  }
  ilipa(keleiviuSkaicius) {
    this.keleiviuSkaicius += keleiviuSkaicius;
    this.constructor.visiKeleiviai += keleiviuSkaicius;
  }
  islipa(keleiviuSkaicius) {
    keleiviuSkaicius >= this.keleiviuSkaicius
      ? (this.keleiviuSkaicius = 0)
      : (this.keleiviuSkaicius -= keleiviuSkaicius);
    keleiviuSkaicius >= this.constructor.visiKeleiviai
      ? (this.constructor.visiKeleiviai = 0)
      : (this.constructor.visiKeleiviai -= keleiviuSkaicius);
  }
  vaziuoja() {
    console.log("Keleiviu:" + this.keleiviuSkaicius);
  }
  keleiviuSkaiciusVisuoseTroleibusuose() {
    console.log("Bendras keleiviu skaicius:" + this.constructor.visiKeleiviai);
  }
}

const troleibusas1 = new Troleibusas();
const troleibusas2 = new Troleibusas();

troleibusas1.ilipa(26);
troleibusas1.islipa(30);
troleibusas2.ilipa(15);
troleibusas2.islipa(3);
troleibusas1.vaziuoja();
troleibusas2.vaziuoja();
troleibusas2.keleiviuSkaiciusVisuoseTroleibusuose();

// Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.
