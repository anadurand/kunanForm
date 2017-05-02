window.addEventListener("load",function(){
  var birthPlace = document.getElementById("birthPlace");
  var live = document.getElementById("live");
  var intervencion = document.getElementById("intervencion");

  region(birthPlace);
  region(live);
  regionInter(intervencion);


});

var regiones = ["Amazonas", "Ancash","Apurìmac", "Arequipa","Ayacucho","Cajamarca","Callao","Cuzco", "Huancavelica","Huànuco","Ica",
                "Junìn","La Libertad","Lambayeque","Lima","Loreto","Madre de Dios","Moquegua","Pasco","Piura","Puno","San Martìn","Tacna","Tumbes","Ucayali"];
function region(nodo){
  var docF = document.createDocumentFragment();
  for(i=0; i<regiones.length; i++){
    var option = document.createElement("option");
    option.value = regiones[i];
    option.innerHTML = regiones[i];
    docF.appendChild(option);
  }
  nodo.appendChild(docF)
}
function regionInter(nodo){
  var docF = document.createDocumentFragment();
  for(i=0; i<regiones.length; i++){
    var check = document.createElement("input");
    var span =document.createElement("span");
    var br = document.createElement("br");
    check.type = "checkbox";
    check.value = regiones[i];
    span.innerHTML = regiones[i];
    docF.appendChild(check);
    docF.appendChild(span);
    docF.appendChild(br);
  }
  nodo.appendChild(docF);
}
