probarValidarNombre();
probarValidarCiudad();
probarValidarComportamiento();
probarValidarDescripcionRegalo();

function probarValidarNombre() {

    let arrayPrueba = [];
    arrayPrueba.length = 51;

    console.assert(

        validarNombre('') === 'Este campo no debe estar vacio',
        'validarNombre no validó que nombre este vacío'

    )

    console.assert(
        
        validarNombre('f') === 'El nombre debe tener al menos 2 caracteres',
        'validarNombre no validó que nombre tenga al menos 2 caracteres'

    )

    console.assert(

        validarNombre(arrayPrueba) === 'El nombre no debe tener mas de 50 caracteres',
        'validarNombre no validó que nombre tenga menos de 50 caracteres'

    )
    
    console.assert(

        validarNombre('21323321') === 'Este campo solo acepta letras',
        'validarNombre no validó que nombre solo contenga solamente letras'

    )

}

function probarValidarCiudad() {

    console.assert(

        validarCiudad('') === 'Debe elegir una ciudad', 
        'validarCiudad no validó que se ingrese una ciudad'

    )

}

function probarValidarComportamiento() {

    console.assert(

        validarComportamiento('') === 'Este campo no puede estar vacio', 
        'validarComportamiento no validó que se ingrese 1 valor en comportamiento' 

    )

}

function probarValidarDescripcionRegalo() {

    console.assert(

        validarDescripcionRegalo('') === 'Este campo no puede estar vacio', 
        'validarDescripcionRegalo no validó que se ingrese vacio en descripcion del regalo'

    )

    console.assert(

        validarDescripcionRegalo('abc') === 'Este campo debe tener al menos 4 caracteres', 
        'validarDescripcionRegalo no validó que se ingresen al menos 4 caracteres en descripcion del regalo'

    )

    let arrayPrueba = [];
    arrayPrueba.length = 260;

    console.assert(

        validarDescripcionRegalo(arrayPrueba) === 'Este campo no debe tener mas de 250 caracteres',
        'validarDescripcionRegalo no validó que se ingrese menos de 250 caracteres en descripcion del regalo'

    )

    console.assert(

        validarDescripcionRegalo('141414141') === 'Este campo solo acepta letras',
        'validarDescripcionRegalo no validó que se ingrese solamente letras en descripcion regalo'

    )

}
