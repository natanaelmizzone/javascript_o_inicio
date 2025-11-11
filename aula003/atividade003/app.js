function fnJogo(){
    let chute = 0, numeroMagico = Math.floor(Math.random() * 10) + 1;
    
    chute = document.getElementById("valor").value

    if(chute == numeroMagico){
        document.getElementById("resultado").innerText = "Acertou ;)"

    }else{
        document.getElementById("resultado").innerText= "Errou :("
    }

}

//Como fazer o sorteio número de 1 a 10 invés de deixar fixo o 3.