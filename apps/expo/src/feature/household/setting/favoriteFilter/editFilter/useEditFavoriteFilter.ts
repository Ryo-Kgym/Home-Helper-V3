import { useUpdateFavoriteFilterMutation } from "@v3/graphql/household";

export const useEditFavoriteFilter = () => {
  const [, updateMutation] = useUpdateFavoriteFilterMutation();

  const editFavoriteFilter = async ({
    filterId,
    name,
  }: {
    filterId: string;
    name: string;
  }) => {
    const { error } = await updateMutation({
      filterId,
      name,
    });
    if (error) {
      throw error;
    }
  };

  return { editFavoriteFilter };
};
