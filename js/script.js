const form = document.getElementById('formulario')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const nombre = document.getElementById('nombre').value
    const edad = document.getElementById('edad').value
    const email = document.getElementById('correo').value
    const contrasenia = document.getElementById('contraseña').value

    errorNombre = document.getElementById('errorNombre')
    errorEdad = document.getElementById('errorEdad')
    errorCorreo = document.getElementById('errorCorreo')
    errorContrasenia = document.getElementById('errorContraseña')
    mensaje = document.getElementById('mensaje')

    if (nombre == '') {
        errorNombre.innerText = 'El nombre de usuario es requierido'
        errorNombre.style.color = 'red'
        errorNombre.style.fontWeight = 'bold'
        errorNombre.style.fontSize = '20px'
        errorEdad.innerText = ''
        errorCorreo.innerText = ''
        errorContrasenia.innerText = ''
        mensaje.innerText = ''
    } else if (edad == '') {
        errorNombre.innerText = ''
        errorEdad.innerText = 'La edad es requerida'
        errorEdad.style.color = 'red'
        errorEdad.style.fontWeight = 'bold'
        errorEdad.style.fontSize = '20px'
        errorCorreo.innerText = ''
        errorContrasenia.innerText = ''
        mensaje.innerText = ''
    }
    else if (email == '') {
        errorNombre.innerText = ''
        errorEdad.innerText = ''
        errorCorreo.innerText = 'El email es requerido'
        errorCorreo.style.color = 'red'
        errorCorreo.style.fontWeight = 'bold'
        errorCorreo.style.fontSize = '20px'
        errorContrasenia.innerText = ''
        mensaje.innerText = ''
    } else if (contrasenia == '') {
        errorNombre.innerText = ''
        errorEdad.innerText = ''
        errorCorreo.innerText = ''
        errorContrasenia.innerText = 'La contraseña es requerida'
        errorContrasenia.style.color = 'red'
        errorContrasenia.style.fontWeight = 'bold'
        errorContrasenia.style.fontSize = '20px'
        mensaje.innerText = ''
    } else if (parseInt(edad) < 18) {
        errorNombre.innerText = ''
        errorEdad.innerText = 'Debe tener al menos 18 años para registrarse'
        errorEdad.style.color = 'red'
        errorEdad.style.fontWeight = 'bold'
        errorEdad.style.fontSize = '20px'
        errorCorreo.innerText = ''
        errorContrasenia.innerText = ''
    } else if (!email.includes('gmail')) {
        errorNombre.innerText = ''
        errorEdad.innerText = ''
        errorCorreo.innerText = 'El email debe ser gmail'
        errorCorreo.style.color = 'red'
        errorCorreo.style.fontWeight = 'bold'
        errorCorreo.style.fontSize = '20px'
        errorContrasenia.innerText = ''
        mensaje.innerText = ''
    } else if (contrasenia.length < 6) {
        errorNombre.innerText = ''
        errorEdad.innerText = ''
        errorCorreo.innerText = ''
        errorContrasenia.innerText = 'La contraseña debe tener al menos 6 caracteres'
        errorContrasenia.style.color = 'red'
        errorContrasenia.style.fontWeight = 'bold'
        errorContrasenia.style.fontSize = '20px'
        mensaje.innerText = ''
    } else {
        errorNombre.innerText = ''
        errorEdad.innerText = ''
        errorCorreo.innerText = ''
        errorContrasenia.innerText = ''
        mensaje.innerText = `🎉 ¡Registro exitoso! Bienvenido, ${nombre}`
    }
    
})