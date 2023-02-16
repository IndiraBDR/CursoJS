

//let nombre = "andres felipe"

//if  (nombre != "" && nombre === "andres"){console.log("hola andres");}else{console.log("nombre incorrecto");}



//let apellido = "Ruiz";

//if (apellido.toLowerCase() === "ruiz"){console.log("Hola Sr Ruiz");}else{console.log("apellido incorrecto");}





let edad = Number(prompt("Ingrese Edad"));


if (edad >= 18) {
    
   alert("Muy bien, eres mayor de edad");

   let sexo = prompt("Ingrese Sexo");

    if (sexo.toLowerCase() === "femenino"){ 

      alert("Bienvenida, ya estas registrada");
      
    } else {
        
        alert("Lo sentimos no puedes registrarte al curso, es solo para mujeres");
    }




} else {
    
    alert("Lo sentimos no cumlples con la edad necesaria");

}




