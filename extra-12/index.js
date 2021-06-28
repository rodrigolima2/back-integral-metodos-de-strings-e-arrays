const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda'];
const tamanhoDoGrupo = 4;

function gerarNickname(nome) {
    const nickname = nome.trim().toLowerCase().substr(0, 13).split(' ').join('');
    console.log(`@${nickname}`);
}

gerarNickname(nomes[1]);