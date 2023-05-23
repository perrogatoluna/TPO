const navbar = `
<div class="box_izq">
<img class="animate__animated animate__rotateIn" src="img/cross-arrows.png" alt="">
</div>

<div class="box_der">
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

//Consumo API

const apiDolar = "https://www.dolarsi.com/api/api.php?type=dolar"
async function valordolar() {
    try {
        const response = await fetch(apiDolar)
        const data = await response.json()
        document.getElementById("compra").innerHTML = data[1].casa.compra
        document.getElementById("venta").innerHTML = data[1].casa.venta
    }
    catch (error) { console.log("Ocurrio un error grave", error) }
}

if (document.getElementById("compra")) {
    valordolar();
}

const apiClima = 'https://api.openweathermap.org/data/2.5/weather?lat=-34.6263686&lon=-58.4741776&appid=e6d9d5b12bb8c8cd0c5eff8df1fc49a1&lang=es&units=metric'

async function clima() {
    try {
        const response = await fetch(apiClima)
        const data = await response.json()
        let div = document.getElementById('clima')
        div.innerHTML = '<span>' + data.main.temp + '° </span > '
        let url = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
        div.innerHTML += '<img alt="icon" src=' + url + ' width="120" height="100" />'
    }
    catch (error) { console.log("Ocurrio un error grave", error) }
}

if (document.getElementById('clima')) {
    clima();
}