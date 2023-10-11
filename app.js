let titulo=document.querySelector('h1');
titulo.innerHTML='Hora de Desafio';

function cliqueConsole(){
    console.log('O botão foi clicado');
}


let nomeDaCidade;
function cliquePrompt(){
    nomeDaCidade = prompt('Digite um nome da Cidade');
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}

function cliqueAlerta(){
    alert('Eu amo JS');
}

function cliqueSoma(){
    let numero1=prompt('Escreve um numero');
    let numero2=prompt('Escreve mais um numero');
    let soma=parseInt(numero1)+parseInt(numero2);
    alert(`A soma dos seus numeros = ${soma}`);
}