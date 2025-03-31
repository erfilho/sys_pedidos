const e = require("express");
const db = require("../config/database");

exports.findPecasByPedidoId = async (req, res) => {
  const pedidoId = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM peca_pedido WHERE pedid = $1",
    [pedidoId]
  );
  res.status(200).send(response.rows);
};

exports.checkPecaByPecaId = async (req, res) => {
  const pecaId = parseInt(req.params.id);
  const status = parseInt(req.body.status);
  const response = await db.query(
    "UPDATE peca_pedido SET status = $2 WHERE pecaid = $1",
    [pecaId, status]
  );
  res.status(200).send(response.rows);
};

exports.checkPecaByPedidoId = async (req, res) => {
  const pedidoId = parseInt(req.params.id);
  const response = await db.query(
    "UPDATE peca_pedido SET status = 1 WHERE pedid = $1",
    [pedidoId]
  );
  res.status(200).send(response.rows);
};
