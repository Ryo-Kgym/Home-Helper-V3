import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { Button } from "@components/ui/v4/button";
import { notify } from "@components/ui/v4/notify/notify";
import { useModifyApp } from "@feature/app/modify/useModifyApp";

export const UpdateAppButton = ({
  appId,
  appName,
  fields,
}: {
  appId: string;
  appName: string;
  fields: AppFieldValue;
}) => {
  const updatable =
    !!appName &&
    Object.values(fields).length > 0 &&
    Object.values(fields).every((field) => field.fieldName);

  const { modifyApp } = useModifyApp({ appId });

  const clickHandler = async () => {
    try {
      await modifyApp({ appName, fields });
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
