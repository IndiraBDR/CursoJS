/*const nombresClientes = [prompt("Ingrese su nombre")];

const nombres = [nombresClientes]


for (let index =  0; index < nombres.length; index ++){

    alert(nombres[index]);

}
*/

/*
const nombresClientes = [];

nombresClientes.push(prompt("Ingrese su nombre"))



for (let index =  0; index < nombres.length; index ++){

    alert(nombresClientes[index]);

}

*/


// EJERCICIO DE ELIMINAR UN NOMBRE, BUSCANDO EL NOMBRE PROPIAMENTE Y ELIMINANDOLO, NO HACIENDO POR EL NUMERO DE INDICE O POSICION
/*
const nombres =["camila","andres","sofia"];


const eliminar = (nombreDePersona)=>{

    const x = nombres.indexOf(nombreDePersona);


    if(x!= -1){

        nombres.splice(x,2);
        console.log(nombres);
    }


};


eliminar("andres");
*/


const productos = [

    {id:1, nombre:"camisa", precio:1000},

    {id:2, nombre:"pantalon", precio:2000},

];

let nombreProducto = prompt("Ingrese nombre");

let precioProducto = prompt("Ingrese precio");

let producto = {

    id: productos.length + 1,
    nombre : nombreProducto,
    precio : precioProducto,


};

productos.push(producto);
console.log(productos); 