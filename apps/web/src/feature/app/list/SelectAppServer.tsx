import { fetchAppList } from "@feature/app/list/fetch-app-list";
import { fetchViewList } from "@feature/app/list/fetch-view-list";
import { SelectAppClient } from "@feature/app/list/SelectAppClient";
import { findUser } from "@persistence/browser/server/find-user";

export const SelectAppServer = async () => {
  const { group } = await findUser();
  const { appList } = await fetchAppList({ groupId: group.id });
  const { viewList } = await fetchViewList({ groupId: group.id });

  return (
    <SelectAppClient groupId={group.id} appList={[...appList, ...viewList]} />
  );
};
