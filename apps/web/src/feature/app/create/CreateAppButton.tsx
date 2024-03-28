import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { useRouter } from "next/navigation";
import { Button } from "@components/ui/v4/button";
import { notify } from "@components/ui/v4/notify/notify";
import { useCreateApp } from "@feature/app/create/useCreateApp";
import { generateId } from "@feature/app/function/generate-id";
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

  const clickHandler = async () => {
    const newField = Object.fromEntries(
      Object.entries(fields).map(([key, value]) => convertField(key, value)),
    );

    try {
      const { appId } = await createApp({ appName, fields: newField });
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

export const convertField = (key: string, value: AppFieldValue[number]) => {
  if (value.mode === "add") {
    if (value.fieldKind === "selectBox") {
      const options = {
        selector: value.options.selector.split(",").map((s, index) => ({
          label: s,
          value: generateId(index),
        })),
      };
      return [key, { ...value, options }];
    }
  }
  return [key, value];
};
