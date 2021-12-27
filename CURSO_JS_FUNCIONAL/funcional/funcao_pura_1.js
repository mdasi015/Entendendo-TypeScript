// Uma função pura é uma função em que o valor 
// de retorno é determinado APENAS por seus valores 
// de entrada, sem efeitos colaterais observáveis

//const PI = 3.14

// Impura - PI é um valor externo!
function areaCirc(raio) {
    return raio * raio * Math.PI // Estavel
}

console.log(areaCirc(10))

// Pura 
function areaCircPura(raio, pi) {
    return raio * raio * pi
}

console.log(areaCircPura(10, 3.14))