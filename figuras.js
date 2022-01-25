'use strict'

//*Codigo del CUADRADO
console.group("CUADRADO");

const ladoCuadrado = prompt("ingrese la medida de alguno de los lados del cuadrado");
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " +perimetroCuadrado+ "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el Area del Cuadrado es: " +areaCuadrado+ " cm^2");

console.groupEnd();

//*Codigo del TRIANGULO
console.group("TRIANGULO");
//captacion de datos
const ladoTriangulo1 = prompt("ingrese la medida del primer lado del triangulo");
const ladoTriangulo2 = prompt("Ingrese la medida del segundo lado del triangulo");
const baseTriangulo = prompt("ingrese la medida de la base del triangulo");
const alturaTriangulo = prompt("Ingrese la altura del triangulo")
const divisor = 2;
// impresion en consola
console.log("El primer lado del triangulo mide: " 
+ ladoTriangulo1 +"cm "
+"El segundo lado del triangulo mide: " 
+ladoTriangulo2 +"cm"
+ " y la base del triangulo mide: "
+baseTriangulo +"cm"
);

// resultados perimetro & area 
const  perimetroTriangulo = (parseInt(ladoTriangulo1) + parseInt(ladoTriangulo2) + parseInt(baseTriangulo));
console.log("El perimetro del triangulo es: "+perimetroTriangulo+"cm");
const areaTriangulo = (parseInt(baseTriangulo) * parseInt(alturaTriangulo) / parseInt(divisor));
console.log("El area del triangulo es: "+areaTriangulo+"cm^2");

console.groupEnd();

//Area y Circunferencia del circulo    