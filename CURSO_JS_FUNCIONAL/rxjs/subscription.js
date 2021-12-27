// esperar 3000 segundos 
// gerar números de 500 
const { timer, Subscription } = require('rxjs')

const obs = timer(3000, 500)

const sub1 = obs.subscribe(num => {
    console.log(`#1 Gerou o número ${num}`)
})

const sub2 = obs.subscribe(num => {
    console.log(`#2 Gerou o número ${num}`)
})

const sub = new Subscription()
sub.add(sub1)
sub.add(sub2)


// Depois de 10000 vai chamar o unsubscribe
setTimeout(() => {
    sub1.unsubscribe()
    sub2.unsubscribe()
}, 5000)