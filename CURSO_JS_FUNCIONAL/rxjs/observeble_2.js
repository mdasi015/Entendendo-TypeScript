const { Observable } = require('rxjs')

const obs = Observable.create(subscriber => {
    subscriber.next('RxJS')
    subscriber.next('e')
    subscriber.next('bem')
    subscriber.next('poderosa!')

    if(Math.random() > 0.5) {
        subscriber.complete()
    } else {
        subscriber.error('Que problema?!?')
    }
})

obs.subscribe(
    valor => console.log(`Valor: ${valor}`),
    erro => console.log(`Erro: ${erro}`), //noop
    () => console.log('FIM!')
)

obs.subscribe({
    next(valor) {
        console.log(`Valor: ${valor}`)
    },
    error(msg) {
        console.log(`Error: ${msg}`)
    },
    complete() {
        console.log('FIM!')
    }
})

