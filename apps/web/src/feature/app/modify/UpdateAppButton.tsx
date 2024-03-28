import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { Button } from "@components/ui/v4/button";
import { notify } from "@components/ui/v4/notify/notify";
import { convertField } from "@feature/app/create/CreateAppButton";
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
    const newField = Object.fromEntries(
      Object.entries(fields).map(([key, value]) => convertField(key, value)),
    );

    try {
      await modifyApp({ appName, fields: newField });
      notify("アプリを作成しました");
    } catch (e) {
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
