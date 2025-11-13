//document.write("<h1>sou apenas um rapaz latino americano</h1>")

let filmes = ['filme01.jpg','filme02.jpg', 'filme03.jpg','filme04.jpg','filme05.jpg','filme06.jpg']

// document.write(`<img src='imagens/ ${filmes[0]}'>`)



//document.write("<img src='imagens/" + filmes[0] +"'>")

let contador = 0
while(contador < 6){
    console.log(contador)
    document.write("<img src='imagens/" + filmes[contador] + "'>")
    contador = contador + 1
}