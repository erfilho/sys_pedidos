import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  //baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchOrders = () => api.get("/pedidos");
export const fetchPieces = (pedId) => api.get(`/pedidos/${pedId}/pecas`);

export const updatePiece = (pecaId, data) => api.put(`/pecas/${pecaId}`, data);

export const fetchOrder = (id) => api.get(`/orders/${id}`);
export const createOrder = (data) => api.post("/orders", data);
export const updateOrder = (id, data) => api.put(`/orders/${id}`, data);
export const deleteOrder = (id) => api.delete(`/orders/${id}`);

export default api;
