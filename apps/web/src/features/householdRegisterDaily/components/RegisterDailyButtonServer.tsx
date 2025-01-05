import { GetDetailMasterDocument } from "@v3/graphql/household/schema/query/v5/queryDetailMaster.generated";

import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";
import { RegisterDailyButton } from "./RegisterDailyButton";

export const RegisterDailyButtonServer = async () => {
  const { group } = await findUser();

  const { data } = await execQuery(GetDetailMasterDocument, {
    groupId: group.id,
  });
  console.log(data);

  return <RegisterDailyButton />;
};
