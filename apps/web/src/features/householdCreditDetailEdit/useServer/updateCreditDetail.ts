"use server";

import { UpdateCreditCardDetailByIdDocument } from "@v3/graphql/household/schema/mutation/v5/updateCreditCardDetailById.generated";

import { generateId } from "../../../function/generateId";
import { execMutation } from "../../../persistence/database/server/execMutation";

export const updateCreditDetail = async (params: {
  id: string;
  genreId: string;
  categoryId: string;
  memo: string;
  tags: string[];
}) => {
  await execMutation(UpdateCreditCardDetailByIdDocument, {
    id: params.id,
    genreId: params.genreId,
    categoryId: params.categoryId,
    memo: params.memo,
    tagDetails: params.tags.map((tag) => ({
      id: generateId(),
      detailId: params.id,
      tagId: tag,
    })),
  });
};
