"use server";

import { ModifyTagDocument } from "@v3/graphql/household/schema/mutation/v5/mutateTag.generated";

import { execMutation } from "../../../persistence/database/server/execMutation";
import { Tag } from "../types/tag";

export const modifyTag = async (tag: Tag) => {
  const { data } = await execMutation(ModifyTagDocument, {
    id: tag.id,
    form: {
      name: tag.name,
      colorCode: tag.colorCode,
      displayOrder: tag.displayOrder,
    },
  });

  if (!data.updateHouseholdTagByPk) {
    throw new Error("Failed to update tag");
  }
};
