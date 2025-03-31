import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPieces, updatePiece } from "../services/api";

// Hook for get all the pieces of a order
export const usePieces = (pedId) => {
  return useQuery({
    queryKey: ["pieces", pedId],
    queryFn: async () => {
      if (!pedId) return [];
      const { data } = await fetchPieces(pedId);
      return data;
    },
    enabled: !!pedId,
  });
};

export const useUpdatePiece = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ pecaid, updatedData }) => {
      const { data } = await updatePiece(pecaid, updatedData);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["pieces"],
      });
    },
  });
};
