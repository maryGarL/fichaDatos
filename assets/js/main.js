var nombre= document.getElementById('name');
var apellido=document.getElementById('surname');
var dni=document.getElementById('identifier');
var direccion=document.getElementById('address');

var resultados= document.getElementById('resultados');
var boton= document.getElementById('botoncito');
boton.addEventListener('click',function datos(event){
  event.preventDefault();
  var general= document.getElementsByClassName('lleno');
  if(general[0].value.length==0||general[1].value.length==0||general[2].value.length==0||general[3].value.length==0){
    window.alert('Falta completar');
  } else {
    resultados.innerHTML="<ul>"+
      "<li> Nombre: "+ nombre.value+"</li>"+
      "<li> Apellido: " + apellido.value+"</li>"+
      "<li> DNI: " + dni.value+"</li>"+
      "<li> Direccion: " + direccion.value+"</li>"+
    "</ul>"
  };
});
