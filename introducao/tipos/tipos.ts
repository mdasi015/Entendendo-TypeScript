let nome = 'Joao'
console.log(nome)

//enums

/*  enum Cor {
    Cinza, // 0
    Verde, // 1
    Azul, // 2
    Laranja, // 3
    Vermelho // 4
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Cinza, Cor.Verde) 

// any
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW', ano: 2021 }
console.log(carro)

// funções 
function retornaMeuNome(): string {
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log('Oi')
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

console.log(multiplicar(2, 10))

const teste = function (a: number, b: number): boolean {
    return false
}

// tipo função
let calculo: () => number 

// Objetos
let usuario: {nome: string, idade: number, altura: number, peso: number} = {
    nome: 'Mariana',
    idade: 24,
    altura: 1.86,
    peso: 102.65
}

console.log(usuario) */

// Alias
type Funcionario = {
    supervisores: string [],
    baterPonto: (horario: number) => string
}

let funcionario: Funcionario = {
    supervisores: ['Ana', 'Fernando', 'Caio','Katia', 'Samara'],
    baterPonto(horario: number): string {
        if (horario <= 8){
            return 'Ponto Normal'
        } else {
            return 'Fora do Horário'
        }
    }
}

let funcionario2: Funcionario = {
    supervisores: ['Ana', 'Fernando', 'Caio','Katia', 'Samara'],
    baterPonto(horario: number): string {
        if (horario <= 8){
            return 'Ponto Normal'
        } else {
            return 'Fora do Horário'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(10))

//Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)

//checando tipos
let valor = 30

if (typeof valor === 'number'){
    console.log('É um valor number!')
} else {
    console.log(typeof valor)
}

//never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 10,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        }
        if (this.preco <= 0) {
            falha('Preço inválido!')
        }
    }
}
produto.validarProduto()

// Desafio
 type ContaBancaria = {
     saldo: number, 
     depositar: (valor: number) => void
 }

 let contaBancaria: ContaBancaria = {
     saldo: 3456,
     depositar (valor: number) {
         this.saldo += valor
     }
 }

 type Correntista = {
     nome: string,
     contaBancaria: ContaBancaria,
     contatos: string[]
 }

 let correntista: Correntista = {
     nome: 'Mariana Silva',
     contaBancaria: contaBancaria,
     contatos: ['78965123', '785413629']
 }

 correntista.contaBancaria.depositar(3000)
 console.log(correntista)