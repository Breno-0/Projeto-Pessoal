var express = require("express");
var router = express.Router();

var informacoesController = require("../controllers/informacoesController");

router.get("/pegar", function (req, res) {
  informacoesController.pegar(req, res);
});

router.get("/usuariosTotais", function (req, res) {
  informacoesController.usuariosTotais(req, res);
});



module.exports = router;