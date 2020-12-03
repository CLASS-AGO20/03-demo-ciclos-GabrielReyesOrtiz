export default class App {
  sumarParesFor() {
    let suma = 0;
    for (let i = 0; i <= 20; i = i + 2) {
      suma = suma + i;
    }
    return suma;
  }
  contarImparesFor(inicio, fin) {
    let conteo = 0;
    for (let i = inicio; i <= fin; i = i + 1) {
      if (i % 2 != 0) {
        conteo = conteo + 1;
      }
    }
    return conteo;
  }
}

let app = new App();
console.log(app.sumarParesFor());
console.log(app.contarImparesFor(5, 10));
