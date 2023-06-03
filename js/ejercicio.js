function verificar(pokemon){
    const texto=document.getElementById("fraseInicio")
    const foto=document.getElementById("imagen")
    const mensaje=document.getElementById("respuesta")
    const m=document.getElementById("scoreNum").textContent

    

    if (pokemon=="excadrill") {
        foto.src="../img/pcolor.jpg"
        mensaje.textContent="Felicitaciones, has seleccionado la opción correcta"
        mensaje.style.display="block"
        actualizar(m, true)
 
    } else {
        foto.src="../img/pcolor.jpg"
        mensaje.textContent="Pokémon incorrecto, intentalo nuevamente"
        mensaje.style.display="block"
        actualizar(m, false)   
       
    }
}

function reinicio(){
    const foto=document.getElementById("imagen")
    const mensaje=document.getElementById("respuesta")
    foto.src="../img/pnegro.jpg"
    mensaje.style.display="None"
}

function actualizar(juego, verdad){

    if (juego==0 && verdad) {
        document.getElementById("scoreNum").textContent='5'
        document.getElementById("intentoNum").textContent='2'
    } 
    
    if(juego==2 && verdad){
        document.getElementById("scoreNum").textContent='3'
        document.getElementById("intentoNum").textContent='3'
    } 
    
    if(juego==3 && verdad){
        document.getElementById("scoreNum").textContent='1'
        document.getElementById("intentoNum").textContent='3'
    }
}