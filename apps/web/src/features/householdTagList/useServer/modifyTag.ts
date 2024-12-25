"use server";

import { ModifyTagDocument } from "@v3/graphql/household/type";

import { execMutation } from "../../../persistence/database/server/execMutation";
import { Tag } from "../types/tag";

export const modifyTag = async (tag: Tag) => {
  const { data } = await execMutation(ModifyTagDocument, {
    id: tag.id,
    form: {
      name: tag.name,
      colorCode: tag.colorCode,
    },
  });

  if (!data.updateHouseholdTagByPk) {
    throw new Error("Failed to update tag");
  }
};
