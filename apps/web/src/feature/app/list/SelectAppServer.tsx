import { SelectAppClient } from "@feature/app/list/SelectAppClient";
import { fetchQuery } from "@persistence/database/fetchQuery";
import { findUser } from "@persistence/server/find-user";
import { GetApplicationsDocument } from "@v3/graphql/public/type";

export const SelectAppServer = async () => {
  const { group } = await findUser();
  const { data } = await fetchQuery(GetApplicationsDocument, {
    groupId: group.id,
  });
  return <SelectAppClient data={data} />;
};
