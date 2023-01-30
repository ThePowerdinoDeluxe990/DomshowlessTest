document.getElementById("amigos").onclick= function(){

    document.getElementById("amigos1").innerHTML = "Paquito, Pedrito, Cristina";
    document.getElementById("amigos2").innerHTML =" Fosquito, juanito, Lorena";
    document.getElementById("amigos").innerHTML ="";
    document.getElementById("showless").innerHTML = "Show less"

}

document.getElementById("showless").onclick= function(){

    document.getElementById("amigos1").innerHTML = "";
    document.getElementById("amigos2").innerHTML =" ";
    
    document.getElementById("amigos").innerHTML = "amigos"
    document.getElementById("showless").innerHTML = ""


}