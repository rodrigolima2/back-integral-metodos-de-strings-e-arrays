const comentario = "Esse covid é muito perigoso!";

const resultado = comentario.toLowerCase();

if (resultado.includes("covid") || resultado.includes("pandemia")) {
    console.log("Comentário bloqueado por conter palavras proibidas");
} else {
    console.log("Comentário autorizado.");
}