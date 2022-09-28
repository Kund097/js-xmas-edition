const $botonEnviarCarta = document.querySelector('#enviar-carta');

$botonEnviarCarta.onclick = function(event) {

    validarNombre(obtenerNombreUsuario());
    validarCiudad(obtenerCiudadUsuario());
    validarComportamiento(obtenerComportamiento());
    validarDescripcionRegalo(obtenerDescripcionRegalo());
    
    event.preventDefault();

}

function obtenerNombreUsuario() {

    const $nombreUsuario = document.formulario.nombre.value;
    return $nombreUsuario;

}

function obtenerCiudadUsuario () {

    const $ciudadUsuario = document.formulario.ciudad.value;
    return $ciudadUsuario;

}

function obtenerComportamiento () {

    const $comportamiento = document.formulario.comportamiento.value;
    return $comportamiento;

}

function obtenerDescripcionRegalo() {

    const $descripcionRegalo = document.formulario['descripcion-regalo'].value;
    return $descripcionRegalo;

}

function validarNombre(nombreUsuario) {

    if (nombreUsuario.length === 0) {

        return 'Este campo no debe estar vacio';

    }

    if (nombreUsuario.length < 2) {

        return 'El nombre debe tener al menos 2 caracteres';

    } 

    if (nombreUsuario.length >= 50) {

        return 'El nombre no debe tener mas de 50 caracteres';

    }

    if (!/^[A-z]+$/.test(nombreUsuario)) {

        return 'Este campo solo acepta letras';

    } 

}

function validarCiudad(ciudad) {

    if (ciudad.length === 0) {

        return 'Debe elegir una ciudad';

    }

}

function validarComportamiento(comportamiento) {

    if (comportamiento.length === 0) {

        return 'Este campo no puede estar vacio';

    }

}

function validarDescripcionRegalo(descripcion) {

    if (descripcion.length === 0) {

        return 'Este campo no puede estar vacio';

    }

    if (descripcion.length < 4) {
        
        return 'Este campo debe tener al menos 4 caracteres'

    }

    if (descripcion.length >= 250) {

        return 'Este campo no debe tener mas de 250 caracteres';

    }

    if (!/^[A-z]+$/.test(descripcion)) {

        return 'Este campo solo acepta letras';

    }

}
