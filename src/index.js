import "./styles.css";

const sueldo = document.getElementById("sueldo");
const neto = document.getElementById("neto");
const rein = document.getElementById("rein");

function valsu(sueldo, reintegro) {
  var impg = 5;
  var rete = 1000;
  var jub = 1200;
  var porcentaje = (sueldo * impg) / 100;
  var totalneto = sueldo - porcentaje - rete - jub;
  if (reintegro) {
    neto.innerHTML = parseInt(reintegro) + totalneto;
  } else {
    neto.innerHTML = totalneto;
  }

  console.log(porcentaje);
}
document.getElementById("lanzar").addEventListener("click", function() {
  valsu(sueldo.value, rein.value);
});
