const pessoa = {
    nome: 'Mariana',
    altura: 1.86,
    cidade: 'São Paulo',
    end: {
        rua: 'Feliz!'
    }
}

// Atribuição por Referência
const outraPessoa = pessoa

// Passagem por Referência
function alteraPessoa(pessoa) {
    const novaPessoa = { ...pessoa }
    novaPessoa.nome = 'João'
    novaPessoa.cidade = 'Fortaleza'
    novaPessoa.end.rua = 'Rua ABC '
    return novaPessoa
}

const novaPessoa = alteraPessoa(pessoa)
console.log(pessoa)
console.log(novaPessoa)

let a = 3
let b = a // atribuição por valor (cópia!)

a++
b--

console.log(a, b)