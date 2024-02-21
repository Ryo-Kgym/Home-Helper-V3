import { useDeleteFavoriteFilterArgMutation } from "@v3/graphql/household";

export const useDeleteFavoriteFilterArg = () => {
  const [deleteResult, deleteMutation] = useDeleteFavoriteFilterArgMutation();

  const deleteFavoriteFilterArg = async ({ id }: { id: string }) => {
    await deleteMutation({ id });
    if (deleteResult.error) {
      throw new Error(deleteResult.error.message);
    }
  };

  return { deleteFavoriteFilterArg };
};
