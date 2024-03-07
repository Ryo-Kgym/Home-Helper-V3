import { SelectAppClient } from "@feature/app/list/SelectAppClient";
import { findUser } from "@persistence/browser/server/find-user";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { GetApplicationsDocument } from "@v3/graphql/public/type";

export const SelectAppServer = async () => {
  const { group } = await findUser();
  const { data } = await fetchQuery(GetApplicationsDocument, {
    groupId: group.id,
  });
  return <SelectAppClient data={data} />;
};
