function funcionarOuNao(valor, chanceError) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if(Math.random() < chanceError) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`)) // Tratar erros
    .then(() => console.log('Fim!'))
