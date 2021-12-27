// mock - quando vc tenta simular uma dependencia externa da função
let qtdeDeExecucoes = 0

// pura!
function somar(a, b) {
    qtdeDeExecucoes++ // efeitos colaterais observáveis
    return a + b
}

console.log(qtdeDeExecucoes)
console.log(somar(1, 2))