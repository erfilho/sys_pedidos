CREATE TABLE Pedido (
  pedId SERIAL NOT NULL,
  codInterno TEXT NOT NULL,
  codFornecedor TEXT NOT NULL,
  cliente TEXT NOT NULL,
  tipoVidro INT NOT NULL,
  dataPedido DATE NOT NULL,
  PRIMARY KEY (pedId)
);