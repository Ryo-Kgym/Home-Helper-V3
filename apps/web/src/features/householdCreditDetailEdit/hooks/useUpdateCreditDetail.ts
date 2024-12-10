import { useUpdateCreditCardDetailByIdMutation } from "@v3/graphql/household";

export const useUpdateCreditDetail = ({ id }: { id: string }) => {
  const [, update] = useUpdateCreditCardDetailByIdMutation();

  const updateCreditDetail = async (params: {
    genreId: string;
    categoryId: string;
    memo: string;
  }) => {
    await update({
      id,
      genreId: params.genreId,
      categoryId: params.categoryId,
      memo: params.memo,
    });
  };

  return {
    updateCreditDetail,
  };
};
