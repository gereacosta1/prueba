let libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    añoPublicacion: 1943,
    genero: "Ficción",


    descripcion(){
        return "El Principito fue escrito por Antoine de Saint-Exupéry en 1943."
        }
}

// Llamada al método descripcion
console.log(libro.descripcion());

// Destructuración del objeto
let { titulo, autor } = libro;
console.log(`Título: ${titulo}, Autor: ${autor}`);