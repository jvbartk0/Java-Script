//Declaração de uma variavel

let idade = 18

//Declaração de uma função
//{ } -> Define um scope

function verificarIdade(idade){
    // if(condição)
    // > maior que
    // < menor que
    // >= maior igual
    // <= menor igual
    // == igual
    // === igual com tipo igual 
    // != diferente
    if (idade >= 18){
        alert("Maior de idade")
    }
    else{
        alert("Menor de idade")
    }
}

//Chamar a Função

verificarIdade(20);