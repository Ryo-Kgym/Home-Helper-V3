import { Button } from "@components/ui/v4/button";
import { useModifyView } from "@feature/view/modify/useModifyView";
import { useGetViewApps } from "@feature/view/modify/useZustandViewAppsStore";

export const ModifyViewAppButton = ({ viewId }: { viewId: string }) => {
  const viewApps = useGetViewApps();

  const { modifyView } = useModifyView({ viewId });

  return (
    <Button
      label={"ビューアプリ更新"}
      clickHandler={() => undefined}
      type={"modify"}
    />
  );
};
