let idade = 38
let usuario = "Admin"

if(usuario == "Admin" && idade >=18){
    console.log("Usuario autorizado");
}
else if( usuario == "ceo" || idade >=  38 ){
    console.log("Ceo autorizado");
}
else if(usuario === "user" && idade === 18){
    console.log("Ele não é administrador");
}
else{
    console.log("Usuario não encontrado");
}