
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

      if (cursoEncontrado) { // se va a ejercutar el codigo cuando o la condición se cumple cuado: el find devuelve x lo menos un     objeto -- SI un valor es encontrado    // pudiese colocar solo el alert y me muestra el resultado pero coloco el if para que me diga algo cuando no se encuentra ningun valor 
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

  

/* Conclusiones finales

-- Tengo que crear varias productos: Generno una funcion constructora ya que esto me permitira tener asi objetos que puedo posteriormente iterar, y llamar en el codigo a sus propiedas para mostrarlas sin tener que escribir todo el objeto manualmente, mepermite trabajar a escala, sin tener que llamar el nombre por ejemplo o el precio por ejemplo de cada producto.

-- Combinancion con los arrays, puedo declarar o crear los nuevos (news) productos o elementos del objeto directamente dentro de una constante poniendo el mismo nombre o puedo hacerlo por fuera en el codigo y darle un nombre distinto a cada objeto y citarlo en una variable en forma de array solo los nombres de los objetos.

-- Colocar los objetos dentro un array me permitira acceder a los metodos de los array.


-- Al aplicar los  metodos de filtro puede filtrar y puedo mostrar solo el resultado del filtro, pero como requiero tener una respuesta en caso de que lo no coincida lo buscado, declaro if a parte de la ejecucion del codigo de filtro. dentro de este if tambien puedo aplicar los metodos del array para que me ayude a definir la  condicion






*/