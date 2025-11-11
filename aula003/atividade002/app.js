function fnConverterValor(){
    let valorDigitado = 0, total = 0

    valorDigitado = document.getElementById("valor").value

    let dolar = 5.29
    let euro = 6.11
    
    let resultadoDolar = valorDigitado * dolar
    let resultadoEuro = valorDigitado * euro

    document.getElementById("valorConvertido").innerText = "Dolar = R$ " + resultadoDolar
    document.getElementById("valorConvertidoU").innerText = "Euro = R$ " + resultadoEuro
}