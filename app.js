function mostrarFecha() {
  var fecha = new Date();
  var diaSemana = obtenerDiaSemana(fecha.getDay());
  var dia = fecha.getDate();
  var mes = obtenerMes(fecha.getMonth());
  var anio = fecha.getFullYear();
  var hora = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();
  
  var mensaje = "Hoy es " + diaSemana + " " + dia + " de " + mes + " de " + anio + ", y son las " + hora + " horas, " + minutos + " minutos con " + segundos + " segundos";
  alert(mensaje);
  
  var fechaFinAnio = new Date(anio, 11, 31);
  var tiempoRestante = fechaFinAnio - fecha;
  var dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  tiempoRestante -= dias * (1000 * 60 * 60 * 24);
  var horas = Math.floor(tiempoRestante / (1000 * 60 * 60));
  tiempoRestante -= horas * (1000 * 60 * 60);
  var minutos = Math.floor(tiempoRestante / (1000 * 60));
  tiempoRestante -= minutos * (1000 * 60);
  var segundos = Math.floor(tiempoRestante / 1000);
  
  var contenedor = document.getElementById("tiemporestante");
  contenedor.innerHTML = "Faltan " + dias + " días, " + horas + " horas, " + minutos + " minutos y " + segundos + " segundos para que termine el año";
}

function obtenerDiaSemana(diaSemana) {
  var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  return diasSemana[diaSemana];
}

function obtenerMes(mes) {
  var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  return meses[mes];
}
