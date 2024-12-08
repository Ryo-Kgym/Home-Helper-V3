import { Button } from "~/components/ui/v4/button";
import { notify } from "~/components/ui/v4/notify/notify";
import { useChangeToModifyMode, useGetViewApps, useModifyView } from "../hook";

/**
 * @package
 */
export const ModifyViewAppButton = ({ viewId }: { viewId: string }) => {
  const viewApps = useGetViewApps();
  const changeMode = useChangeToModifyMode();

  const { modifyView } = useModifyView({ viewId });

  const modifyHandler = async () => {
    try {
      const { viewAppId } = await modifyView(viewApps);
      changeMode(viewAppId);
      notify("ビューアプリを更新しました");
    } catch (e) {
      notify("ビューアプリの更新に失敗しました");
    }
  };

  return (
    <Button
      label={"ビューアプリ更新"}
      clickHandler={modifyHandler}
      type={"modify"}
    />
  );
};
