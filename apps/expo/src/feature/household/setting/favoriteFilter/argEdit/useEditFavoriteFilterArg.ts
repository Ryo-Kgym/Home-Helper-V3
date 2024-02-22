import { useUpdateFavoriteFilterArgMutation } from "@v3/graphql/household";

export const useEditFavoriteFilterArg = () => {
  const [, updateMutation] = useUpdateFavoriteFilterArgMutation();

  const editFavoriteFilterArg = async ({
    argId,
    value,
  }: {
    argId: string;
    value: string;
  }) => {
    const { error } = await updateMutation({
      argId,
      value,
    });
    if (error) {
      throw error;
    }
  };

  return {
    editFavoriteFilterArg,
  };
};
