let nombre = prompt("¡Hola! ¿Cuál es tu nombre?");
let correoElectrónico = prompt("Si tenés ingresa tu casilla de correo electrónico");
let edad = parseInt(prompt("¿Qué edad tenés?"))

let categoria;

if (edad <= 10) {
    categoria = "Infantil";
}

else if (edad <= 16) {
    categoria = "Juvenil";
}

else {
    categoria = "Adultos";
}
console.log(nombre, categoria)

alert("¡Hola!" + " " + nombre + " " + "La categoría según tu edad es" + " " + categoria);


const LIBROS = [{
    id: 1,
    Titulo: "Autobiografía de un Yogui",
    Autor: "Paramahansa Yogananda",
    categoria: "Adultos",
},

{
    id: 2,
    Titulo: "Antología poética ",
    Autor: "Mario Benedetti",
    categoria: "Juvenil",
},

{
    id: 3,
    Titulo: "Harry Potter y la piedra Filosofal",
    Autor: "J.K. Rowling",
    categoria: "Juvenil",
},

{
    id: 4,
    Titulo: "El hombre rebelde",
    Autor: "Albert Camus",
    categoria: "Adultos",
},

{
    id: 5,
    Titulo: "Amigos por el viento",
    Autor: "Liliana Bodoc",
    categoria: "Infantil",
},


{
    id: 6,
    Titulo: "El hombre en busca de sentido",
    Autor: "Viktor Frankl",
    categoria: "Adultos",
},

{
    id: 7,
    Titulo: "Manuelita ¿Dónde vas?",
    Autor: "María Elena Walsh",
    categoria: "Infantil",
}


]
console.log(LIBROS)

function mostrarLibrosSegunCategoria(categoria) {
    const LIBROSFILTRADOS = [];

    for (let i = 0; i < LIBROS.length; i++) {
        if (LIBROS[i].categoria === categoria)
        {
            LIBROSFILTRADOS.push(LIBROS[i])
        }
    }
    return LIBROSFILTRADOS

}

const RESULTADO =mostrarLibrosSegunCategoria (categoria);
console.log (RESULTADO)