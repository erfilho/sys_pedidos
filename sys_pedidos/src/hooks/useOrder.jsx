import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchOrders } from "../services/api";

// Hook for get all the orders
export const useOrders = () => {
  return useQuery({
    queryKey: "orders",
    queryFn: async () => {
      const { data } = await fetchOrders();
      return data;
    },
  });
};
