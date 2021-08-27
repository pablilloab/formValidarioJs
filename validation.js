const validar = (event) => {
    event.preventDefault();
    let formulario = document.getElementById("form")
    if (!formulario[0].value){
        formulario[0].value = "Tenes q ingresar un nombre"
        formulario.style.borderColor = "red"
    }else if (!formulario[1].value){
        formulario[1].value = "Tenes q ingresar un apellido"
        formulario.style.borderColor = "red"
    }else if (!formulario[2].value) {
        formulario[2].value = "Tenes q ingresar tu edad"
        formulario.style.borderColor = "red"
    }else if (!formulario[3].value) {
        formulario[3].value = "Tenes q ingresar un correo"
        formulario.style.borderColor = "red"
    }else if (formulario[5].checked === false) {
        alert("Antes de continuar tenes q aceptar los terminos y condiciones")
        formulario.style.borderColor = "red"
    }else {
        formulario.style.borderColor = "black"

        document.write (formulario[0].value + "</br>" + formulario[1].value + "</br>" + formulario[2].value + "</br>" + formulario[3].value)
    }


    console.log(formulario[0])
}