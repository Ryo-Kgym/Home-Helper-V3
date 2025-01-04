"use server";

import { GetTagListDocument } from "@v3/graphql/household/schema/query/v5/queryTag.generated";

import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";

export const fetchTags = async () => {
  const { group } = await findUser();
  const { data } = await execQuery(GetTagListDocument, {
    groupId: group.id,
  });

  return {
    data:
      data.group?.tags.map((tag) => ({
        label: tag.name,
        value: tag.id,
        colorCode: tag.colorCode,
      })) ?? [],
  };
};
