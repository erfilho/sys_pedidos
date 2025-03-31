import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import OrdersList from "./pages/ordersList";
import OrdersRegister from "./pages/ordersRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ordersList" element={<OrdersList />} />
        <Route path="ordersRegister" element={<OrdersRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
