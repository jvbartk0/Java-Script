/**
 *
 *  ENTRADA
 *  - A escolha da opção
 *  PROCESSAMENTO
 *  - Escolher uma opção para o robo
 *  - Verificar quem ganhou
 * SAIDA
 *  - Ganhador
 *
 */

// PEDRA - PAPEL - TESOURA
function jogarJokenpo(posicaoJogador) {

    resetImagem()
  //Criando um vetor
  //indice de um vetor sempre inicia no zero
  const opcoes = ["PEDRA", "PAPEL", "TESOURA"];

  //selecionado um valor do vetor
  // Math - é um lib de operações matematicas
  // Math.floor - É uma operação de arredondamento
  // Math.Random - É uma operação de sorteio
  const sorteio = Math.floor(Math.random() * 3);

  const escolhaRobo = opcoes[sorteio];
  const escolhaHumano = opcoes[posicaoJogador];

    selecionarImagem(sorteio)
    

  if (escolhaHumano == "PEDRA" && escolhaRobo == "TESOURA") {
    document.getElementById('resultado').innerHTML = 'Humano Ganhou'
  } else if (escolhaHumano == "PAPEL" && escolhaRobo == "PEDRA") {
    document.getElementById('resultado').innerHTML = 'Humano Ganhou'
  } else if (escolhaHumano == "TESOURA" && escolhaRobo == "PAPEL") {
    document.getElementById('resultado').innerHTML = 'Humano Ganhou'
  } else if (escolhaHumano == escolhaRobo) {
    document.getElementById('resultado').innerHTML = 'EMPATOU'
  } else {
    document.getElementById('resultado').innerHTML = 'Robô Ganhou'
  }
}

function selecionarImagem(escolha) {
  if (escolha == 0) {
    document.getElementById("roboPedra").classList.remove("naoSelecionada");
    document.getElementById("roboPedra").classList.add("selecionada");
  } else if (escolha == 1) {
    document.getElementById("roboPapel").classList.remove("naoSelecionada");
    document.getElementById("roboPapel").classList.add("selecionada");
  } else {
    document.getElementById("roboTesoura").classList.remove("naoSelecionada");
    document.getElementById("roboTesoura").classList.add("selecionada");
  }
  
}

function resetImagem(){
    document.getElementById("roboPedra").classList = 'naoSelecionada'
    document.getElementById("roboPapel").classList = 'naoSelecionada'

    document.getElementById("roboTesoura").classList = 'naoSelecionada'
}