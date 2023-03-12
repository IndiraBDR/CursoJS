

//nuevooooo

class Curso {
  constructor(datos) {
    this.nombre = datos.nombreProducto;
    this.descripcion = datos.descripcionProducto;
    this.precio = datos.precioProducto;
    this.cantidad = datos.cantidadProducto;
  }

  PrecioConIVA() {
    return this.precio * 1.21;
  }
}

const producto1 = new Curso({
  nombreProducto: "Desarrollo Personal",
  descripcionProducto:
    "  En todo ser humano hay grandeza y potencial, si alguien mas pudo hacerlo es la prueba de que si se puede",
  precioProducto: 2000,
  cantidadProducto: 5,
});

const producto2 = new Curso({
  nombreProducto: "Ingresos Extra",
  descripcionProducto:
    "La Educación financiera nos enseña que requerimos tener al menos 7 fuentes de ingresos para construir solides en nuestra economia",
  precioProducto: 1000,
  cantidadProducto: 5,
});

const producto3 = new Curso({
  nombreProducto: "Finanzas Personales",
  descripcionProducto:
    "Es primordial definir un presupuesto organizado mensual, ademas de definir nuestras deusas y plan para saldarlas, para comenzar a invertir",
  precioProducto: 1500,
  cantidadProducto: 5,
});

const cursos = [producto1, producto2, producto3];

let contenedorServicios = document.getElementById("contenedor__servicios");

cursos.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
   <h1>${item.nombre}</h1>
   <p>Descripcion: ${item.descripcion}</p>
   <b>$${item.precio}</b>
   <p>Cantidad: ${item.cantidad}</p>
   
 `;

  contenedorServicios.append(div);

  div.className = "servicio";
});



let opcion;

opcion = Number(
  prompt(
    "Eliga opción para filtrar:\n 1.Buscar curso por nombre \n 2.Filtrar cursos por precio \n 3.Salir "
  )
);

if (opcion === 1) {

  const nombreBuscado = prompt("Ingrese el nombre del curso a buscar");

  const cursoEncontrado = cursos.find(
    (item) => item.nombre.toLowerCase() === nombreBuscado.toLowerCase()
  );

  let filtradosPorNombre = document.getElementById("filtrados");

  let contenedorElementosFiltrados = document.createElement("div");

  if (cursoEncontrado) {
    contenedorElementosFiltrados.innerHTML = ` 
 
    <h1Producto encontrado con ese nombre</h1>
    <p>${cursoEncontrado.nombre}<p>
    <p>cuesta $ ${cursoEncontrado.PrecioConIVA()} con IVA incluido<p>
     
 
    `;

    filtradosPorNombre.append(contenedorElementosFiltrados);

  } else {

    contenedorElementosFiltrados.innerHTML = ` 
 
     <p>Producto no encontrado<p>`;

    filtradosPorNombre.append(contenedorElementosFiltrados);
  }
}




if(opcion === 2){

  const precioBuscado = Number(
    prompt("Ingrese el precio máximo deseado")
  );

  const cursosFiltradosPorPrecio = cursos.filter(
    (item) => item.precio <= precioBuscado
  );

  let filtradosPorPrecio = document.getElementById("filtrados");
  
  let contenedorElementosFiltrados = document.createElement("div");

  if (cursosFiltradosPorPrecio.length > 0) {

    cursosFiltradosPorPrecio.forEach((item) => {
      let div = document.createElement("div");
      div.innerHTML = `
       <h1>${item.nombre}</h1>
       <p>Descripcion: ${item.descripcion}</p>
       <b>$${item.precio}</b>
       <p>Cantidad: ${item.cantidad}</p>
       
     `;
    
      filtradosPorPrecio.append(div);
    
      
    });
    
      
  

  } else {

    contenedorElementosFiltrados.innerHTML = ` 
 
    <p>No se encontraron productos en ese Rango<p>`;

   filtradosPorPrecio.append(contenedorElementosFiltrados);
  }


}

if (opcion === 3){

  alert("Hasta luego!");


}


if(opcion !== 1 && opcion !==2 && opcion !== 3){

  alert("Opción no reconocida");


}

//nuevooooooo
























//ENTREGA 2//
/*let edad = Number(prompt("Ingrese Edad"));

if (edad >= 18) {
    
   
 
    let sexo = prompt("Ingrese Sexo");
 
     if (sexo.toLowerCase() === "femenino"){ 
 
       alert("Bienvenida, ya estas registrada");
   
        let entrada= prompt("Desea buscar cursos");
     
        if (entrada.toLowerCase() === "si") {


          let opcion;
          do {
            opcion = Number(
              prompt(
                "Eliga opción para filtrar:\n 1.Buscar curso por nombre \n 2.Filtrar cursos por precio \n 3.Salir "
              )
            );

            switch (opcion) {
              case 1:
                const nombreBuscado = prompt(
                  "Ingrese el nombre del curso a buscar"
                );
                const cursoEncontrado = cursos.find(
                  (item) =>
                    item.nombre.toLowerCase() === nombreBuscado.toLowerCase()
                );

                 let filtradosPorNombre = document.getElementById("filtrados");

                 let contenedorElementosFiltrados = document.createElement("div");

                if (cursoEncontrado) {
                contenedorElementosFiltrados.innerHTML = ` 
 
                 <h1Producto encontrado con ese nombre</h1>
                 <p>${cursoEncontrado.nombre}<p>
                 <p>cuesta $ ${cursoEncontrado.PrecioConIVA()} con IVA incluido<p>
     
 
                    `;

                   filtradosPorNombre.append(contenedorElementosFiltrados);

  
                } else {
               
                    contenedorElementosFiltrados.innerHTML = ` 
 
                       <p>Producto no encontrado<p>`;

                    filtradosPorNombre.append(contenedorElementosFiltrados);
                }
                break;

              case 2:
                const precioBuscado = Number(
                  prompt("Ingrese el precio máximo deseado")
                );

                const cursosFiltradosPorPrecio = cursos.filter(
                  (item) => item.precio <= precioBuscado
                );

              
  let filtradosPorPrecio = document.getElementById("filtrados");
  
  let contenedorElementosFiltrados = document.createElement("div");

    if (cursosFiltradosPorPrecio.length > 0) {

          cursosFiltradosPorPrecio.forEach((item) => {
            let div = document.createElement("div");
            div.innerHTML = `
             <h1>${item.nombre}</h1>
             <p>Descripcion: ${item.descripcion}</p>
             <b>$${item.precio}</b>
             <p>Cantidad: ${item.cantidad}</p>
       
           `;
    
            filtradosPorPrecio.append(div);
    
      
          });
     } else {
                
           contenedorElementosFiltrados.innerHTML = ` 
 
          <p>Producto no encontrado<p>`;

          filtradosPorPrecio.append(contenedorElementosFiltrados);
     }

                break;
              case 3:
                alert("Hasta luego!");
                break;
              default:
                alert("Opción no reconocida");
                break;
            }
          } while (opcion !== 3);
        } else {
          alert("Perfecto que tengas Buen Dias");
        }
 
       
    } else { 
         alert("Lo sentimos no puedes registrarte al curso, es solo para mujeres");
    }
 
 
} else {
     
     alert("Lo sentimos no cumlples con la edad necesaria");
 
 }



   

*/
