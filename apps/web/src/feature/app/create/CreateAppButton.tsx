import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { useRouter } from "next/navigation";
import { Button } from "@components/ui/v4/button";
import { notify } from "@components/ui/v4/notify/notify";
import { useCreateApp } from "@feature/app/create/useCreateApp";
import { paths } from "@routing/paths";

export const CreateAppButton = ({
  appName,
  fields,
}: {
  appName: string;
  fields: AppFieldValue;
}) => {
  const { push } = useRouter();
  const { createApp } = useCreateApp();

  const creatable =
    !!appName &&
    Object.values(fields).length > 0 &&
    Object.values(fields).every((field) => field.fieldName);

  return (
    <Button
      label="アプリ作成"
      clickHandler={async () => {
        try {
          const { appId } = await createApp({ appName, fields });
          notify("アプリを作成しました");

          push(paths.app.show({ id: appId }));
        } catch (e) {
          console.error(e);
        }
      }}
      disabled={!creatable}
      type={"create"}
    />
  );
};
