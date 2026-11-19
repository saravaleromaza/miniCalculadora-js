let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicacion = document.getElementById("multiplicacion");
let division = document.getElementById("division");
let raiz = document.getElementById("raiz");
let potencia = document.getElementById("potencia");
let absoluto = document.getElementById("absoluto");
let aleatorio = document.getElementById("random");
let redondeo = document.getElementById("redondeo");
let floor = document.getElementById("floor");
let ceil = document.getElementById("ceil");

let resultado = document.getElementById("resultado");

// Leer los números de los inputs
function obtenerNumeros() {
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);
    return [n1, n2];
}

function mostrar(valor) {
    resultado.textContent = "Resultado: " + valor;
}

// Operaciones con dos números
suma.addEventListener("click", () => {
    let [n1, n2] = obtenerNumeros();
    mostrar(n1 + n2);
});

resta.addEventListener("click", () => {
    let [n1, n2] = obtenerNumeros();
    mostrar(n1 - n2);
});

multiplicacion.addEventListener("click", () => {
    let [n1, n2] = obtenerNumeros();
    mostrar(n1 * n2);
});

division.addEventListener("click", () => {
    let [n1, n2] = obtenerNumeros();
    if (n2 === 0) {
        mostrar("no se puede dividir entre 0");
    } else {
        mostrar(n1 / n2);
    }
});

potencia.addEventListener("click", () => {
    let [n1, n2] = obtenerNumeros();
    mostrar(Math.pow(n1, n2));
});

// Operaciones con el primer número
raiz.addEventListener("click", () => {
    let [n1] = obtenerNumeros();
    if (n1 < 0) {
        mostrar("no hay raíz de un número negativo");
    } else {
        mostrar(Math.sqrt(n1));
    }
});

absoluto.addEventListener("click", () => {
    let [n1] = obtenerNumeros();
    mostrar(Math.abs(n1));
});

redondeo.addEventListener("click", () => {
    let [n1] = obtenerNumeros();
    mostrar(Math.round(n1));
});

floor.addEventListener("click", () => {
    let [n1] = obtenerNumeros();
    mostrar(Math.floor(n1));
});

ceil.addEventListener("click", () => {
    let [n1] = obtenerNumeros();
    mostrar(Math.ceil(n1));
});

// No necesita números
aleatorio.addEventListener("click", () => {
    mostrar(Math.random());
});