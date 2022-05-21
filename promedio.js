'use strict'

const lista1 = [
    100,
    200,
    300,
    500,
];

function calcularMediaAritmetica(lista) {

//     let sumaLista = 0;
//     for (let i = 0; i < lista.length; i++) {
//         sumaLista = sumaLista + lista[i];
// }
// Para iterar dentro de un array, no solamente podemos usar el ciclo for, tambien podemos usar METODOS que corresponden al Array 
// En este caso usamos el metodo .reduce() que lo que hace es nos va sumando lo que se agrega al array y va con la sgte sintaxis
    const sumaLista = lista.reduce(
        function (totalValor = 0, nuevoElemento ) {
            return totalValor + nuevoElemento;
        }
    )    

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}