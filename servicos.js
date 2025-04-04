const dados = require('./dados');



function buscarUfs () {
    return dados.colecaoUf;
};

// busca por id
function buscaUF(id) {

    const idUF = parseInt(id);
    const filtroUF = dados.colecaoUf.find(uf => uf.id === idUF);
    return filtroUF;
};

// busca filtrada
function buscaPorNome(nome) {
    
    const ufsNomes = dados.colecaoUf.filter(palavra => palavra.nome.toLowerCase().includes(nome));
    return ufsNomes;
};


exports.buscaUF = buscaUF;
exports.buscaPorNome = buscaPorNome;
exports.buscaUF = buscaUF;