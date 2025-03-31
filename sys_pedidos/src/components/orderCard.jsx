import React, { useState } from "react";

import { useOrders } from "../hooks/useOrder";
import { usePieces, useUpdatePiece } from "../hooks/usePieces";

const OrderCard = () => {
  const { data: orders, isLoading, error } = useOrders();
  const [order, setOrder] = useState(null);

  const handleOrderClick = (order) => {
    setOrder((prevOrder) => (prevOrder === order ? null : order));
  };

  const { data: pieces, isLoading: isLoadingPieces } = usePieces(order);
  const updatePiece = useUpdatePiece();

  const handleUpdatePiece = (pecaid, pieceStatus) => {
    updatePiece.mutate(
      { pecaid, updatedData: { status: pieceStatus } },
      {
        onSucess: () => {
          alert("Piece updated successfully");
        },
        onError: () => {
          alert("Error updating the piece", error.message);
        },
      }
    );
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2> Lista de pedidos </h2>

      <table border={1}>
        <thead>
          <tr>
            <th>Código Interno</th>
            <th>Código Fornecedor</th>
            <th>Cliente</th>
          </tr>
        </thead>

        <tbody>
          {/** Loop through the orders and display them in a table */}
          {orders.map((order) => (
            <React.Fragment key={order.pedid}>
              <tr
                style={{ cursor: "pointer", hover: "blue" }}
                key={order.pedid}
                onClick={() => handleOrderClick(order.pedid)}
              >
                <td>{order.codinterno}</td>
                <td>{order.codfornecedor}</td>
                <td>{order.cliente}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {/** Display the pieces of the selected order */}
      {order && (
        <table border={1}>
          <thead>
            <tr>
              <th>Status</th>
              <th>Largura</th>
              <th>Altura</th>
            </tr>
          </thead>
          <tbody>
            {isLoadingPieces ? (
              <tr key={0}>
                <td colSpan={3}> Loading... </td>
              </tr>
            ) : pieces.length > 0 ? (
              pieces.map((piece) => (
                <tr key={piece.pecaid}>
                  <td
                    style={{ cursor: "pointer", hover: "blue" }}
                    onClick={() => {
                      handleUpdatePiece(piece.pecaid, piece.status ? 0 : 1);
                    }}
                  >
                    {piece.status ? "✅" : "❌"}
                  </td>
                  <td>{piece.largura}</td>
                  <td>{piece.altura}</td>
                </tr>
              ))
            ) : (
              <tr key={0}>
                <td colSpan={3}>No pieces found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderCard;
