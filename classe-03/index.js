const texto = "Aprenda programar do zero na Cubos Academy";

let validacao = "";
let textoFormatado = texto;

textoFormatado = textoFormatado.toLowerCase();

while (validacao != textoFormatado) {
    validacao = textoFormatado;
    textoFormatado = textoFormatado.replace(" ", "-");
}

console.log(textoFormatado);