// Función para realizar la traducción en tiempo real
function traducir() {
    // Obtiene el valor del input en español
    var palabra = document.getElementById('palabra').value;

    // Realiza el cambio de letras a caracteres según tu lenguaje personalizado
    var traduccion = cambiarLetras(palabra);

    // Muestra la traducción en un recuadro aparte
    document.getElementById('traduccion').textContent = traduccion;
}

// Función para cambiar las letras según tu lenguaje personalizado
function cambiarLetras(palabra) {
    // Crea un objeto para mapear las letras a caracteres
    var mapa = {
        "a" : "@",
        "b" : ";",
        "c" : "'",
        "d" : "$",
        "e" : "3",
        "f" : "_",
        "g" : "&",
        "h" : "-",
        "i" : "8",
        "j" : "+",
        "k" : "(",
        "l" : ")",
        "m" : "?",
        "n" : "!",
        "ñ" : "/",
        "o" : "9",
        "p" : "0",
        "q" : "1",
        "r" : "4",
        "s" : "#",
        "t" : "5",
        "u" : "7",
        "v" : ":",
        "w" : "2",
        "x" : '"',
        "y" : "6",
        "z" : "*"
        // Agrega el resto de las letras y sus correspondientes caracteres
    };

    // Convierte la palabra a minúsculas para facilitar la traducción
    palabra = palabra.toLowerCase();

    // Realiza el cambio de letras a caracteres
    var traduccion = '';
    for (var i = 0; i < palabra.length; i++) {
        var letra = palabra.charAt(i);
        traduccion += mapa[letra] || letra; // Si no hay un carácter definido para la letra, se mantiene la letra original
    }

    return traduccion;
}