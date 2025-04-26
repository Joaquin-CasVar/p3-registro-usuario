const form = document.getElementById('formulario')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const nombre = document.getElementById('nombre')
    const edad = document.getElementById('edad')
    const email = document.getElementById('correo')
    const contrasenia = document.getElementById('contraseña')
    
    errorNombre = document.getElementById('errorNombre')
    errorEdad = document.getElementById('errorEdad')
    errorCorreo = document.getElementById('errorCorreo')
    errorContrasenia = document.getElementById('errorContraseña')
    mensaje = document.getElementById('mensaje')
    lista = document.getElementById('input-data')
    mensajeDatos = document.getElementById('mensaje-datos')

    if (nombre.value == '') {
        nombre.style.border = '2px solid red'
        edad.style.border = ''
        email.style.border = ''
        contrasenia.style.border = ''
        errorNombre.innerText = 'El nombre de usuario es requierido'
        errorNombre.style.color = 'red'
        errorNombre.style.fontWeight = 'bold'
        errorNombre.style.fontSize = '20px'
        errorEdad.innerText = ''
        errorCorreo.innerText = ''
        errorContrasenia.innerText = ''
        mensaje.innerText = ''
    } else if (edad.value == '') {
        nombre.style.border = ''
        edad.style.border = '2px solid red'
        edad.style.border = ''
        email.style.border = ''
        errorNombre.innerText = ''
        errorEdad.innerText = 'La edad es requerida'
        errorEdad.style.color = 'red'
        errorEdad.style.fontWeight = 'bold'
        errorEdad.style.fontSize = '20px'
        errorCorreo.innerText = ''
        errorContrasenia.innerText = ''
        mensaje.innerText = ''
    } else if (email.value == '') {
        nombre.style.border = ''
        edad.style.border = ''
        email.style.border = '2px solid red'
        contrasenia.style.border = ''
        errorNombre.innerText = ''
        errorEdad.innerText = ''
        email.style.border = '2px solid red'
        errorCorreo.innerText = 'El email es requerido'
        errorCorreo.style.color = 'red'
        errorCorreo.style.fontWeight = 'bold'
        errorCorreo.style.fontSize = '20px'
        errorContrasenia.innerText = ''
        mensaje.innerText = ''
    } else if (contrasenia.value == '') {
        nombre.style.border = ''
        edad.style.border = ''
        email.style.border = ''
        contrasenia.style.border = '2px solid red'
        errorNombre.innerText = ''
        errorEdad.innerText = ''
        errorCorreo.innerText = ''
        contrasenia.style.border = '2px solid red'
        errorContrasenia.innerText = 'La contraseña es requerida'
        errorContrasenia.style.color = 'red'
        errorContrasenia.style.fontWeight = 'bold'
        errorContrasenia.style.fontSize = '20px'
        mensaje.innerText = ''
    } else if (parseInt(edad.value) < 18) {
        nombre.style.border = ''
        edad.style.border = '2px solid red'
        email.style.border = ''
        contrasenia.style.border = ''
        errorNombre.innerText = ''
        edad.style.border = '2px solid red'
        errorEdad.innerText = 'Debe tener al menos 18 años para registrarse'
        errorEdad.style.color = 'red'
        errorEdad.style.fontWeight = 'bold'
        errorEdad.style.fontSize = '20px'
        errorCorreo.innerText = ''
        errorContrasenia.innerText = ''
    } else if (!(email.value).includes('gmail')) {
        nombre.style.border = ''
        edad.style.border = ''
        email.style.border = '2px solid red'
        contrasenia.style.border = ''
        errorNombre.innerText = ''
        errorEdad.innerText = ''
        email.style.border = '2px solid red'
        errorCorreo.innerText = 'El email debe ser gmail'
        errorCorreo.style.color = 'red'
        errorCorreo.style.fontWeight = 'bold'
        errorCorreo.style.fontSize = '20px'
        errorContrasenia.innerText = ''
        mensaje.innerText = ''
    } else if ((contrasenia.value).length < 6) {
        nombre.style.border = ''
        edad.style.border = ''
        email.style.border = ''
        contrasenia.style.border = '2px solid red'
        errorNombre.innerText = ''
        errorEdad.innerText = ''
        errorCorreo.innerText = ''
        contrasenia.style.border = '2px solid red'
        errorContrasenia.innerText = 'La contraseña debe tener al menos 6 caracteres'
        errorContrasenia.style.color = 'red'
        errorContrasenia.style.fontWeight = 'bold'
        errorContrasenia.style.fontSize = '20px'
        mensaje.innerText = ''
    } else {
        nombre.style.border = ''
        edad.style.border = ''
        email.style.border = ''
        contrasenia.style.border = ''
        errorNombre.innerText = ''
        errorEdad.innerText = ''
        errorCorreo.innerText = ''
        errorContrasenia.innerText = ''
        mensaje.innerText = `🎉 ¡Registro exitoso! Bienvenido, ${nombre.value}`

        mensajeDatos.innerText = 'Los datos ingresados fueron:'
        var entry = document.createElement('li')
        entry.appendChild(document.createTextNode(`Nombre ${nombre.value}`))
        lista.appendChild(entry)
        entry = document.createElement('li')
        entry.appendChild(document.createTextNode(`Edad: ${edad.value}`))
        lista.appendChild(entry)
        entry = document.createElement('li')
        entry.appendChild(document.createTextNode(`Correo: ${email.value}`))
        lista.appendChild(entry)

        nombre.value = ''
        edad.value = ''
        email.value = ''
        contrasenia.value = ''
    }
    
})