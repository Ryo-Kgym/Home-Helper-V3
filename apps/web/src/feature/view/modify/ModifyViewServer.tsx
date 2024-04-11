import { ModifyViewClient } from "@feature/view/modify/ModifyViewClient";

export const ModifyViewServer = ({ viewId }: { viewId: string }) => {
  return <ModifyViewClient viewId={viewId} />;
};
