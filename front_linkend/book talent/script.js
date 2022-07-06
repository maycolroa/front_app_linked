function validar () {
  const usuario = document.getElementById('usuario').value;
  const Contraseña = document.getElementById('pass').value;

  if (usuario === 'maycol' && Contraseña === '1234') {
    window.location = 'busqueda.html';
  } else {
    window.alert('Usuario o contraseña invalida');
  }
}
