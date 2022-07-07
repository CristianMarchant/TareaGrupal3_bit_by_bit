let infoLibros = []

  function agregarLibros(nombre,autor) {
 
    let libreria =
      {
        nombre: nombre,
        autor: autor,
      };
     
    infoLibros.push(libreria)

    return;
  
  }

  agregarLibros("El Tunel", "Ernesto Sabato");
  agregarLibros("El Alquimista", "Paulo Coehlo");
  agregarLibros("El Quijote", "Cervantes");
  agregarLibros("Odisea", "Homero");

 function  imprimirLibros(libros){
    console.log(libros)
  } 
 
  imprimirLibros(infoLibros)