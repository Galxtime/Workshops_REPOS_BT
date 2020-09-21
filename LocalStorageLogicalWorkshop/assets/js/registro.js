function enviarDatos() {
    let validado = true
    let formulario = document.forms['registro']
    let mensaje = ''


    let email = formulario['inputEmail'].value
    let password = formulario['inputPassword'].value
    let name = formulario['inputName'].value
    let telefono = formulario['inputTel'].value
    let terminos = formulario['checkTerminos'].checked
   

    //validacion y tratamiento de datos

    if (password.length < 8) {
        validado = false
        mensaje += "-su contraseña debe tener al menos 8 caracteres <br>"
    }
    
    if (telefono.length > 10) {
        validado = false
        mensaje += "-debe ser 10 digitos <br>"
    }

    if (terminos == false) {
        validado = false
        mensaje += "-Debe aceptar los terminos y condiciones  <br>"
    }

    //JSON JavaScript Object Notation

    let datos = {
        email,
        password,
        name,
        telefono,
        }
    console.log(datos)

    //Guardar datos Pc local storage  fectch axios send data to server JS
    localStorage.setItem(datos.email, JSON.stringify(datos))

    if (!validado) {
        let alerta = document.getElementById('registro-alert')
        alerta.innerHTML = mensaje
        alerta.hidden = false
    }

    return validado
}