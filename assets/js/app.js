function letrasMayucula(text,label){
  var testName = /[A-Z]{1}[a-z]+$/;
  if(!text.value.match(testName)){
    alert(label + ", la primera letra con mayùscula.");
  }else{
    return true;
  }
}
function fecha(text,label){
  var testDate = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[/\\/](19|20)\d{2}$/;
  if(!text.value.match(testDate)){
    alert(label + ", la primera letra con mayùscula.");
  }else{
    return true;
  }
}

function stringVacio(text, label){
  if(text.value != ""){
    alert("Falta llenar campo de :" + label);
  }else{
    return true;
  }
}
function numberVacio(text, label){
  var numeros = /^[0-9]+$/;
  if(text.value != "" || !text.value.match(numeros)){
    alert("Falta llenar campo de :" + label);
  }else{
    return true;
  }
}
function checked(text,label){
  var c = 0;
  for(i=0; i<text.length; i++){
    if(!text[i].checked){
      c++;
    }
  }
  if(c==0){
    alert("Falta llenar campo de: " + label);
  }
}
function validacion(){
  var lastName = document.getElementById("lastName");
  var name = document.getElementById("name");
  var birth = document.getElementById("birth");
  var birthPlace = document.getElementById("birthPlace");
  var sexo = document.getElementsByName("sexo");
  var profesion = document.getElementById("profesion");
  var timeCargo = document.getElementById("tiempoCargo");
  var edad = document.getElementById("age");
  var live = document.getElementById("live");
  var cargo = document.getElementById("cargo");
  var timeOrganization = document.getElementById("tiempoOrganizacion");
  var entidad = document.getElementById("entidadName");
  var fechaOperacion = document.getElementById("fechaOperaciones");
  var typeEntidad = document.getElementById("typeEntidad");
  var inscrita = document.getElementsByName("inscrita");
  var regionInter = document.getElementsByName("regionInter");
  var provinciaInter = document.getElementById("provinciaInter");
  var distritoInter = document.getElementById("distritoInter");
  


  letrasMayucula(lastName, "Apellido");
  letrasMayucula(name, "Nombre");
  fecha(birth, "Fecha de nacimiento");
  stringVacio(birthPlace, "Region de nacimiento");
  checked(sexo, "Sexo");
  stringVacio(profesion, "Profesion");
  numberVacio(timeCargo, "Tiempo en cargo");
  stringVacio(edad, "edad ");
  stringVacio(live,"residencia");
  stringVacio(cargo, "cargo");
  numberVacio(timeOrganization, "tiempo en la organización");
  stringVacio(entidad, "nombre de la entidad");
  fecha(fechaOperacion, "fecha de inicio de operaciones");
  stringVacio(typeEntidad, "tipo de entidad");
  checked(inscrita, "registros publicos");
  checked(regionInter, "regiones de operaciones");
  stringVacio(provinciaInter, "provincia");
  stringVacio(distritoInter, "distrito");





}
