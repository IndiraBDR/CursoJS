

let contenedorGeneral = document.getElementById("contenedor__teayudo");

contenedorGeneral.className = "contenedor__teayudo";



let cabecera = document.getElementById("cabecera__teayudo");

cabecera.className = "cabecera__teayudo";



let titulo = document.getElementById("titulo__teayudo");

titulo.className = "titulo__teayudo";



let contenedorServicios = document.getElementById("contenedor__servicios");

contenedorServicios.className = "contenedor__servicios";




let carrousel = document.getElementById("carrousel__teayudo");

carrousel.className = "carrousel__teayudo";




let pie = document.getElementById("pie__teayudo");

pie.className = "pie__teayudo";




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





//  let contenedorServicios = document.getElementById("contenedor__servicios");

  
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
  



   



  