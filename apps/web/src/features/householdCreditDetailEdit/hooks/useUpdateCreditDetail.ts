import { useUpdateCreditCardDetailByIdMutation } from "@v3/graphql/household";

import { generateId } from "../../../function/generateId";

export const useUpdateCreditDetail = ({ id }: { id: string }) => {
  const [, update] = useUpdateCreditCardDetailByIdMutation();

  const updateCreditDetail = async (params: {
    genreId: string;
    categoryId: string;
    memo: string;
    tags: string[];
  }) => {
    await update({
      id,
      genreId: params.genreId,
      categoryId: params.categoryId,
      memo: params.memo,
      tagDetails: params.tags.map((tag) => ({
        id: generateId(),
        detailId: id,
        tagId: tag,
      })),
    });
  };

  return {
    updateCreditDetail,
  };
};
