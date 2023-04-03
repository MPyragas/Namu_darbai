class Pinigine {
  constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;
  }
  ideti(kiekis) {
    kiekis <= 2
      ? (this.metaliniaiPinigai += kiekis)
      : (this.popieriniaiPinigai += kiekis);
  }
  skaiciuoti() {
    console.log(this.metaliniaiPinigai + this.popieriniaiPinigai);
  }
}
const pinigine1 = new Pinigine();
pinigine1.ideti(1);
pinigine1.ideti(2);
pinigine1.ideti(100);

pinigine1.skaiciuoti();

// Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.
