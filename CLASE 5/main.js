
//IGNORAR COMENTARIOS

/* incluyendo info2

function Persona(info,info2){

this.nombre = info.tuNombre;
this.edad = info.tuEdad;
this.direccion = info.tuDireccion;
this.estatura=info2.tuEstatura
this.color=info2.tuColor

}


const persona1 = new Persona(

    {

   tuNombre: "Camila",
   tuEdad: 18,
   tuDireccion: "AV",

    },

   

    {

        tuEstatura: "ALTO",
        tuColor: "BLANCO",
    
    }

);

*/

/*

//const persona2 = new Persona(

    //{

   //tuNombre: "Ysa",
   //tuEdad: 13,
   //tuDireccion: "P",

   // }

//);


//const persona1 = new Persona(

   // tuNombre: "Camila",
   // tuEdad: 18,
    //tuDireccion: "AV",

//);

console.log(persona1);

*/

//IGNORAR COMENTARIOS

//POR FAVOR REVISAR EL CODIGO SIGUIENTE:

class ProductoCurso{

    constructor(datos){

        this.nombre = datos.nombreProducto;
        this.precio = datos.precioProducto;
        this.cantidad = datos.cantidadProducto;


    }

  

    vender(valorDelPrompt) {
        if (this.cantidad >= valorDelPrompt) {
            this.cantidad -= valorDelPrompt;
            console.log(this.cantidad)
            if(this.cantidad==0){
                alert('sin stock')
            }
        }
       else if(this.cantidad<valorDelPrompt){
        alert('no tenemos ese stock')

       }
    }

}



const producto1 = new ProductoCurso(
    
    {
    nombreProducto: "CUSO A",
    precioProducto: 2000,
    cantidadProducto: 5,
    }
);

const producto2 = new ProductoCurso(


    {
        nombreProducto: "CUSO B",
        precioProducto: 1000,
        cantidadProducto: 5,
    }
);


const producto3 = new ProductoCurso(


    {
        nombreProducto: "CUSO C",
        precioProducto: 1500,
        cantidadProducto: 5,
    }
);

let nombreProducto4 = prompt("Ingrese nombre");
let precioProducto4 = Number (prompt("Ingrese precio"));
let cantidadProducto4 = Number(prompt("Ingrese cantidad"));

const producto4 = new ProductoCurso(


    {
        nombreProducto: nombreProducto4,
        precioProducto: precioProducto4,
        cantidadProducto: cantidadProducto4,
    }
);


const Productos=[producto1,producto2,producto3]

Productos.push(producto4);

console.log(Productos);


producto1.vender()
producto2.vender()
console.log(Productos);







/*PROBANDO

//Y= tipoDeCurso

function calculadoraDeStock (Y){

switch (Y) {
    case "A":

      producto1.vender();
        
        break;

    case "B":
       
    producto2.vender();
        
        break;

    default:
        break;
}
}

let tipoDeCurso = "A";

let resultado = calculadoraDeStock(tipoDeCurso);

console.log(resultado);

*/