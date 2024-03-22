import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { Button } from "@components/ui/v4/button";
import { notify } from "@components/ui/v4/notify/notify";
import { useModifyApp } from "@feature/app/modify/useModifyApp";

export const ModifyAppButton = ({
  appId,
  appName,
  fields,
}: {
  appId: string;
  appName: string;
  fields: AppFieldValue;
}) => {
  const creatable =
    !!appName &&
    Object.values(fields).length > 0 &&
    Object.values(fields).every((field) => field.fieldName);

  const { modifyApp } = useModifyApp({ appId });

  return (
    <Button
      label="アプリ更新"
      clickHandler={async () => {
        try {
          await modifyApp({ appName, fields });
          notify("アプリを更新しました");
        } catch (e) {
          console.error(e);
        }
      }}
      disabled={!creatable}
      type={"modify"}
    />
  );
};
