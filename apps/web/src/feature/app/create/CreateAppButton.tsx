import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/v4/button";
import { notify } from "~/components/ui/v4/notify/notify";
import { paths } from "~/routing/paths";
import { useGetAppFieldValue } from "./useAppFieldValueState";
import { useCreateApp } from "./useCreateApp";

export const CreateAppButton = ({ appName }: { appName: string }) => {
  const { push } = useRouter();
  const { createApp } = useCreateApp();
  const { fields } = useGetAppFieldValue();

  const creatable =
    !!appName &&
    Object.values(fields).length > 0 &&
    Object.values(fields).every((field) => field.fieldName);

  const clickHandler = async () => {
    try {
      const { appId } = await createApp({ appName, fields });
      notify("アプリを作成しました");

      push(paths.app.show({ id: appId }));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Button
      label="アプリ作成"
      clickHandler={clickHandler}
      disabled={!creatable}
      type={"create"}
    />
  );
};
