/*

let x= true;


if(x === true){

    console.log("y");

}else{

    console.log("xxx"); 
}

*/

/*XXXXXXXXXXXXXXX

const cursos = [
  

        new Curso( 
            {
            nombreProducto: "A",
            precioProducto: 2000,
            cantidadProducto: 5,
            }
            
        ),
        
        
        new Curso(
            
            {
             nombreProducto: "B",
             precioProducto: 1000,
             cantidadProducto: 5,
            }
            
        ),
        
        new Curso(  
        
           {
             nombreProducto: "C",
             precioProducto: 1500,
             cantidadProducto: 5,
           }
        
        )
    
    
    
];


*/

let entrada = prompt("Desea BUSCAR CURSOS");

if (entrada.toLowerCase() === "si") {
  class Curso {
    constructor(datos) {
      this.nombre = datos.nombreProducto;
      this.precio = datos.precioProducto;
      this.cantidad = datos.cantidadProducto;
    }

    PrecioConIVA() {
      return this.precio * 1.21;
    }
  }

  const producto1 = new Curso({
    nombreProducto: "A",
    precioProducto: 2000,
    cantidadProducto: 5,
  });

  const producto2 = new Curso({
    nombreProducto: "B",
    precioProducto: 1000,
    cantidadProducto: 5,
  });

  const producto3 = new Curso({
    nombreProducto: "C",
    precioProducto: 1500,
    cantidadProducto: 5,
  });

  const cursos = [producto1, producto2, producto3];

  let opcion;
  do {
    opcion = Number(
      prompt(
        "Eliga opción para filtrar:\n 1.Buscar curso por nombre \n 2.Filtrar cursos por precio máximo \n 3.Salir "
      )
    );

    switch (opcion) {
      case 1:
        const nombreBuscado = prompt("Ingrese el nombre del curso a buscar");
        const cursoEncontrado = cursos.find(
          (item) => item.nombre.toLowerCase() === nombreBuscado.toLowerCase()
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
           ` XXX -- ${cursosFiltradosPorPrecio.precio}`
          );
        } else {
          alert("No se encontraron cursos en ese rango");
        }

        break;
      case 3:
        alert("Hasta luego!");
        break;
      default:
        alert("Opción inválida");
        break;
    }
  } while (opcion !== 3);
} else {
  alert("Perfecto que tengas Buen Dias");
}




//(curso) => curso.precio <= precioMaximo
//);

//alert(` XXX -- ${cursosFiltradosPorPrecio.precio}`);

/*
if (cursosFiltradosPorPrecio.length > 0) {
  alert(`Los cursos que cuestan menos o igual a $${precioMaximo} son:\n${cursosFiltradosPorPrecio.map(curso => curso.nombre).join('\n')}`);
}else {
  alert("No se encontraron cursos que cuesten menos o igual a ese precio");
}





////////CODIGO OK PARA ENTREGA/////////////


/*
class Curso {
  constructor(datos) {

      this.nombre = datos.nombreProducto;
      this.precio = datos.precioProducto;
      this.cantidad = datos.cantidadProducto;
  }

  PrecioConIVA() {
    return this.precio * 1.21;
  }
}


const producto1 = new Curso(
  
  {
  nombreProducto: "A",
  precioProducto: 2000,
  cantidadProducto: 5,
  }
);

const producto2 = new Curso(
  
  {
      nombreProducto: "B",
      precioProducto: 1000,
      cantidadProducto: 5,
  }
);


const producto3 = new Curso(
  
  {
      nombreProducto: "C",
      precioProducto: 1500,
      cantidadProducto: 5,
  }
    
  
);


const cursos = [producto1,producto2,producto3];



let opcion;
do {
 opcion = Number(prompt("Eliga opción para filtrar:\n 1.Buscar curso por nombre \n 2.Filtrar cursos por precio máximo \n 3.Salir "));

switch (opcion) {
  case 1:
    const nombreBuscado = prompt("Ingrese el nombre del curso a buscar");
    const cursoEncontrado = cursos.find((item) => item.nombre.toLowerCase() === nombreBuscado.toLowerCase());

    if (cursoEncontrado) { 

      alert(
        `El curso ${cursoEncontrado.nombre} cuesta ${cursoEncontrado.PrecioConIVA()} con IVA incluido`
      );
    } else {
      alert("No se encontró ningún curso con ese nombre");
    }
    break;

  case 2:
    const precioBuscado = Number(prompt("Ingrese el precio máximo deseado"));

    const cursosFiltradosPorPrecio = cursos.filter( (item) => item.precio <= precioBuscado);

    if (cursosFiltradosPorPrecio.length > 0){
      alert(`Los cursos encontrados son \n${cursosFiltradosPorPrecio.map(curso => curso.nombre).join('\n')}`);
    }else {
      alert("No se encontraron cursos en ese rango");
    }

    break;
  case 3:
    alert("Hasta luego!");
    break;
  default:
    alert("Opción inválida");
    break;
}
}while (opcion !== 3);



*/
