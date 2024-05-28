import { convertToAppListData } from "@feature/view/modify/function/convertToAppListData";
import { convertToInputViewApps } from "@feature/view/modify/function/convertToInputViewApps";
import { ModifyViewClient } from "@feature/view/modify/ModifyViewClient";
import { findUser } from "@persistence/browser/server/find-user";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { parseToView } from "@v3/graphql/public/convert/parseToView";
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
  const view = parseToView(viewData.view);
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
