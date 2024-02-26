let numeroSecreto =0;
let Intentos =0; 
let numerosSorteados = []; 
//indicar hasta donde queremos llegar 
let numeroMaximo = 10; 

console.log(numeroSecreto);

function asignarTextoElemento (elemento, texto){

    let elementohtlm = document.querySelector(elemento);
    
    elementohtlm.innerHTML = texto;
 return;   
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("intentoDeUsuario").value);

        console.log(numeroSecreto);
        console.log(Intentos);
   
    if ( numeroUsuario===numeroSecreto){
       
        asignarTextoElemento("p", `Acertaste el número en ${Intentos} ${(Intentos ===1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else {
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor");
        }
        else{
            asignarTextoElemento("p", "El número secreto es mayor");
            }
        }
        Intentos++;
        limpiarCaja();
    return; 

}
function generarNumeroSecreto() {  
    //indicamos el maximo a usar 
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado); 
    console.log(numerosSorteados); 

//preguntar si ya sorteamos todos los números ( es decir, si ya llegamos a los 10). Eso lo hacemos en length

if(numerosSorteados.length == numeroMaximo){
// colocamos un mensaje en pantalla
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles")
} else {

    if(numerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto(); 
    }
    
    else {
    numerosSorteados.push(numeroGenerado); 
        return numeroGenerado; 
    }
}
}
   function limpiarCaja(){
    document. querySelector("#intentoDeUsuario").value = ""; 
   }
   function condicionesIniciales(){
    asignarTextoElemento ("h1", "Juego del número secreto");
    asignarTextoElemento ("p", `Indica un número del 1 al ${numeroMaximo}, por favor`);
    numeroSecreto = generarNumeroSecreto();
    Intentos= 1; 
}

   function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
document.querySelector("#reiniciar").setAttribute("disabled", "true"); 
    }
 condicionesIniciales(); 