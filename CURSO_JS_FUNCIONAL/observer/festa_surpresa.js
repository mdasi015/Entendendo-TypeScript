const readline = require('readline');

function obterResposta(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp)
            rl.close()
        })
    })
}

// Observer
function namorada() {
    console.log('N: Apagar as luzes...')
    console.log('N: Pedir Silêncio...')
    console.log('N: SURPRESA!!!')
}

// Observer
function sindico(evento) {
    console.log('S: Monitorando o barulho')
    console.log(`S: evento -> ${evento.resp}`)
    console.log(`S: evento data -> ${evento.data}`)
}

// Subject
async function porteiro(interessados) {
    while(true) {
        const resp = await obterResposta('O namorado chegou? (s/N/q)')
        if(resp.toLowerCase() === 's'){ // Notificado que um evento aconteceu
            // os observadores são notificados
            (interessados || []).forEach(obs => obs({ resp, data: Date.now() }))
        } else if (resp.toLowerCase() === 'q') {
            break
        }
    }
}

/* 
    Chamada da função -> Registra os dois observadores! 
    Os observadores são: [namorada, sindico] 
    O Subject é o porteiro!
*/
porteiro([namorada, sindico]) 