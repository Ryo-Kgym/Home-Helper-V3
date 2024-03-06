import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { Button } from "@components/ui/v4/button";

export const CreateAppButton = ({
  appName,
  value,
}: {
  appName: string;
  value: AppFieldValue;
}) => {
  const creatable =
    !!appName &&
    Object.values(value).length > 0 &&
    Object.values(value).every((field) => field.fieldName);

  return (
    <Button
      label="アプリ作成"
      clickHandler={() => {
        console.log({
          app: {
            name: appName,
          },
          fields: value,
        });
      }}
      disabled={!creatable}
      type={"create"}
    />
  );
};
