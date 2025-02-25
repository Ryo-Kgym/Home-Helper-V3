import { GetTagListDocument } from "@v3/graphql/household/schema/query/v5/queryTag.generated";

import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";
import { TagListClient } from "./TagListClient";

export const TagListServer = async () => {
  const { group } = await findUser();

  const { data } = await execQuery(GetTagListDocument, { groupId: group.id });
  const tags =
    data.group?.tags.map((tag) => ({
      id: tag.id,
      name: tag.name,
      colorCode: tag.colorCode,
      displayOrder: tag.displayOrder,
      count: tag.detailTagsAggregate.aggregate?.count ?? 0,
    })) ?? [];

  return <TagListClient tags={tags} />;
};
