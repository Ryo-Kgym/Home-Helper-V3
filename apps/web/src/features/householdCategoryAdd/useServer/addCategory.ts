"use server";

import { CreateCategoryDocument } from "@v3/graphql/household/schema/mutation/create/CreateCategory.generated";

import { generateId } from "../../../function/generateId";
import { findUser } from "../../../persistence/browser/server/find-user";
import { execMutation } from "../../../persistence/database/server/execMutation";

export const addCategory = async (category: {
  categoryName: string;
  genreId: string;
  validFlag: boolean;
  displayOrder: number;
}) => {
  const { group } = await findUser();

  await execMutation(CreateCategoryDocument, {
    categoryId: generateId(),
    categoryName: category.categoryName,
    genreId: category.genreId,
    validFlag: category.validFlag,
    displayOrder: category.displayOrder,
    groupId: group.id,
  });
};
