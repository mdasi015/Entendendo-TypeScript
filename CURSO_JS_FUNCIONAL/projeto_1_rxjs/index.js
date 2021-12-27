const path = require('path');
const fn = require('./funcoes');
const _ = require('lodash')
const { toArray, map } = require('rxjs/operators')

const caminho = path.join(__dirname, '..', 'dados', 'legendas') // pegou o diretório, saiu da pasta atual, concatenou com a pasta dados e entrou na pasta legendas

const simbolos = [
    '.', '?', '-', ',', '""', '♪', 
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')', '!'
]

fn.lerDiretorio(caminho)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeIniciarComNumero(),
        fn.removerSimbolos(simbolos),
        fn.separarTextoPor(' '),
        fn.removerElementosSeVazio(),
        toArray(),
        fn.agruparPalavras(),
        map(array => _.sortBy(array, el => -el.qtde))
        //first(),
    )
    .subscribe(console.log)

/*fn.lerDiretorio(caminho) // array
    .then(fn.elementosTerminadosCom('.srt')) // filtrei o array, mas continua com array
    .then(fn.lerArquivos) //  continuo com array com o conteudo dos arquivos
    .then(fn.mesclarElementos) // gererei uma string mesclando todos os elementos
    .then(fn.separarTextoPor('\n')) // separei a string gerando mais um array
    .then(fn.removerElementosSeVazio) // filtrei os elemtnos 
    .then(fn.removerElementosSeIncluir('-->'))// filtrei os elementos 
    .then(fn.removerElementosSeApenasNumero) // filtrei os elementos 
    .then(fn.removerSimbolos(simbolos)) // filtrei os elemtnos 
    .then(fn.mesclarElementos) // mesclei tudo em grande texto
    .then(fn.separarTextoPor(' ')) // gerei outro array separando por palavra
    .then(fn.removerElementosSeVazio) // limpei as palavras vazias 
    .then(fn.removerElementosSeApenasNumero) // filtrei os elementos 
    .then(fn.agruparPalavras) // agrupei as palavras 
    .then(fn.ordenarPorAtribNumerico('qtde', 'desc'))
    .then(console.log) */