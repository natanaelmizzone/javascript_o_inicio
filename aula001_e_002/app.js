// Boas práticas
/*
-Use const e let, evite var.
-Nomes claros para variáveis e funções.
-Funções pequenas e com uma única responsabilidade.
-Desestruturação e spread/rest para lidar com objetos e arrays.
-Use async/await com tratamento de erros (try/catch).
-Evite mutações — prefira cópias imutáveis.
-Use linters e formatadores (ESLint, Prettier).
-Proteja contra XSS — nunca use innerHTML com entrada do usuário.
-Otimize performance (use map, filter, reduce, debounce/throttle).
-Escreva testes e automatize checagens antes do commit.
*/


// Case sensitive
/*
JavaScript é case sensitive, ou seja, letras maiúsculas e minúsculas são tratadas como diferentes em variáveis, funções e identificadores.
Exemplo: valor ≠ Valor ≠ VALOR.
*/
console.log("Olá mundo!")

// Sintaxe básica e comentário
/*
JavaScript é uma linguagem de programação usada para criar interatividade e dinamismo em páginas web.
Sua sintaxe define como escrever comandos corretamente, e os comentários servem para explicar o código sem que sejam executados.
let, const, var → variáveis
if, for, function → estruturas básicas
// e /*...*/  


// Declaração de variáveis(var, let, const)
/*
var = antiga, evite.
let = variável comum (pode mudar).
const = constante (não muda).
*/
let nome= "Natanael"
console.log("Olá " + nome)
nome = "dos Santos Mizzone"
console.log(nome)

const idade = 29
console.log(idade)



// Console e Debug
console.warn("atenção")
console.info("informações")
console.error("erro")
/*
Console: mostra mensagens ou valores do código.
Debug: ajuda a encontrar e corrigir erros, pausando a execução.
*/


//Tipos de dados
/*
número - number
booleano - bool
texto - string
Tipos de dados em JavaScript indicam que tipo de valor uma variável pode armazenar, como número, texto, verdadeiro/falso, lista ou objeto.
*/

//string
let cidade = "Americana"

//number
let salario = 2000

//bool

let fumante = false

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)



// Operadores
//     Operador Atribuição
/*
Operadores de atribuição em JavaScript servem para armazenar ou atualizar valores em variáveis, como =, +=, -=, *=, /=.
*/
salario = 2500

//     Operadores aritméticos
/*
Operadores aritméticos em JavaScript servem para realizar cálculos com números, como +, -, *, / e %.
*/
let n1 = 10, n2 = 5
console.log(n1 + n2) // soma
console.log(n1 - n2) // subtração
console.log(n1 * n2) // multiplicação
console.log(n1 / n2) // divisão
console.log(10 % 2)

//     Operadores relacionais
/*
Operadores relacionais em JavaScript comparam valores e retornam true ou false, como ==, ===, !=, >, <, >=, <=.
*/
console.log(n1 == n2)
console.log(n1 != n2)
console.log(n1 > n2)
console.log(n1 < n2)
console.log(n1 >= n2)
console.log(n1 <= n2)

//     Operadores lógicos ! - não / not || - ou / OR && - e / AND

let altura = 1.80
let peso = 80
let tipo = "criança"
console.log(altura > 2)
console.log(peso < 100)

// muda o resultado final, se for verdadeiro vira falso e se for falso vira verdadeiro
console.log(!10>5)
// com || apenas uma verificação precisa ser verdadeira
console.log(altura > 1.5 || peso < 150 || tipo!= "criança")
// com && todas as verificações devem ser verdadieras para o resultado final ser verdadeiro.
console.log(altura > 1.5 && peso < 150 || tipo!= "criança")

/*
Operadores lógicos em JavaScript combinam condições e retornam true ou false, como && (E), || (OU) e ! (NÃO).
*/


// Estrutura
//     Estrutura de controle/decisão

if(altura > 1.50){
    console.log("Pode brincar!")
}else{
    console.log("Você não pode brincar!")
}
//outro exemplo:
let carro =  "fiat"

if(carro == "bmw)"){
    console.log("vc ta bem mais ou menos") //verdadeiro
}else{
    console.log("A vida ta progredindo") //falso
}
/*
Estruturas de controle/decisão em JavaScript permitem executar código dependendo de condições, como if, else if, else e switch.
*/
let idadealuno = 20
if(idadealuno >= 18 ){
    console.log("maior de idade")
}else{
    console.log("menor de idade")
}

//     Laços de repetição
/*
Laços de repetição em JavaScript executam um bloco de código várias vezes, como for, while e do...while.
*/
let controle = 1
while(controle <=10){
    console.log(controle)
    controle = controle + 1
}

controle = 1
while(controle <= 10){
    console.log(7*controle)
    controle = controle+1
}
// Arrays --> vetor
/*
Arrays (ou vetores) em JavaScript são listas que armazenam múltiplos valores em uma única variável.
*/
let zoologico = ['leão', 'elefante', 'zebra', 'ariranha', 'lobo guará', 'arara']
console.log(zoologico[2])
console.log(zoologico.length)

let frutas = ['🍓','🍊','🍍','🍐','🍌','🍇','🍉']
console.log(frutas)
frutas.push('🍎')
console.log(frutas)

let alunos = []
alunos.push("joão")
alunos.push("renata")
alunos.push("roberto")
console.log(alunos)

// Funções personalizadas
/*
Funções personalizadas em JavaScript são blocos de código que realizam tarefas específicas e podem ser reutilizados várias vezes.
 */
function mensagem(){
    console.log("Olá")
    console.log("Seja bem vindo")
    console.log(":)")
}
mensagem()
mensagem()

function conta(n1, n2){
    console.log(n1 + n2 * 4)

}
conta(7,5)
conta(1,2)


function conta(horas, sal_hora){
    console.log(horas*sal_hora)
}
conta(140,75)
