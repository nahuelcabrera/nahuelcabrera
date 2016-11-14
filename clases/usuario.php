<?php
	require_once("repositorioUsuarios.php");

	class Usuario {
		private $nombre;
		private $email;
		private $id;
		private $password;

		public function __construct($id, $nombre, $email, $password) {
			$this->id = $id;
			$this->nombre = $nombre;
      $this->email = $email;
			$this->password = $password;
		}

		public function getNombre()
		{
			return $this->nombre;
		}
		public function getEmail()
		{
			return $this->email;
		}
		public function getId()
		{
			return $this->id;
		}
		public function getPassword()
		{
			return $this->password;
		}
		public function setName($name) {
			$this->name = $name;
		}
		public function setEmail($email) {
			$this->email = $email;
		}
		public function setId($id) {
			$this->id = $id;
		}
		public function setPassword($password) {
			$this->password = password_hash($password, PASSWORD_DEFAULT);
		}

		public function guardar(RepositorioUsuarios $repo) {
			$repo->guardar($this);
		}

		public function toArray() {
			return [
				"id" => $this->getId(),
				"name" => $this->getNombre(),
				"email" => $this->getEmail(),
				"password" => $this->getPassword(),
			];
		}
	}
?>
