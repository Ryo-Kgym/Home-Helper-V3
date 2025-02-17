import { GetConditionSessionDocument } from "@v3/graphql/household/schema/query/v5/queryConditionSession.generated";

import { execQuery } from "../../database/server/execQuery";
import { sessionKeyBuilder } from "../sessionKeyBuilder";
import { findUser } from "./find-user";

export const findConditionSession = async (key: string) => {
  const { group } = await findUser();

  const { data } = await execQuery(GetConditionSessionDocument, {
    key: sessionKeyBuilder({ name: key, groupId: group.id }),
  });

  if (!data.conditionSession) {
    return {
      value: [],
      dataType: null,
    };
  }

  return {
    value: data.conditionSession.value as string[],
    dataType: data.conditionSession.dataType,
  };
};
