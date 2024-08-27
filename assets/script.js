// Seleccionar elementos
const textoEntrada = document.getElementById('texto-entrada');
const btnEncriptar = document.getElementById('encriptar');
const btnDesencriptar = document.getElementById('desencriptar');
const salidaNoMensaje = document.getElementById('salida-no-mensaje');
const salidaMensaje = document.getElementById('salida-mensaje');
const textoSalida = document.getElementById('texto-salida');
const btnCopiar = document.getElementById('copiar');

salidaMensaje.style.display = "none";
salidaNoMensaje.style.display = "flex";

// Evento para encriptar
btnEncriptar.addEventListener('click', () => {
    const texto = textoEntrada.value;
    if (texto) {
        const textoEncriptado = encriptarTexto(texto); // Implementar función de encriptación
        mostrarMensaje(textoEncriptado);
    } else {
        salidaNoMensaje.style.display = "none";
        salidaMensaje.style.display = "flex";
    }
});

// Evento para desencriptar
btnDesencriptar.addEventListener('click', () => {
    const texto = textoEntrada.value;
    if (texto) {
        const textoDesencriptado = desencriptarTexto(texto); // Implementar función de desencriptación
        mostrarMensaje(textoDesencriptado);
    } else {
        salidaNoMensaje.style.display = "none";
        salidaMensaje.style.display = "flex";
    }
});

// Evento para copiar texto
btnCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(textoSalida.textContent);
    textoEntrada.value = '';
    alert('Texto copiado al portapapeles');
    salidaNoMensaje.style.display = "flex";
    salidaMensaje.style.display = "none";
});

function mostrarMensaje(mensaje) {
    salidaNoMensaje.style.display = "none"; // Ocultar el mensaje de "Ningún mensaje encontrado"
    salidaMensaje.style.display = "flex";  // Mostrar el contenedor de salida con el mensaje
    textoSalida.textContent = mensaje; // Asignar el mensaje al párrafo
}

function encriptarTexto(texto) {
    // Lógica para encriptar el texto
    return texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
}

function desencriptarTexto(texto) {
    // Lógica para desencriptar el texto
    return texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
}

