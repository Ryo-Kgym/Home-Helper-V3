import { findUser } from "~/persistence/browser/server/find-user";
import { fetchAppList } from "./fetch-app-list";
import { fetchViewList } from "./fetch-view-list";
import { SelectAppClient } from "./SelectAppClient";

export const SelectAppServer = async () => {
  const { group } = await findUser();
  const { appList } = await fetchAppList({ groupId: group.id });
  const { viewList } = await fetchViewList({ groupId: group.id });

  return (
    <SelectAppClient groupId={group.id} appList={[...appList, ...viewList]} />
  );
};
