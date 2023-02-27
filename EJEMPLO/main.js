class Curso {
    constructor(nombre, descripcion, precio, palabrasClave) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
      this.palabrasClave = palabrasClave;
    }
  
    getPrecioConIVA() {
      return this.precio * 1.21;
    }
}
  
  const cursos = [
    new Curso("Curso de JavaScript", "Aprende a programar en JavaScript", 100, [
      "JavaScript",
      "Programación",
      "Desarrollo web",
      "Frontend",
    ]),
    new Curso("Curso de React", "Aprende a desarrollar aplicaciones con React", 150, [
      "React",
      "Desarrollo web",
      "Frontend",
      "Programación",
    ]),
    new Curso("Curso de Python", "Aprende a programar en Python", 120, [
      "Python",
      "Programación",
      "Desarrollo web",
      "Backend",
    ]),
  ];
  
  let opcion;
  do {
    opcion = parseInt(
      prompt(
        "Seleccione una opción:\n1. Buscar curso por nombre\n2. Buscar curso por palabra clave\n3. Filtrar cursos por precio máximo\n4. Salir"
      )
    );
    switch (opcion) {
      case 1:
        const nombreBuscado = prompt("Ingrese el nombre del curso a buscar");
        const cursoPorNombre = cursos.find(
          (curso) => curso.nombre.toLowerCase() === nombreBuscado.toLowerCase()
        );
        if (cursoPorNombre) {
          alert(
            `El curso ${cursoPorNombre.nombre} cuesta ${cursoPorNombre.getPrecioConIVA()} con IVA incluido`
          );
        } else {
          alert("No se encontró ningún curso con ese nombre");
        }
        break;
      case 2:
        const palabraClave = prompt("Ingrese la palabra clave a buscar");
        const cursosPorPalabraClave = cursos.filter((curso) =>
          curso.palabrasClave.includes(palabraClave)
        );
        if (cursosPorPalabraClave.length > 0) {
          alert(`Los cursos que contienen "${palabraClave}" en sus palabras clave son:\n${cursosPorPalabraClave.map(curso => curso.nombre).join('\n')}`);
        } else {
          alert("No se encontró ningún curso con esa palabra clave");
        }
        break;
      case 3:
        const precioMaximo = parseInt(
          prompt("Ingrese el precio máximo para filtrar los cursos")
        );
        const cursosFiltradosPorPrecio = cursos.filter(
          (curso) => curso.precio <= precioMaximo
        );
        if (cursosFiltradosPorPrecio.length > 0) {
          alert(`Los cursos que cuestan menos o igual a $${precioMaximo} son:\n${cursosFiltradosPorPrecio.map(curso => curso.nombre).join('\n')}`);
        } else {
          alert("No se encontraron cursos que cuesten menos o igual a ese precio");
        }
        break;
      case 4:
        alert("Hasta luego!");
        break;
      default:
        alert("Opción inválida");
        break;
    }
  } while (opcion !== 4);