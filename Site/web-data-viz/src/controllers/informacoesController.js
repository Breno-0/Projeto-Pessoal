var informacoesModel = require("../models/informacoesModel");

function pegar(req, res) {

    informacoesModel.pegar()
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  
}

module.exports = {
  pegar
}