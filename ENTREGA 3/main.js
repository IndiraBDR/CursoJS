


//IGNORAR COMENT SIGUIENTE
/* EJEMPLO PROFE. MOSTRAR EL PRDUCTO SELECIONADO POR EL ID DEL BOTON
const agregarProducto = (x) => {
  
  let productoAgregado = cursos.find(item => item.id === x);

  localStorage.setItem("carrito",JSON.stringify(productoAgregado));

  //carrito = producto arrojado por el find que es 1ero que coincide con el id del boton del producto seleccionado
};
*/



//renderizacion principal


let contenedorServicios = document.getElementById("contenedor__servicios");

let carritoDeCompras=[]

cursos.forEach((item) => {
  let div = document.createElement("div");
  div.className = "servicio";
  div.innerHTML = `
   <strong>${item.id}</strong> 
   <h1>${item.nombre}</h1>
   <img src ="${item.imagen}">
   <p>Descripcion: ${item.descripcion}</p>
   <b>$${item.precio}</b>
   <p>Cantidad: ${item.cantidad}</p>
   
 `;

 

  contenedorServicios.append(div);

  

  let botonAgregar= document.createElement("button");

  botonAgregar.innerText = "Agregar";

  botonAgregar.className = "Boton-agregar";

  div.append(botonAgregar);


  /* IGNORAR COMENT
  const agregarProducto = () => {
    carritoDeCompras.push({

      id: item.id,
      imagen: item.imagen,
      nombre: item.nombre,
      precio: item.precio,
  
    });

 
  };

  botonAgregar.addEventListener("click", () => agregarProducto());
*/

botonAgregar.addEventListener("click", () => {

  carritoDeCompras.push({

    id: item.id,
    imagen: item.imagen,
    nombre: item.nombre,
    precio: item.precio,

  });

   
  localStorage.setItem("carrito",JSON.stringify(carritoDeCompras))

 //for(let i =0; i < carritoDeCompras.length; i ++){
      
 //localStorage.setItem("carrito",JSON.stringify(carritoDeCompras[i]));


});

  


  //console.log(carritoDeCompras);
});










//CARRITO EJ DEL PROFESOR

/*
let carrito = [];
let carritoStorage = localStorage.getItem("carrito");

if (carritoStorage) {
  carrito = JSON.parse(carritoStorage);
} else {
  let div = document.createElement("div");
  div.innerHTML = "El carrito está vacio";
  document.body.append(div);
}

carrito.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

  document.body.append(div);
});

*/


let botonDeFiltroJs = document.getElementById("botonDeFiltro");

const mostrarCursoEncontradoPorNombre = () => {

  const nombreBuscadoJs= document.getElementById("nombreBuscado").value

  const cursoEncontrado = cursos.find(
    (item) => item.nombre.toLowerCase() === nombreBuscadoJs.toLowerCase()
  );

  //console.log(cursoEncontrado)

  let mensajeJs = document.getElementById("mensaje");

  if (cursoEncontrado) {
    mensajeJs.innerHTML = ` 
 
    <h1>Producto encontrado con ese nombre</h1>
    <p>${cursoEncontrado.nombre}<p>
    <p>cuesta $ ${cursoEncontrado.PrecioConIVA()} con IVA incluido<p>
     
 
    `;


  } else {

    mensajeJs.innerHTML = ` 
 
     <p>Producto no encontrado<p>`;

   

  }


}


botonDeFiltroJs.addEventListener("click", ()=> mostrarCursoEncontradoPorNombre());

//xxxxxxxxxxxxx


let botonDeFiltroPrecioJs = document.getElementById("botonDeFiltroPrecio");

const mostrarCursoEncontradoPorPrecio = () => {

  const precioBuscadoJs= Number(document.getElementById("precioBuscado").value)

  const cursosFiltradosPorPrecio = cursos.filter(
    (item) => item.precio <= precioBuscadoJs
  );

  let mensajePrecioJs = document.getElementById("mensajePrecio");

  if (cursosFiltradosPorPrecio.length>0) {

    
    
    cursosFiltradosPorPrecio.forEach((item) =>{
    mensajePrecioJs.innerHTML  += `

    <h1>${item.nombre}</h1>
    <p>Descripcion: ${item.descripcion}</p>
    <b>$${item.PrecioConIVA()}</b>
    <p>Cantidad: ${item.cantidad}</p>
  
    `
    });

   console.log(cursosFiltradosPorPrecio);

  } else {

    mensajePrecioJs.innerHTML = `
    
    No hay productos con ese precio
    
    `;

   

  }


  


}



botonDeFiltroPrecioJs.addEventListener("click", ()=> mostrarCursoEncontradoPorPrecio());


//OPCIONES PARA FILTRAR CONDICIONALES PARA VOLVER A AGREGAR
/*
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
 
    <h1>Producto encontrado con ese nombre</h1>
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
       <b>$${item.PrecioConIVA()}</b>
       <p>Cantidad: ${item.cantidad}</p>
       <button id = "boton filtrados ${item.id}"> Agregar</button>
       
     `;
    
      filtradosPorPrecio.append(div);

      let botonAgregarFiltrados= document.getElementById(`boton filtrados ${item.id}`);

      botonAgregarFiltrados.addEventListener("click", ()=> agregarProducto(item.id))
    
      
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

*/




/*

let colorContedorServicio= document.getElementById("contenedor__servicios");




colorContedorServicio.addEventListerner("click", () => {
  
  colorContedorServicio.className = "rojo";


});

*/















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
