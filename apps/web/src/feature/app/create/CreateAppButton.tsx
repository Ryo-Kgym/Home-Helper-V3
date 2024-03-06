import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { Button } from "@components/ui/v4/button";
import { useCreateApp } from "@feature/app/create/useCreateApp";

export const CreateAppButton = ({
  appName,
  fields,
}: {
  appName: string;
  fields: AppFieldValue;
}) => {
  const creatable =
    !!appName &&
    Object.values(fields).length > 0 &&
    Object.values(fields).every((field) => field.fieldName);

  const { createApp } = useCreateApp();

  return (
    <Button
      label="アプリ作成"
      clickHandler={async () => {
        try {
          await createApp({ appName, fields });
        } catch (e) {
          console.error(e);
        }
      }}
      disabled={!creatable}
      type={"create"}
    />
  );
};
