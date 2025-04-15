var prompt = require('prompt-sync')();

let x = Number(prompt("Digite o valor de X: "))
let y = Number(prompt("Digite o valor de Y: "))

switch(true){
    case x>0 && y>0:
        console.log('Q1');
        break;
    case x>0 && y<0:
        console.log('Q4');
        break;
    case x<0 && y>0:
        console.log('Q2');
        break;
    case  x<0 && y<0:
        console.log('Q3');
        break;
    default:
        console.log("Origem");
}




















// if(x >0 && y>0){
//     console.log("Q1");
// }
// else if(x <0 && y >0){
//     console.log("Q2");
// }
// else if(x<0 && y<0){
//     console.log("Q3");
// }
// else if(y<0 && x >0){
//     console.log("Q4");
// }
// else{
//     console.log("Origem");
// }