/*// let && const 
let seraQuePode = '?'
console.log(seraQuePode)

let estaFrio = true
if (estaFrio) {
    let acao = 'Colocar o casaco!'
    console.log(acao)
}

// Arrow Function

function somar(n1: number, n2: number): number {
    return n1 + n2
}
console.log(somar(2, 2))

const subtrair = (n1: number, n2: number): number => n1 - n2
console.log(subtrair(10, 5))

const saudacao = () => console.log('Olá')
saudacao()

const falarCom = (pessoa: string) => console.log(`Olá ${pessoa}`)
falarCom('Maria')

// this 
function normalComThis(){
    console.log(this)
}

const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' })

normalComThisEspecial()

// Parametros padrão

function contagemRegressiva(inicio: number): void {
    console.log(inicio)
    while (inicio > 0) {
        inicio--
        console.log(inicio)
    }
    console.log('FIM!')
}
contagemRegressiva(5)

// Rest & Spread
const numbers = [1, 10, 12, 14, -1, 0]
console.log(Math.max(...numbers)) // Spread 

const turmaA: string[] = ['Joao', 'Maria', 'Pedro', 'Daniel']
const turmaB: string[] = ['Fernando', 'Lorena', 'Chris', 'Gabriel', ...turmaA] // Spread

console.log(turmaB)

function retornarArray(...args: number[]): number[] { // Rest
    return args
}
const numeros = retornarArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(numeros)
console.log(retornarArray(...numbers))

 // Rest & Spread (Tupla)
 const tupla: [number, string, boolean] = [1, 'ABC', false]

 function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`)
 }

 tuplaParam1(...tupla)

 function tuplaParam2(...params: [number, string, boolean]) {
     console.log(Array.isArray(params))
     console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
 }
 tuplaParam2(...tupla)


// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020]
//const motor = caracteristicas[0]
//const ano = caracteristicas[1]

const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)

const [w, z] = [2, 3]

// Destructuring (objetos)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        W: 'Importado'
    }
}

const nomeItem = item.nome
const precoItem = item.preco
console.log(nomeItem)
console.log(precoItem)

const { nome: n, preco: p, caracteristicas: { W: any } } = item 
console.log(n)
console.log(p)
console.log(w)

// Callback

function esperar3s(callback: (dado: string) => void) {
    setTimeout(() => {
        callback('3s Depois...')
    }, 3000)
}

esperar3s(function(resultado: string) {
    console.log(resultado)
})


function esperar3sPromise() {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve('3s Depois promise...')
        }, 3000)
    })
}
esperar3sPromise()
    .then(dado => console.log(dado))

fetch('https://swapi.co/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title))
    .catch(err => console.log('Catch!!!' + err)) */



