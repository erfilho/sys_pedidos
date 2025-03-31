import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page.</p>
      <p>
        Go to <Link to="/ordersList">Orders</Link>{" "}
      </p>
      <p>
        Go to <Link to="/ordersRegister">Orders Register</Link>
      </p>
    </div>
  );
}
