// Exercício 1 - Classe
/*function Moto(nome) {
    this.nome = nome
    this.velocidade = 0
 
    this.buzinar = function() {
        console.log('Toooooooooot!')
    }
 
    this.acelerar= function(delta) {
        this.velocidade = this.velocidade + delta
    }
} */
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        console.log("bibi bibi bibi!");
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
/*var objeto2D = {
    base: 0,
    altura: 0
} */
class Objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
//var retangulo = Object.create(objeto2D)
const retangulo = new Retangulo;
retangulo.base = 10;
retangulo.altura = 7;
retangulo.area = function () {
    return this.base * this.altura;
};
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
/*var estagiario = {
    _primeiroNome: ''
} */
class Estagiario {
    constructor() {
        this._primeironome = '';
    }
    get primeiroNome() {
        return this._primeironome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeironome = valor;
        }
        else {
            this._primeironome = '';
        }
    }
}
console.log(Estagiario.primeiroNome);
Estagiario.primeiroNome = 'Le';
console.log(Estagiario.primeiroNome);
Estagiario.primeiroNome = 'Leonardo';
console.log(Estagiario.primeiroNome);
