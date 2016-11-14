<?php
	require_once("validador.php");
	require_once("repositorio.php");

	class ValidadorUsuario extends Validador {
		public function validar(Array $datos, Repositorio $repo) {

			$repoUsuarios = $repo->getRepositorioUsuarios();

			$errores = [];
	        if (empty(trim($datos["name"])))
	        {
	            $errores["name"] = "Por favor ingresa tu nombre";
	        }
	        if (empty(trim($datos["email"])))
	        {
	            $errores["email"] = "Por favor ingresa tu  mail";
	        }
					if (empty(trim($datos["password"])))
					{
							$errores["password"] = "Por favor ingresa una contraseña";
					}
					if (strlen($datos["password"]) < 6) {
							$errores["password"] = "La contraseña debe tener al menos 6 caracteres";
					}
	        elseif (!filter_var($datos["email"], FILTER_VALIDATE_EMAIL))
          {
	            $errores["email"] = "Por favor ingresa tu mail correcto";
	        }
	        elseif ($repoUsuarios->existeElMail($datos["email"]))
	        {
	            $errores["email"] = "El email ya esta registrado";
	        }
	        return $errores;
		}
	}
?>
