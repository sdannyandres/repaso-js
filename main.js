
var nombre= "Danny Andrés";
var altura= "180";
/*
var concatenacion = nombre + " " + altura;
var datos = document.getElementById("datos");
datos.innerHTML = `
  <h1>Soy la caja de datos</h1>
  <h2>Mi nombre es : ${nombre} </h2>
  <h3>Mido: ${altura} cm</h3>

`;

if(altura>=190){
    datos.innerHTML += `<h1>Eres una persona alta</h1>`;
}else{
    datos.innerHTML += `<h1>Eres una persona bajita</h1>`;
}

for(var i= 2000; i<=2020; i++){
    //bloque de instrucciones
    datos.innerHTML += "<>Estamos en el año: "+i;
}
*/
function MuestraMiNombre(nombre, altura){
    var misDatos =`   
      <h1>Soy la caja de datos</h1>
      <h2>Mi nombre es : ${nombre} </h2>
      <h3>Mido: ${altura} cm</h3>`

      return misDatos;
}
function imprimir(){
   var datos= document.getElementById("datos");
   datos.innerHTML = MuestraMiNombre("Danny Andrés Salazar 180", 180);
      
}
imprimir();

var nombres= ['Victor', 'Antonio', 'Joaquin'];
document.write('<h1> Listado de nombres</h1>');

nombres.forEach((nombre) => {
    document.write(nombre +`<br/>`);
});

var coche = {
    modelo: 'Mercedes Clase AMG',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad)
    },
    propiedad1: "valor aleatorio"
};

document.write("<h1>"+coche.modelo+"</h1>")
coche.mostrarDatos();


