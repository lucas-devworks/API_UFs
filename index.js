const express = require('express');
const servico = require('./servicos');

const app = express();

// retorna a coleção inteira ou com base no nome
app.get('/ufs', (req, res) => {
    const nomeUF = req.query.busca;
    const resultado = nomeUF ? servico.buscaPorNome(nomeUF) : servico.buscaPorNome();

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({"erro": "Nenhuma UF encontrada"});
    }
});

// retorna um item especifico
app.get('/ufs/:iduf', (req, res) => {

    const idUF = req.params.iduf;
    let uf;
    let mensagemErro = '';

    if(!(isNaN(idUF))) {
        uf = servico.buscaUF(idUF);
        if(!uf) {
            mensagemErro = 'UF não encontrada';
        }
    } else {
        mensagemErro = 'Requisição inválida';
    }

    if (uf) {
        res.json(uf);
    } else {
        res.status(404).send({ "erro": mensagemErro });
    }
});


app.listen(8080, () => {
    const data = new Date();
    console.log('Servidor node rodando em: '+ data);
});