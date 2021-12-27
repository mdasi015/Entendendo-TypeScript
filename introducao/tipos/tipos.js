let nome = 'Joao';
console.log(nome);
let funcionario = {
    supervisores: ['Ana', 'Fernando', 'Caio', 'Katia', 'Samara'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do Horário';
        }
    }
};
let funcionario2 = {
    supervisores: ['Ana', 'Fernando', 'Caio', 'Katia', 'Samara'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do Horário';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(10));
//Union Types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
//checando tipos
let valor = 30;
if (typeof valor === 'number') {
    console.log('É um valor number!');
}
else {
    console.log(typeof valor);
}
//never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 10,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido!');
        }
    }
};
produto.validarProduto();
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Mariana Silva',
    contaBancaria: contaBancaria,
    contatos: ['78965123', '785413629']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
