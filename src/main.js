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
    if (inicio > fin) {
      let t = inicio;
      inicio = fin;
      fin = t;
    }
    for (let i = inicio; i <= fin; i++) {
      if (i % 2 != 0) {
        conteo++;
      }
    }

    return conteo;
  }
  sumarParesWhile() {
    let sumar = 0;
    let i = 1;
    while (i <= 20) {
      if (i % 2 == 0) {
        sumar = sumar + i;
      }
      i = i + 1;
    }
    return sumar;
  }
}

let app = new App();
console.log(app.sumarParesFor());
console.log(app.contarImparesFor(2, 10));
console.log(app.sumarParesWhile());
