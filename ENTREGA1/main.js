

//calcular el tiempo de realizacion del curso dependiendo del curso y las horas dedicadas


// num1=  Costo curso
// num2=  descuento A (-500)
// num 3= descuento B  (-1000)
// num4= descuento Asignado ingresado por prompt
//Y=costoCurso
//X= costoCurso
//Z= iva(Y)


let edad = Number(prompt("Ingrese Edad"));

if (edad >= 18) {
    
   alert("Muy bien, eres mayor de edad");

   let sexo = prompt("Ingrese Sexo");

    if (sexo.toLowerCase() === "femenino"){ 

      alert("Bienvenida, ya estas registrada");
  
       let entrada= prompt("Desea calcular su pago total con el descuento asignado")
    
       while (entrada  == "si") {
      
        function calculadoraDeDescuento (num1,num2,num3,num4){
          
        switch (num4) {

         case "a":

         return num1 - num2;
         
           break;


         case "b":
         
         return  num1 - num3;

          break;
  
         default:

          return "Descuento no identificado"

         break;
 
         }

        }
        

     
        const iva =(Y)=> Y * 0.21;

        let costoCurso = Number(prompt("Ingrese el costo del curso"));


        const precioConIva = (X,Z) => X + Z;

        let IVA = iva(costoCurso);

        let precioTotal = precioConIva(costoCurso,IVA)


        let descuentoAsignado = prompt("Ingrese la letra del descuento asignado: a o b");
       
        let descuentoA = 500;

        let descuentoB = 1000;

       

        let resultado = `${calculadoraDeDescuento (precioTotal,descuentoA,descuentoB,descuentoAsignado)}`;

        alert(resultado);

       
        entrada= prompt("Desea seguir comprando")


      }  

      
    } else {
        
        alert("Lo sentimos no puedes registrarte al curso, es solo para mujeres");
    }




} else {
    
    alert("Lo sentimos no cumlples con la edad necesaria");

}
