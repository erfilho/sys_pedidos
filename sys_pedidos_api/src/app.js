const express = require("express");
const cors = require("cors");

const app = express();

const index = require("./routes/index");

const pedidoRoute = require("./routes/pedido.route");
const pecasRoute = require("./routes/pecas.route");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

app.use(index);
app.use("/api/", pedidoRoute);
app.use("/api/", pecasRoute);

module.exports = app;
