probarValidarNombre();
probarValidarCiudad();
probarValidarComportamiento();
probarValidarDescripcionRegalo();

function probarValidarNombre() {

    console.assert(

        validarNombre('') === 'El nombre no debe estar vacio',
        'validarNombre no validó que nombre este vacío'

    )

    console.assert(
        
        validarNombre('f') === 'El nombre debe tener al menos 2 caracteres',
        'validarNombre no validó que nombre tenga al menos 2 caracteres'

    )

    console.assert(

        validarNombre('11111111111111111111111111111111111111111111111111') === 'El nombre no debe tener mas de 50 caracteres',
        'validarNombre no validó que nombre tenga menos de 50 caracteres'

    )
    
    console.assert(

        validarNombre('21323321') === 'El nombre solo acepta letras',
        'validarNombre no validó que nombre solo contenga letras'

    )

    console.assert(

        validarNombre('Facundo') === '',
        'validarNombre no validó un nombre correcto'

    )

}

function probarValidarCiudad() {

    console.assert(

        validarCiudad('') === 'Debe elegir una ciudad', 
        'validarCiudad no validó que se ingrese una ciudad'

    )

    console.assert(

        validarCiudad('Santa fe') === '',
        'validarCiudad no validó que se ingrese un valor correcto'

    )

}

function probarValidarComportamiento() {

    console.assert(

        validarComportamiento('') === 'Este campo no puede estar vacio', 
        'validarComportamiento no validó que se ingrese 1 valor en comportamiento' 

    )

    console.assert(

        validarComportamiento('maso') === '',
        'validarComportamiento no validó que se ingrese un comportamiento válido'

    )

}

function probarValidarDescripcionRegalo() {

    console.assert(

        validarDescripcionRegalo('') === 'El campo descripcion regalo no puede estar vacio', 
        'validarDescripcionRegalo no validó que se ingrese vacio en descripcion del regalo'

    )

    console.assert(

        validarDescripcionRegalo('abc') === 'El campo descripcion regalo debe tener al menos 4 caracteres', 
        'validarDescripcionRegalo no validó que se ingresen al menos 4 caracteres en descripcion del regalo'

    )

    console.assert(

        validarDescripcionRegalo('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'El campo descripcion regalo no debe tener mas de 250 caracteres',
        'validarDescripcionRegalo no validó que se ingrese menos de 250 caracteres en descripcion del regalo'

    )

    console.assert(

        validarDescripcionRegalo(',.,.,.,.,.') === 'El campo descripcion regalo solo acepta letras y numeros',
        'validarDescripcionRegalo no validó que se ingrese solo letras y numeros'

    )

    console.assert(

        validarDescripcionRegalo('Hola santa quiero un...') === '',
        'validarDescripcionRegalo no validó que se ingrese una descripcion válida'

    )

}
