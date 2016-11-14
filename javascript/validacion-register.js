window.onload = function() {
    // obtenemos el elemento formulario por medio de su ID
    var form = document.getElementById('formulario');
    var limpiar = document.getElementById('limpiar');

    // al ejecutar el evento submit el formulario envía los datos al documento que tiene en el atributo action.
    // si no hay un atributo action no manda el formulario.
    form.onsubmit = function(evento) {
        // por medio del preventDefault cortamos la ejecución del evento submit
        evento.preventDefault();
        var elementoNombre = document.getElementById('name');
        var elementoEmail = document.getElementById('email');
        var elementoContraseña = document.getElementById('password');
        var elementoRepetirContraseña = document.getElementById('repetircontraseña');

        // por medio del siguiente if validamos los campos de tipo texto.
        // por medio del else if validamos si las contraseñas coinciden o no, y superan los requisitos.
        if (elementoNombre.value.length === 0 || elementoContraseña.value.length === 0 || elementoRepetirContraseña.value.length === 0 || elementoEmail.value.length === 0) {
          document.getElementById('cartel').innerHTML = 'Debes completar todos los campos';
        } else if (elementoContraseña.value != elementoRepetirContraseña.value) {
          document.getElementById('cartel').innerHTML = 'Las contraseñas deben coincidir';
        } else if (elementoContraseña.value.length < 6) {
          document.getElementById('cartel').innerHTML = 'La contraseña debe contener al menos 6 caracteres';
        }

        //suma de usuario registrado por ajax
        var sumaUsuarios = new XMLHttpRequest();
        sumaUsuarios.onreadystatechange = function() {
          if (elementoNombre.value.length != 0 && elementoContraseña.value.length != 0 && elementoRepetirContraseña.value.length != 0 && elementoContraseña.value == elementoRepetirContraseña.value && elementoContraseña.value.length >= 6) {
            document.getElementById('cartel').innerHTML = 'Gracias por registrarte';
          };
        };
        sumaUsuarios.open("GET", "https://sprint.digitalhouse.com/nuevoUsuario", true);
        sumaUsuarios.send();


        //pedido de cantidad de usuarios registrados por ajax
        var cantUsuarios = new XMLHttpRequest();
        cantUsuarios.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var respuesta = JSON.parse(cantUsuarios.responseText).cantidad;
            if (elementoNombre.value.length != 0 && elementoContraseña.value.length != 0 && elementoRepetirContraseña.value.length != 0 && elementoEmail.value.length != 0 && elementoContraseña.value == elementoRepetirContraseña.value && elementoContraseña.value.length >= 6) {
              document.getElementById('contador').innerHTML = 'La cantidad de usuarios registrados es: ' + respuesta;
            };

          };
        };
        cantUsuarios.open("GET", "https://sprint.digitalhouse.com/getUsuarios", true);
        cantUsuarios.send();
    };
};
