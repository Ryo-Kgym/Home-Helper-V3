import { useState } from "react";
import { Button } from "@components/ui/v4/button";
import { Select } from "@components/ui/v4/select";
import { lookupOptionsSchema } from "@feature/app/create/appFieldValue";
import { OptionsState } from "@feature/app/create/FieldOptionsInput";
import { FieldOptionsLookup } from "@oneforall/domain/schema/recordSchema";
import { useFindUser } from "@persistence/browser/client/useFindUser";
import { useGetAppFieldListQuery } from "@v3/graphql/public";

export const FieldOptionsLookUpInputFactory = ({
  value,
  setValue,
}: OptionsState) => {
  const parsed = lookupOptionsSchema.safeParse(value);
  return (
    <FieldOptionsLookUpInput
      options={
        parsed.success
          ? parsed.data
          : {
              appId: "",
              selectFieldId: "",
              saveFieldId: "",
            }
      }
      setOptions={setValue}
    />
  );
};

const FieldOptionsLookUpInput = ({
  options,
  setOptions,
}: {
  options: FieldOptionsLookup;
  setOptions: (options: FieldOptionsLookup) => void;
}) => {
  const [appId, setAppId] = useState<string>(options.appId);
  const [selectFieldId, setSelectFieldId] = useState<string>(
    options.selectFieldId,
  );
  const [saveFieldId, setSaveFieldId] = useState<string>(options.saveFieldId);

  const { group } = useFindUser();
  const [{ data }] = useGetAppFieldListQuery({
    variables: {
      groupId: group.id,
    },
    pause: !group.id,
  });

  const appListData =
    data?.group?.apps.map((a) => ({
      label: a.name,
      value: a.id,
    })) ?? [];

  const fieldListData =
    data?.group?.apps
      .find((a) => a.id === appId)
      ?.fields.map((f) => ({
        label: f.name,
        value: f.id,
      })) ?? [];

  const buttonDisabled = !appId || !selectFieldId || !saveFieldId;

  const saveHandler = () => {
    setOptions({
      appId,
      selectFieldId,
      saveFieldId,
    });
  };

  return (
    <>
      <Select
        data={appListData}
        label={"アプリ"}
        value={appId}
        setValue={setAppId}
      />
      <Select
        data={fieldListData}
        label={"取得フィールド"}
        value={selectFieldId}
        setValue={setSelectFieldId}
      />
      <Select
        data={fieldListData}
        label={"保存フィールド"}
        value={saveFieldId}
        setValue={setSaveFieldId}
      />
      <Button
        label={"保存"}
        clickHandler={saveHandler}
        disabled={buttonDisabled}
        type={"save"}
      />
    </>
  );
};
