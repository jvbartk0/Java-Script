const altura = 1.70
const peso = 70
let resultado = 0
let resultadoTexto = "";

function calcularImc (altura, peso) {

    resultado = altura * altura;
    resultado = peso / resultado
    
    if(resultado <= 18.5){
        alert("Abaixo do peso")
    }else if(resultado >= 18.5 && resultado <=24.9){
        alert("Peso Ideal")
    }else if(resultado >= 25 && resultado <= 29.9){
        alert("Sobrepeso")
    }else {
        alert("Obesidade")
    }

}

function calcularImcHtml(){

    const vlrAltura = document.getElementById('idAltura').value
    const vlrPeso = document.getElementById('idPeso').value

    calcularImc(vlrAltura, vlrPeso)

}

