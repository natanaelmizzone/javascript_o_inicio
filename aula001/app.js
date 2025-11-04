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


//     Operadores aritméticos
/*
Operadores aritméticos em JavaScript servem para realizar cálculos com números, como +, -, *, / e %.
*/


//     Operadores relacionais
/*
Operadores relacionais em JavaScript comparam valores e retornam true ou false, como ==, ===, !=, >, <, >=, <=.
*/


//     Operadores lógicos
/*
Operadores lógicos em JavaScript combinam condições e retornam true ou false, como && (E), || (OU) e ! (NÃO).
*/


// Estrutura
//     Estrutura de controle/decisão
/*
Estruturas de controle/decisão em JavaScript permitem executar código dependendo de condições, como if, else if, else e switch.
*/


//     Laços de repetição
/*
Laços de repetição em JavaScript executam um bloco de código várias vezes, como for, while e do...while.
*/


// Arrays --> vetor
/*
Arrays (ou vetores) em JavaScript são listas que armazenam múltiplos valores em uma única variável.
*/


// Funções personalizadas
/*
Funções personalizadas em JavaScript são blocos de código que realizam tarefas específicas e podem ser reutilizados várias vezes.
 */