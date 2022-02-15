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
    function perimetroTriangulo(lado1, lado2, base,){
        return Number(lado1) + Number(lado2) + Number(base);
};
//todo: Funcion para el Area del Triangulo
    function areaTriangulo(base, altura){
        return (Number(base) * Number(altura)) / 2;
};
console.groupEnd();

//*Area y Circunferencia del circulo
console.group("CIRCULO");
// Constante de PI
const PI = Math.PI;
//todo: Funcion para hallar el Diametro
    function diametroCirculo(radio){
        return Number(radio) * 2
    };

//todo: Funcion para la circunferencia
    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);

        return Number(diametro) * PI;
};
//todo: Funcion para el Area del Circulo
    function areaCirculo(radio){
        return (Number(radio) * Number(radio)) * PI;
};
console.groupEnd();

// CREAMOS Y VINCULAMOS LAS FUNCIONES CON HTML

//* FUNCION CUADRADO

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El Perimetro es de: " + perimetro);
};

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El Area es de: " + area);
};

//* FUNCION TRIANGULO

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base  = document.getElementById("base").value;
    
    const perimetro = perimetroTriangulo(lado1, lado2, base)
    alert("El Perimetro es de: "+ perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;

    const area = areaTriangulo(base, altura);
    alert("El area es de: " + area);
}

//* FUNCION CIRCULO

function calcularDiametro(){
    const radio = document.getElementById("radio").value;
    
    const diametro = diametroCirculo(radio);
    alert("El Diametro es de: " + diametro);
}

function calcularPerimetroCirculo(){
    const radio = document.getElementById("radio").value;

    const perimetro = perimetroCirculo(radio);
    alert("El Perimetro es de: " + perimetro);
};

function calcularAreaCirculo() {
    const radio = document.getElementById("radio").value;

    const area = areaCirculo(radio);
    alert("El Area del circulo es: "+ area);
}

//* FUNCION TRIANGULO ISOCELES
//todo: Formula isoceles

function altura(ladoIso1, ladoIso2, baseIso){
    return Math.sqrt((Number(ladoIso1) * Number(ladoIso2)) - (Number(baseIso) * Number(baseIso) / Number(4)));
}

function trianguloIsoceles(){
    const ladoIso1 = document.getElementById("ladoIso1").value;
    const ladoIso2 = document.getElementById("ladoIso2").value;
    const baseIso  = document.getElementById("baseIso").value;

    if(ladoIso1 != ladoIso2){
        alert("Los lados 1 y 2 deben ser iguales");
    }else{
    const alturaiso = altura(ladoIso1, ladoIso2, baseIso);
    alert("La altura del triangulo isoceles es: "+ Math.round(alturaiso))
        }

}