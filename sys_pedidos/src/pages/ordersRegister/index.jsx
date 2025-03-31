import { Link } from "react-router-dom";

export default function OrdersRegister() {
  return (
    <div>
      <h1>OrderRegister Info</h1>
      <p>This is the home page.</p>

      <p>
        {" "}
        Go to <Link to={"/"}> Homepage </Link>
      </p>
    </div>
  );
}
