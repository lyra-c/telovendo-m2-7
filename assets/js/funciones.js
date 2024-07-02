// Crear una función que permita validar todos los campos del formulario de
// contacto al momento de hacer clic en el botón de procesamiento. Se debe indicar qué campos
// están vacíos.

// Alerta de ejemplo
// alert('Bienvenido a nuestro sitio');

// #####################################################################################################################


// 1. Seleccionar contenido HTML


// Seleccionando texto interno del input de correo
const inputCorreo = document.getElementById('input-correo').value;

// Seleccionando texto interno del input de mensaje
const inputMensaje = document.getElementById('input-mensaje').value;

// Seleccionando botón Enviar
const botonEnviar = document.getElementById('boton-enviar');


// 2. Crear función de validación

function validarCampos() {
    if(inputCorreo === '' && inputMensaje === '') {
        alert('Ingresa tu correo electrónico y mensaje');
    } else if(inputCorreo === '') {
        alert('Ingresa tu correo electrónico');
    } else if(inputMensaje === '') {
        alert('Ingresa tu mensaje');
    } else {
        alert('Su mensaje ha sido enviado, gracias :) ');
    }
}

// 3. Añadir evento y llamar una función

botonEnviar.addEventListener('click', validarCampos);