



/*let edad = Number(prompt("Ingrese Edad"));

if (edad >= 18) {
    
   
 
    let sexo = prompt("Ingrese Sexo");
 
     if (sexo.toLowerCase() === "femenino"){ 
 
       alert("Bienvenida, ya estas registrada");
   
        let entrada= prompt("Desea buscar cursos");
     
        if (entrada.toLowerCase() === "si") {

*/          


//nuevooooo


//let contenedorGeneral = document.getElementById("contenedor__teayudo");

//contenedorGeneral.className = "contenedor__teayudo";

// Agregar la clase al elemento, es lo mismo decir:
//contenedorGeneral.classList.add("contenedor__teayudo");


//let cabecera = document.getElementById("cabecera__teayudo");

//cabecera.className = "cabecera__teayudo";



//let titulo = document.getElementById("titulo__teayudo");

//titulo.className = "titulo__teayudo";



//let contenedorServicios = document.getElementById("contenedor__servicios");

//contenedorServicios.className = "contenedor__servicios";




//let carrousel = document.getElementById("carrousel__teayudo");

//carrousel.className = "carrousel__teayudo";


//let pie = document.getElementById("pie");

//pie.className = "pie";






class Curso {
  constructor(datos) {
    this.nombre = datos.nombreProducto;
    this.descripcion= datos.descripcionProducto
    this.precio = datos.precioProducto;
    this.cantidad = datos.cantidadProducto;
  }

  PrecioConIVA() {
    return this.precio * 1.21;
  }
}

const producto1 = new Curso({
  nombreProducto: "Desarrollo Personal",
  descripcionProducto: "  En todo ser humano hay grandeza y potencial, si alguien mas pudo hacerlo es la prueba de que si se puede",
  precioProducto: 2000,
  cantidadProducto: 5,
});

const producto2 = new Curso({
  nombreProducto: "Ingresos Extra",
  descripcionProducto: "La Educación financiera nos enseña que requerimos tener al menos 7 fuentes de ingresos para construir solides en nuestra economia",
  precioProducto: 1000,
  cantidadProducto: 5,
});

const producto3 = new Curso({
  nombreProducto: "Finanzas Personales",
  descripcionProducto: "Es primordial definir un presupuesto organizado mensual, ademas de definir nuestras deusas y plan para saldarlas, para comenzar a invertir",
  precioProducto: 1500,
  cantidadProducto: 5,
});

const cursos = [producto1, producto2, producto3];




let contenedorServicios = document.getElementById("contenedor__servicios");
  


cursos.forEach(item => {
  let div = document.createElement("div");
  div.innerHTML = `
   <h1>${item.nombre}</h1>
   <p>Descripcion: ${item.descripcion}</p>
   <b>$${item.precio}</b>
   <p>${item.cantidad}</p>
   
 `;

  contenedorServicios.append(div);
   
  div.className = "servicio";
  
 })


//nuevooooooo


/*
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

                if (cursoEncontrado) {
                  alert(
                    `El curso ${
                      cursoEncontrado.nombre
                    } cuesta ${cursoEncontrado.PrecioConIVA()} con IVA incluido`
                  );
                } else {
                  alert("No se encontró ningún curso con ese nombre");
                }
                break;

              case 2:
                const precioBuscado = Number(
                  prompt("Ingrese el precio máximo deseado")
                );

                const cursosFiltradosPorPrecio = cursos.filter(
                  (item) => item.precio <= precioBuscado
                );

                if (cursosFiltradosPorPrecio.length > 0) {
                  alert(
                    `Los cursos encontrados son \n${cursosFiltradosPorPrecio
                      .map((item) => item.nombre)
                      .join("\n")}`
                  );
                } else {
                  alert("No se encontraron cursos en ese rango");
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
