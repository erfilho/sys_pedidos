CREATE TABLE Peca_Pedido (
  pecaId INT PRIMARY KEY,
  pedId INT,
  largura TEXT NOT NULL,
  altura TEXT NOT NULL,
  status INT NOT NULL,
  FOREIGN KEY (pedId) REFERENCES Pedido(pedId)
);