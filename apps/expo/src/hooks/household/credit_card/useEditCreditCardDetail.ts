import { useUpdateCreditCardDetailByIdMutation } from "@v3/graphql/household";

export const useEditCreditCardDetail = () => {
  const [, mutation] = useUpdateCreditCardDetailByIdMutation();

  const editCreditCardDetail = async ({
    id,
    genreId,
    categoryId,
    memo,
  }: {
    id: string;
    genreId: string;
    categoryId: string;
    memo: string | null;
  }) => {
    const { error } = await mutation({
      id,
      genreId,
      categoryId,
      memo,
    });
    if (error) {
      throw error;
    }
  };

  return {
    editCreditCardDetail,
  };
};
