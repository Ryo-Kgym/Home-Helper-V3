import { useUpdateCreditCardDetailByIdMutation } from "@v3/graphql/household";

export const useUpdateCreditDetail = ({ id }: { id: string }) => {
  const [, update] = useUpdateCreditCardDetailByIdMutation();

  const updateCreditDetail = async (params: {
    genreId: string;
    categoryId: string;
    memo: string;
    isExpense: boolean;
  }) => {
    await update({
      id,
      genreId: params.genreId,
      categoryId: params.categoryId,
      memo: params.memo,
      businessOptions: {
        isExpense: params.isExpense,
      },
    });
  };

  return {
    updateCreditDetail,
  };
};
