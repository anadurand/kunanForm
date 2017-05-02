function letrasMayucula(text,label){
  var testName = /[A-Z]{1,}[a-z]+/;
  if(!text.value.match(testName)){
    alert(label + ", la primera letra con mayùscula.");
  }else{
    return true;
  }
}
