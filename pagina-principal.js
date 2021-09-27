const respuesta = document.location.search
const respuesta_usuario = new URLSearchParams(respuesta).get("usuario");
const usuario = document.getElementById("nombre_usuario");

const actual = new Date().getTime();
const validez_cinco_dias = new Date(actual + (5 * 86400000));
const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado",];
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",];
const dia_validez = dias[validez_cinco_dias.getDay()];
const mes_validez = meses[validez_cinco_dias.getMonth()];
const validez = document.getElementsByClassName("aclaracion_validez");

usuario.textContent=respuesta_usuario;

for (var i=0; i < validez.length; i++) {
    validez[i].textContent="(hasta el " + dia_validez + " " + validez_cinco_dias.getDate() + " de " + mes_validez + ")";
}
