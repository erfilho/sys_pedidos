const e = require("express");
const db = require("../config/database");

exports.createPedido = async (req, res) => {
  const { codInterno, codFornecedor, cliente, tipoVidro, dataPedido } =
    req.body;
  const { rows } = await db.query(
    "INSERT INTO pedido (codInterno, codFornecedor, cliente, tipoVidro, dataPedido) VALUES ($1, $2, $3, $4, $5)",
    [codInterno, codFornecedor, cliente, tipoVidro, dataPedido]
  );

  res.status(201).send({
    message: "Pedido added successfully!",
    body: {
      pedido: { codInterno, codFornecedor, cliente, tipoVidro, dataPedido },
    },
  });
};

exports.listAllPedidos = async (req, res) => {
  const response = await db.query("SELECT * FROM pedido");
  res.status(200).send(response.rows);
};

exports.findPedidoById = async (req, res) => {
  const pedidoId = parseInt(req.params.id);
  const response = await db.query("SELECT * FROM pedido WHERE pedid = $1", [
    pedidoId,
  ]);
  res.status(200).send(response.rows);
};

exports.updatePedido = async (req, res) => {
  const pedidoId = parseInt(req.params.id);
  const { codinterno, codfornecedor, cliente, tipovidro, datapedido } =
    req.body;

  const response = await db.query(
    "UPDATE pedido SET codInterno = $1, codFornecedor = $2, cliente = $3, tipoVidro = $4, dataPedido = $5 WHERE pedid = $6",
    [codinterno, codfornecedor, cliente, tipovidro, datapedido, pedidoId]
  );

  res.status(200).send({ message: "Pedido Updated Successfully!" });
};

exports.deletePedido = async (req, res) => {
  const pedidoId = parseInt(req.params.id);
  await db.query("DELETE FROM peca_pedido WHERE pedid = $1", [pedidoId]);
  await db.query("DELETE FROM pedido WHERE pedid = $1", [pedidoId]);

  res.status(200).send({ message: "Pedido deleted successfully!", pedidoId });
};
