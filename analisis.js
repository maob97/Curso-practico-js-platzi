
// HELPERS OR UTILS
function esPar (numero) {
    return (numero % 2 === 0);
};

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (totalValor = 0, nuevoElemento ) {
            return totalValor + nuevoElemento;
        }
    )    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// CALCULADORA DE MEDIANAS 
function medianaSalary (lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const listaMitad1 = lista[mitad - 1];
        const listaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([listaMitad1, listaMitad2]);
        return mediana;
    } else {
        const listaMitad = lista[mitad];
        return listaMitad;
    }
};

// CALCULO DE MEDIANA GENERAL
const salariosPy = paraguay.map(
    function (nombre) {
        return nombre.salary;
    }
);

const salariosPySorted = salariosPy.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralPy = medianaSalary(salariosPySorted);

// MEDIANA DEL TOP 10% DE SALARIOS
const spliceStart = (salariosPySorted.length * 90) / 100;
const spliceCount = salariosPySorted.length - spliceStart;

const salariosPyTop10 = salariosPySorted.splice(spliceStart, spliceCount);

const medianaTop10Py = medianaSalary(salariosPyTop10);


console.log({
    medianaGeneralPy,
    medianaTop10Py
});