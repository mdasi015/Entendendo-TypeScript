const path = require('path');
const fn = require('./funcoes');

const caminho = path.join(__dirname, '..', 'dados', 'legendas') // pegou o diretório, saiu da pasta atual, concatenou com a pasta dados e entrou na pasta legendas

const simbolos = [
    '.', '?', '-', ',', '""', '♪', 
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')',
]

const palavrasMaisUsadas = fn.composicao(
    fn.lerDiretorio,
    fn.lerArquivos, //continuo com array com o conteudo dos arquivos
    fn.elementosTerminadosCom('.srt'), // filtrei o array, mas continua com array
    fn.mesclarElementos, // gererei uma string mesclando todos os elementos
    fn.separarTextoPor('\n'), // separei a string gerando mais um array
    fn.removerElementosSeVazio, // filtrei os elemtnos 
    fn.removerElementosSeIncluir('-->'), // filtrei os elemtnos 
    fn.removerElementosSeApenasNumero, // filtrei os elementos 
    fn.removerSimbolos(simbolos), // filtrei os elemtnos 
    fn.mesclarElementos, // mesclei tudo em grande texto
    fn.separarTextoPor(' '), // gerei outro array separando por palavra
    fn.removerElementosSeVazio, // limpei as palavras vazias 
    fn.removerElementosSeApenasNumero, // filtrei os elementos 
    fn.agruparPalavras, // agrupei as palavras 
    fn.ordenarPorAtribNumerico('qtde', 'desc'),
)

palavrasMaisUsadas(caminho)
    .then(console.log)

