window.onload = function() {
    // obtenemos el elemento formulario por medio de su ID
    var form = document.getElementById('formulario');

    // al ejecutar el evento submit el formulario envía los datos al documento que tiene en el atributo action.
    // si no hay un atributo action no manda el formulario.
    form.onsubmit = function(evento) {
        // por medio del preventDefault cortamos la ejecución del evento submit
        evento.preventDefault();
        var elementoEmail = document.getElementById('email');
        var elementoContraseña = document.getElementById('password');


        // por medio del siguiente if y else if validamos los campos.
          if (elementoEmail.value.length === 0 && elementoContraseña.value.length === 0) {
            document.getElementById('cartellogin').innerHTML = "Debes completar todos los campos";
        } else if (elementoEmail.value.length === 0) {
            document.getElementById('cartellogin').innerHTML = 'El campo email esta vacio';
        } else if (elementoContraseña.value.length === 0){
            document.getElementById('cartellogin').innerHTML = 'El campo contraseña esta vacio';
        } else if (elementoEmail.value.length != 0 && elementoContraseña.value.length != 0) {
            document.getElementById('cartellogin').style.display = "none";
        }
    }
}
