function validar()
		{
			var usuario = document.getElementById("usuario").value;
			var Contraseña = document.getElementById("pass").value;	

			if(usuario == "maycol" && Contraseña == "1234")
			{
				alert("Usuario y Contraseña validos");
				window.location.href = "cliente.html"
			}
			else
			{
				alert("Verifique sus credenciales");
			}
		}
