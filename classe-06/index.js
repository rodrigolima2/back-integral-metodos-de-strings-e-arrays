const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

let frutasReverso = frutas.reverse();

frutasReverso = frutasReverso.join(", ");

frutas.splice(0, 1);
frutas.splice(frutas.lastIndexOf(), 1, "Melão");

console.log(frutasReverso);
console.log(frutas);