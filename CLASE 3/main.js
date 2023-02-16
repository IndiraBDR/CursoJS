
//let numeroIngresado= 7;

//for(let i = 0; i < numeroIngresado; i ++){

//console.log("Holu",  i);
 
//}




//let numeroIngresado= Number(prompt("Ingrese un numero"));

//for(let i = 0; i < numeroIngresado; i ++){

//alert("Hola");}





// num1=  horas dedicadas
// num2=  horas de Duracion del curso A
// num 3= horas de Duracion del curso B  
// num4= curso elegido


 function calculadoraDeHoras (num1,num2,num3,num4){

   switch (num4) {

      case "a":

      return num2/num1;
          
          break;


      case "b":
          
       return  num3/num1;

          break;
   
      default:

        return "Curso no identificado"

          break;
   }

 }

  let cursoElegido = prompt("Ingrese la letra del curso elegido: a.Finanzas Personales, b.Finanzas para Empresa");
        
  let horasDeDuracionCursoA = 30;

  let horasDeDuracionCursoB = 50;

  let horasDedicadas = Number(prompt("Ingrese horas que dedicara al curso"));

  let resultado = ` El resultado es ${calculadoraDeHoras (horasDedicadas,horasDeDuracionCursoA,horasDeDuracionCursoB,cursoElegido)}`;

  alert(resultado);