const $botonEnviarFormulario = document.querySelector('#enviar-carta');

$botonEnviarFormulario.onclick = validarFormulario;

function validarFormulario(event) {

    event.preventDefault()

    const $nombreUsuario = document.formulario.nombre.value;
    const $ciudad = document.formulario.ciudad.value;
    const $descripcionRegalo = document.formulario['descripcion-regalo'].value;

    const errorNombre = validarNombre($nombreUsuario);
    const errorCiudad = validarCiudad($ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo($descripcionRegalo);

    const errores = {

        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo,

    };

    const esExito = manejarErrores(errores) === 0;

    if (esExito) {

        formulario.classList.toggle("oculto");
        document.querySelector('#exito').classList.toggle("oculto");
        
        setTimeout(paginaListaDeDeseos,5000);

    }

}

function validarNombre(nombreUsuario) {

    if (nombreUsuario.length === 0) {

        return 'El nombre no debe estar vacio';

    }

    if (nombreUsuario.length < 2) {

        return 'El nombre debe tener al menos 2 caracteres';

    } 

    if (nombreUsuario.length >= 50) {

        return 'El nombre no debe tener mas de 50 caracteres';

    }

    if (!/^[a-z]+$/i.test(nombreUsuario)) {

        return 'El nombre solo acepta letras';

    } 

    return ""

}

function validarCiudad(ciudad) {

    if (ciudad.length === 0) {

        return 'Debe elegir una ciudad';

    }

    return ""

}

function validarComportamiento(comportamiento) {

    if (comportamiento.length === 0) {

        return 'Este campo no puede estar vacio';

    }

    return ""

}

function validarDescripcionRegalo(descripcion) {

    if (descripcion.length === 0) {

        return 'El campo descripcion regalo no puede estar vacio';

    }

    if (descripcion.length < 4) {
        
        return 'El campo descripcion regalo debe tener al menos 4 caracteres';

    }

    if (descripcion.length >= 250) {

        return 'El campo descripcion regalo no debe tener mas de 250 caracteres';

    }

    if (!/[a-z0-9]/i.test(descripcion)) {
        
        return 'El campo descripcion regalo solo acepta letras y numeros'

    }

    return ""

}

function manejarErrores(errores) {
    
    borrarErroresAnteriores();

    let contadorErrores = 0;
    const llaves = Object.keys(errores);

    llaves.forEach(function(llave) {

        const error = errores[llave]

        if (error) {

            formulario[llave].classList.add("error");
            contadorErrores++;
            mostrarErrores(error);

        } else {

            formulario[llave].classList.remove("error");

        }

    });

    return contadorErrores;
    
}

function mostrarErrores(error) {

    const $errores = document.querySelector('#errores');
    const $error = document.createElement('li');

    $error.classList.add("lista-errores");
    $error.textContent = error;
    $errores.appendChild($error);

}

function borrarErroresAnteriores() {

    const $errores = document.querySelector('#errores');
    const $error = document.querySelectorAll('.lista-errores')

    $error.forEach(function(lista) {

        if ($error.length > 0) {

            $errores.removeChild(lista)

        }

    });

}

function paginaListaDeDeseos() {

    alert('Serás redirigido a la lista de deseos');
    location.href = "wishlist.html";

}
