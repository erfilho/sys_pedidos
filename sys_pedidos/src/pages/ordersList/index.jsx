import { Link } from "react-router-dom";
import OrderCard from "../../components/orderCard";

export default function OrdersList() {
  return (
    <div>
      <h1>OrdersList page</h1>
      <p>
        {" "}
        Go to <Link to={"/"}> Homepage </Link>
      </p>

      <OrderCard />
    </div>
  );
}
