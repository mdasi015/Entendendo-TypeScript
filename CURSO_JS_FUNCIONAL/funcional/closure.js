// Closure é quando uma função "lembra"
// seu escopo léxico, mesmo quando a função
// é executada fora desse escopo léxico = é o escopo no qual a função foi denifinida fisicamente

const somarXMais3 =  require('./closure_escopo')

const x = 1000
console.log(somarXMais3())