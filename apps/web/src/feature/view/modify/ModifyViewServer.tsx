import { convertToAppListData } from "@feature/view/modify/function/convertToAppListData";
import { convertToInputViewApps } from "@feature/view/modify/function/convertToInputViewApps";
import { ModifyViewClient } from "@feature/view/modify/ModifyViewClient";
import { convertToView } from "@features/view/server/convertToView";
import { findUser } from "@persistence/browser/server/find-user";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import {
  GetAppFieldListDocument,
  GetViewDocument,
} from "@v3/graphql/public/type";

export const ModifyViewServer = async ({ viewId }: { viewId: string }) => {
  const { group } = await findUser();

  const { data } = await fetchQuery(GetAppFieldListDocument, {
    groupId: group.id,
  });

  const appListData = convertToAppListData(data);

  const { data: viewData } = await fetchQuery(GetViewDocument, { viewId });
  const view = convertToView(viewData);
  const inputViewApps = convertToInputViewApps(viewData);

  return (
    <ModifyViewClient
      viewId={viewId}
      appListData={appListData}
      viewFields={view.fields}
      inputViewApps={inputViewApps}
    />
  );
};
