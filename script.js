document.addEventListener("DOMContentLoaded", function () {
  var actividadVar = "";
  var lugaresVar = "";
  var diaVar = "Jueves";

  function seleccionarActividad() {
    actividadVar = document.getElementById("actividad").value;
    actualizarOpcionesLugar();
  }

  function actualizarOpcionesLugar() {
    var lugares = obtenerLugares();
    var lugaresDropdown = document.getElementById("lugares");
    lugaresDropdown.innerHTML = "";

    lugares.forEach(function (lugar) {
      var option = document.createElement("option");
      option.value = lugar;
      option.text = lugar;
      lugaresDropdown.add(option);
    });
  }

  function obtenerLugares() {
    // Función obtenerLugares adaptada de tu código original
    // ...

    return lugares;
  }

  function finalizarSeleccion() {
    var lugarSeleccionado = document.getElementById("lugares").value;
    var historial = document.getElementById("historial");
    var nuevoHistorial = document.createElement("div");
    nuevoHistorial.innerText = `Día ${diaVar}: Actividad - ${actividadVar}, Lugar - ${lugarSeleccionado}`;
    historial.appendChild(nuevoHistorial);
    reiniciarInterfaz();
  }

  function generarCronograma() {
    // Función generarCronograma adaptada de tu código original
    // ...
  }

  function reiniciarInterfaz() {
    document.getElementById("actividad").value = "";
    document.getElementById("lugares").value = "";
    document.getElementById("dia").value = "Jueves";
    actividadVar = "";
    lugaresVar = "";
    diaVar = "Jueves";
  }

  // Llamada a la función de inicialización u otras funciones si las necesitas
});
