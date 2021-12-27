const { Observable, Subject } = require('rxjs');

function getObservable() {
    return new Observable(subscriber => {
        setTimeout(() => {
            console.log('1# Obs...')
            subscriber.next(Math.random())
            subscriber.complete()
        }, 1000)
    })
}

const obs = getObservable()
obs.subscribe(console.log)
obs.subscribe(console.log)

function getSubject() {
    const sub =  new Subject()
    setTimeout(() => {
        console.log('2# Subject...')
        sub.next(Math.random())
        sub.complete()
    }, 1000)
    return sub
}

const subj = getSubject()
subj.subscribe(console.log)
subj.subscribe(console.log)
