"use server";

import { DeleteTagDocument } from "@v3/graphql/household/schema/mutation/v5/mutateTag.generated";

import { execMutation } from "../../../persistence/database/server/execMutation";
import { Tag } from "../types/tag";

export const deleteTag = async (tag: Tag) => {
  const { data } = await execMutation(DeleteTagDocument, {
    id: tag.id,
  });

  if (!data.deleteHouseholdTagByPk) {
    throw new Error("Failed to delete tag");
  }
};
