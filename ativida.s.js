var prompt  = require('prompt-sync')();

let numeros = parseInt(prompt("Digite um numero"))
let soma = 0
// essa variavel vai aguardo os valores digitado e me mostrar no final 
let valorNumero = ''

while(numeros != 0){
    //O valor de soma ele pega a variavel = o valor guardado na variavel soma + o valor que o cliente vai digitar
    soma = soma + numeros
    // O  valorNumero ele pega a variavel = o valor guardado na variavel valorNumero + a string vazia para adicionar o espaço + o valor que o cliente digitou.
    valorNumero  = valorNumero + " " + numeros 

    console.log("Entoru no loop ");
    // eu adicionei o numeros para que o loop não fique infinito quando ele rodar vai pedir para eu digitar um novo numero e validar se é difrente de 0
    numeros = parseInt(prompt("Digite um numero"))
}
console.log("soma total é:", soma)
console.log("Numeros digitado foi :", valorNumero);