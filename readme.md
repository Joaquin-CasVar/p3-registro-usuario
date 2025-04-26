# 📄 Práctico: Registro de Usuario con Validaciones (HTML + JavaScript)

### 🎯 Objetivo del ejercicio

- Aplicar el uso del DOM para capturar elementos
- Capturar valores de inputs y validarlos
- Utilizar eventos y preventDefault() correctamente
- Mostrar mensajes de éxito o error en el HTML

### 📌 Consigna

Crear una página que contenga un formulario de registro de usuario con los siguientes campos:
- Nombre completo (input tipo texto)
- Edad (input tipo número)
- Correo electrónico (input tipo email)
- Contraseña (input tipo password)
- Botón “Registrarse”

### ✅ Requisitos obligatorios
1. **Capturar el evento submit** del formulario y **prevenir el comportamiento por defecto**.

2. Validar que:
    - Ningún campo esté vacío
    - La edad sea mayor o igual a 18
    - El correo tenga un formato válido (que contenga @)
    - La contraseña tenga al menos 6 caracteres

3. Si alguna validación falla, mostrar un mensaje de error debajo del formulario indicando qué campos están mal.

4. Si todas las validaciones son correctas, mostrar un mensaje de éxito que diga:

    “🎉 ¡Registro exitoso! Bienvenido, [nombre].”

### 🧠 Bonus (opcional)

- Mostrar los datos ingresados (menos la contraseña) debajo del formulario en una lista.
- Resaltar en rojo los campos con errores.
- Resetear el formulario una vez enviado correctamente.