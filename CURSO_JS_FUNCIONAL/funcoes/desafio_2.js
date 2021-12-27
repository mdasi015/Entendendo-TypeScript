const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.90, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

Array.prototype.meuReduce = function(fn, inicial) {
    let acc = inicial
    for (let i = 0; i < this.length; i++) {
        if(!acc && i === 0) {
            acc = this[i]
            continue 
        }
        acc = fn(acc, this[i], i, this)
    }
    return acc
}

// filter, map, reduce

// 1. definir apenas os elementos que tem fragil true
// 2. processamento para pegar a quantidade e preco qtde * preco  -> total
// 3. gerar a média dos valores totais 

const isFragil = item => item.fragil
const getTotal = item => item.qtde * item.preco
const getMedia = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
    return {
        qtde: novaQtde, 
        total: novoTotal,  
        media: novoTotal / novaQtde
    }
}

const mediaInicial = { qtde: 0, total: 0, media: 0 }

const media = carrinho
    .filter(isFragil)
    .map(getTotal)
    .meuReduce(getMedia, mediaInicial)
    .media

console.log(` A média é ${media} !`)