"use server";

import { AddTagDocument } from "@v3/graphql/household/schema/mutation/v5/mutateTag.generated";

import { generateId } from "../../../function/generateId";
import { findUser } from "../../../persistence/browser/server/find-user";
import { execMutation } from "../../../persistence/database/server/execMutation";
import type { Tag } from "../types/tag";

export const addTag = async (tag: Omit<Tag, "id">) => {
  const { group } = await findUser();

  const { data } = await execMutation(AddTagDocument, {
    form: {
      id: generateId(),
      name: tag.name,
      colorCode: tag.colorCode,
      displayOrder: tag.displayOrder,
      groupId: group.id,
    },
  });

  if (!data.insertHouseholdTagOne) {
    throw new Error("Failed to update tag");
  }
};
