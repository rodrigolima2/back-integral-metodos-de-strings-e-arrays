const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function grupoDeCarros(arrayCarros, posicaoInicial) {
    console.log(arrayCarros.splice(posicaoInicial, 3));
}

grupoDeCarros(nomes, posicao);