const router = require("express").Router();

const pedidoController = require("../controllers/pedido.controller");

router.post("/pedidos", pedidoController.createPedido);

router.get("/pedidos", pedidoController.listAllPedidos);

router.get("/pedidos/:id", pedidoController.findPedidoById);

router.put("/pedidos/:id", pedidoController.updatePedido);

router.delete("/pedidos/:id", pedidoController.deletePedido);

module.exports = router;
