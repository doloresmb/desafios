
var saludo="Hola"
var numeroA= 5
var numeroB= 15
var name = prompt ("Escribe un nombre")
var surname = prompt ("Ahora tu apellido")

alert(name +" "+ surname)
var number = parseInt (prompt("ingrese un numero"))
console.log(numeroA + number);

var nombre = "";
nombre = prompt ("ingrese su nombre");

if (nombre !="") {
    console.log(saludo + " " + nombre);

} 
else {
      console.warn("debe ingresar un nombre");

}
var color = prompt ("Elija un color")
if (color !="") {
     console.log("Usted eligio el color" + " " + color)
}
 else { console.warn("Debe elegir un color")
}

var number = prompt("Elige un numero")
if (number >1000) {
      alert("Elija un numero menor a 1000")
}
