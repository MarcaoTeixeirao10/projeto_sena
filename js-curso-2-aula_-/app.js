let numeroSecreto = gerarNumeroSecreto();
console.log(numeroSecreto);
let tentativa = 1;
 
function exibirTextoNaTela (tag, texto){
let campo = document.querySelector(tag)
campo.innerHTML = texto;
}

function exibirTextoInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Insira um número de 1 a 10:');
}
exibirTextoInicial();
 
function validarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa= tentativa > 1 ? ' tentativas' : 'tentativa'
    let mensagemTentativa =`Você acertou o número secreto com ${tentativa} ${palavraTentativa}, de brinde você leva o leão da MARKING STORE!`;
    
if (chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Parabéns!');
    exibirTextoNaTela('p', mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');
    alterarImagem('imagem', './img/leao.png');
   
    }
    else if (chute < numeroSecreto){
        exibirTextoNaTela ('p','O número secreto é maior!');
        alterarImagem('imagem', './img/+.png');
    }
    else{
        exibirTextoNaTela ('p', 'O número secreto é menor!');
        alterarImagem('imagem', './img/-.png');
    }
    tentativa++;
    limparCampo();
 
}
   
function gerarNumeroSecreto() {
   return parseInt(Math.random() * 10+1);
 
}
 
function limparCampo() {
   chute = document.querySelector('input');
   chute.value = '';
}
 
function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    tentativa = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    alterarImagem('imagem', './img/ia.png');
}

function alterarImagem(objeto, caminhoImagem) {
    document.getElementById(objeto).src = caminhoImagem;
}