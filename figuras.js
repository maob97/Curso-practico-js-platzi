'use strict'

//*Codigo del CUADRADO
console.group("CUADRADO");
//todo: Funcion para el Perimetro del Cuadrado
    function perimetroCuadrado(lado){
        return lado * 4;
};
//todo: Funcion para el Area del Cuadrado 
    function areaCuadrado(lado){
        return lado * lado;
};
console.groupEnd();

//*Codigo del TRIANGULO
console.group("TRIANGULO");
//todo: Funcion para el Perimetro del Triangulo
    function perimetroTriangulo(lado1, lado2, base){
        return lado1+lado2+base
};
//todo: Funcion para el Area del Triangulo
    function areaTriangulo(base, altura){
        return (base * altura) / 2;
};
console.groupEnd();

//*Area y Circunferencia del circulo
console.group("CIRCULO");
// Constante de PI
const PI = Math.PI;
//todo: Funcion para hallar el Diametro
    function diametroCirculo(radio){
        return radio * 2
    };

//todo: Funcion para la circunferencia
    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);

        return diametro * PI;
};
//todo: Funcion para el Area del Circulo
    function areaCirculo(radio){
        return (radio * radio) * PI;
};
console.groupEnd();