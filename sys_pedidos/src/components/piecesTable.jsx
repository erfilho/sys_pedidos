import { usePieces } from "../hooks/usePieces";

const PiecesTable = ({ pedid }) => {
  const { data: pieces, isLoading } = usePieces(pedid);
  console.log(pieces);
  return (
    <tr>
      <td colSpan={3}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Largura</th>
                <th>Altura</th>
              </tr>
            </thead>
            <tbody>
              {pieces.map((piece) => (
                <tr key={piece.id}>
                  <td>{piece.status}</td>
                  <td>{piece.largura}</td>
                  <td>{piece.altura}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </td>
    </tr>
  );
};

export default PiecesTable;
