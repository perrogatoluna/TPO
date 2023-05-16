
const navbar = `
<div class="box box_izq">
<img class="animate__animated animate__rotateIn" src="img/cross-arrows.png" alt="">
</div>

<div class="box box_der">
<navbar class="">
    <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="chombas.html">Chombas</a></li>
        <li><a href="remeras.html">Remeras</a></li>
        <li><a href="joggings.html">Jogging</a></li>
        <li><a href="ubicacion.html">Ubicación</a></li>
        <li><a href="contacto.html">Contacto</a></li>
    </ul>
</navbar>
</div>
`

const footer = `
<div class="linea1">
<a href="https://www.facebook.com" target="_blank">
    <img src="./img/facebook.png" alt="icono Fb">

</a>
<a href="https://www.instagram.com" target="_blank">
    <img src="./img/instagram.png" alt="icono instagram">
</a>
<a href="https://twitter.com" target="_blank">
    <img src="./img/gorjeo.png" alt="icono twitter">
</a>
</div>

<div class="linea2">
<div class="contacto">
    <i class="fa-solid fa-location-dot"></i>
    <a href="ubicacion.html">Nazca y Avellaneda - C.A.B.A.</a>
</div>
<div class="contacto">
    <i class="fa-solid fa-phone"></i>
    <span>12345678</span>
</div>
<div class="contacto">
    <i class="fa-solid fa-envelope"></i>
    <a href="mailto:flechacruz@gmail.com">flechacruz@gmail.com</a>
</div>
</div>
`

const header = document.getElementById('header')
header.innerHTML = navbar;

const footer_e = document.getElementById('footer')
footer_e.innerHTML = footer;


function validarFormulario() {
    // Obtener los valores ingresados por el usuario y recortar
    // los posibles espacios en blanco al principio y al final.
    var nombre = document.getElementById("nombre").value.trim();
    var celu = document.getElementById("celu").value.trim();
    var email = document.getElementById("email").value.trim();
    //var text = document.getElementById("texto").value.trim();


    // Verificar si algún campo está en blanco
    if (nombre === "" || celu === "" || email === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return false;
    }

    
    // Verificar si el nombre contiene solo caracteres alfabéticos y espacios
    for (var i = 0; i < nombre.length; i++) {
      var charCode = nombre.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
        return false;
      }
    }

    // Verificar si el DNI contiene solo 8 dígitos numéricos
    if (celu.length !== 10) {
      alert("El campo 'celu' debe contener exactamente 10 dígitos numéricos.");
      return false;
    }
    for (var j = 0; j < celu.length; j++) {
      var digit = celu.charAt(j);
      if (digit < "0" || digit > "9") {
        alert("El campo 'celu' solo puede contener dígitos numéricos.");
        return false;
      }
    }

   // var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    /*
	// Using test we can check if the text match the pattern
	if( validEmail.test(email.value) ){
		alert('Email is valid, continue with form submission');
		return true;
	}else{
		alert('Email is invalid, skip form submission');
		return false;
    }*/

    
    // Si todas las validaciones son exitosas, enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
  }