import { Button } from "@components/ui/v4/button";
import { notify } from "@components/ui/v4/notify/notify";
import {
  useGetAppFieldValue,
  useInitializeAppFieldValue,
} from "@feature/app/create/useAppFieldValueState";
import { useModifyApp } from "@feature/app/modify/useModifyApp";

export const UpdateAppButton = ({
  appId,
  appName,
}: {
  appId: string;
  appName: string;
}) => {
  const { modifyApp } = useModifyApp({ appId });
  const initialize = useInitializeAppFieldValue();
  const { fields } = useGetAppFieldValue();

  const updatable =
    !!appName &&
    Object.values(fields).length > 0 &&
    Object.values(fields).every((field) => field.fieldName);

  const clickHandler = async () => {
    try {
      await modifyApp({ appName, fields });
      initialize(fields);
      notify("アプリを更新しました");
    } catch (e) {
      notify("アプリの更新に失敗しました");
      console.error(e);
    }
  };

  return (
    <Button
      label="アプリ更新"
      clickHandler={clickHandler}
      disabled={!updatable}
      type={"modify"}
    />
  );
};
