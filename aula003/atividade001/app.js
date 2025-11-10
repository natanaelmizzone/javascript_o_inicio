let n1 = 0, n2 = 0, n3 = 0, n4 = 0, media = 0
n1 = 7
n2 = 5.4
n3 = 3.27
n4 = 8
media = (n1 + n2 + n3 + n4) / 4

console.log("Média = " + media.toFixed(2))

//como fazer o resultado apresentar apenas duas casas decimais

//como fazer o programa solicitar as notas para o usuario


let nota = prompt("Por favor, dê uma nota de 1 a 10: ");
nota = (nota);
if (nota >= 1 && nota <= 10) {
    alert("Obrigado pela sua avaliação de nota " + nota + "!");
} else {
    alert("Nota inválida. Por favor, insira um número entre 1 e 10.");
}