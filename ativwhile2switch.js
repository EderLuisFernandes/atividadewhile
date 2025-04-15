var prompt = require('prompt-sync')();

console.log("Escolha as opções + - / * % **");
let n1 = Number(prompt("Digite o primeiro num"))
let operador = prompt("escolha uma opção")
let n2 = Number(prompt("Digite o segundo num"))
let continuar;
while(continuar != "sair"){
   switch(operador){
    case "+":
        console.log(n1 + n2);
        break
    case "-":
        console.log(n1-n2);
        break
    case "/":
        if(n1== 0 && n2 ==0){
            console.log("Numero não pode ser dividido");
        }else{
            console.log((n1/n2).toFixed(2));
        }
    }
    n1 =  Number(prompt("Digite o primeiro num"))
    operador = prompt("escolha uma opção")
    n2 = Number(prompt("Digite o segundo num"))
    
    continuar = prompt("Digite sair para sair: ")

}