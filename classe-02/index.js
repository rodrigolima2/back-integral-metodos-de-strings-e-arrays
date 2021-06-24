const cpf = "20345673910";
const cnpj = "33345678012103";

function validarCpf(cpf) {
    if (cpf.length != 11) {
        console.log("CPF Inválido");
    } else {
        let cpfPart1 = cpf.substr(0, 3);
        let cpfPart2 = cpf.substr(3, 3);
        let cpfPart3 = cpf.substr(6, 3);
        let cpfPart4 = cpf.substr(9, 2);
        let cpfFormatado = "";

        cpfPart2 = cpfPart2.padStart(4, ".");
        cpfPart3 = cpfPart3.padStart(4, ".");
        cpfPart4 = cpfPart4.padStart(3, "-");

        cpfFormatado = cpfPart1 + cpfPart2 + cpfPart3 + cpfPart4;

        console.log(cpfFormatado);
    }
}
function validarCnpj(cnpj) {
    if (cnpj.length != 14) {
        console.log("CNPJ inválido");
    } else {
        let cnpjPart1 = cnpj.substr(0, 2);
        let cnpjPart2 = cnpj.substr(2, 3);
        let cnpjPart3 = cnpj.substr(5, 3);
        let cnpjPart4 = cnpj.substr(8, 4);
        let cnpjPart5 = cnpj.substr(12, 2);
        let cnpjFormatado = "";

        cnpjPart2 = cnpjPart2.padStart(4, ".");
        cnpjPart3 = cnpjPart3.padStart(4, ".");
        cnpjPart4 = cnpjPart4.padStart(5, "/");
        cnpjPart5 = cnpjPart5.padStart(3, "-");

        cnpjFormatado = cnpjPart1 + cnpjPart2 + cnpjPart3 + cnpjPart4 + cnpjPart5;

        console.log(cnpjFormatado);
    }
}

validarCpf(cpf);
validarCnpj(cnpj);