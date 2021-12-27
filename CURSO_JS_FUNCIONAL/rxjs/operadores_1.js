// Os dois tipos de operadores

// 1. Operadores de criação
const { of } = require('rxjs')

// 2. Operadores Encadeáveis (Pipeable Op.)
const { last, first, map } = require('rxjs/operators')


of (1, 2, 'Ana', false, 'ultimo')
    .pipe(
        last(),
        map(v => v[0]),
        map(v => `A letra encontrada foi: ${v}`),
    )
    .subscribe(function(valor) {
        console.log(valor)
    })