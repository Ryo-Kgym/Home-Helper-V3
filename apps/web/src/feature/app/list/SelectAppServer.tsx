import { SelectAppClient } from "@feature/app/list/SelectAppClient";
import { findUser } from "@persistence/server/find-user";

export const SelectAppServer = async () => {
  const { group } = await findUser();

  return <SelectAppClient groupId={group.id} />;
};
