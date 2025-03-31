const router = require("express").Router();

const pecasController = require("../controllers/pecas.controller");

router.get("/pedidos/:id/pecas", pecasController.findPecasByPedidoId);

router.put("/pecas/:id", pecasController.checkPecaByPecaId);

module.exports = router;
