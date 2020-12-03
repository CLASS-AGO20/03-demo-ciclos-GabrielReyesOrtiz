export default class App {
  sumarParesFor() {
    let suma = 0;
    for (let i = 2; i <= 20; i = i + 1) {
      if (i % 2 == 0) {
        suma = suma + i;
      }
    }
    return suma;
  }
}

let app = new App();
console.log(app.sumarParesFor());
