let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

const formatar = {
    Identificador: function (identificador) {
        if (identificador.length < 6) {
            identificador = identificador.padStart(6, "0");
        }

        return identificador;
    },
    nomeESobrenome: function (nome) {
        let textoDiminutivo = nome.toLowerCase();
        let palavras = textoDiminutivo.split(" ");

        for (let i = 0; i < palavras.length; i++) {
            let p = palavras[i];
            let primeiraLetra = p[0];

            p = primeiraLetra.toUpperCase() + p.slice(1);

            palavras[i] = p;
        }
        nome = palavras.join(" ");

        return nome;
    },
    email: function (email) {
        email = email.trim();

        return email;
    },
    tags: function (tags) {
        tags = tags.join(", ");

        return tags;
    }
}

identificador = formatar.Identificador(identificador);
nome = formatar.nomeESobrenome(nome);
email = formatar.email(email);
tags = formatar.tags(tags);

console.log(identificador, nome, email, tags);