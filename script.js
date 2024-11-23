let grau = 0;
let i = 0;
let galeria = [

`<img src='Tafrio.png' alt='rin1'>`,

`<img src='Menosfrio.png' alt='rin2'>`,

`<img src='Morno.png' alt='rin3'>`,

`<img src='Aquecendo.png' alt='rin4'>`,

`<img src='Quente.png' alt='rin5'>`,

];

let msg  = [

 `ta MUITO frio`, `ta frio`, `ta morno`, `ta aquecendo`, `TA PEGANDO FOGO BICHO`,


];
document.getElementById("temp").innerHTML=grau;
document.getElementById("teste").innerHTML=galeria[i];
document.getElementById("msg").innerHTML=msg[i];
    
function muda(){
    
    if (grau <= 0) {
        i = 0;
    } else if (grau <=10) {
        i = 1;
    }
    else if (grau <= 20) {
        i = 2;
    } else if (grau <= 30){
        i = 3;
    } else if (grau <= 40) {
        i = 4;
    }
    
    document.getElementById("teste").innerHTML=galeria[i];
    document.getElementById("msg").innerHTML=msg[i];
    
    
}

function cima(){
    
    grau++;
    document.getElementById("temp").innerHTML=grau;
    muda();
    
}

function baixo(){
    
    grau--;
    document.getElementById("temp").innerHTML=grau;
    console.log(grau);
    muda();
}

document.getElementById("rin").innerHTML=`<img src='Morno.png' alt='rin'>`;





//function muda()
    //i++;
   // document.getElementById("teste").innerHTML=galeria[i];
    
//

