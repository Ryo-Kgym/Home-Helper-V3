import type { FieldOptionsFactoryProps } from "@feature/app/create/field-options-factory";
import { useEffect, useState } from "react";
import { Select } from "@components/ui/v4/select";
import { useFindUser } from "@persistence/browser/client/useFindUser";
import { useGetAppFieldListQuery } from "@v3/graphql/public";

export const FieldOptionsLookupFactory = ({
  options,
  setOptions,
  disabled,
}: FieldOptionsFactoryProps) => {
  const [appId, setAppId] = useState<string>("");
  const [selectFieldId, setSelectFieldId] = useState<string>("");

  const { group } = useFindUser();
  const [{ data }] = useGetAppFieldListQuery({
    variables: { groupId: group.id },
  });

  useEffect(() => {
    setAppId(options.appId ?? "");
    setSelectFieldId(options.selectFieldId ?? "");
  }, [data]);

  return (
    <>
      <Select
        label={"参照先のアプリ名"}
        value={appId}
        setValue={setAppId}
        data={
          data?.group?.apps.map((a) => ({
            label: a.name,
            value: a.id,
          })) ?? []
        }
        required
        disabled={disabled}
        placeholder={"参照先のアプリ名を選択してください"}
      />
      <Select
        label={"選択したいフィールド名"}
        value={selectFieldId}
        setValue={setSelectFieldId}
        data={
          data?.group?.apps
            .find((a) => a.id === appId)
            ?.fields.map((f) => ({
              label: f.name,
              value: f.id,
            })) ?? []
        }
        required
        disabled={disabled}
        placeholder={"選択したいフィールド名を選択してください"}
      />
      <Select
        label={"保存したいフィールド名"}
        value={options.saveFieldId ?? ""}
        setValue={(v) => {
          setOptions({
            ...options,
            ["appId" as never]: appId,
            ["selectFieldId" as never]: selectFieldId,
            ["saveFieldId" as never]: v,
          });
        }}
        data={
          data?.group?.apps
            .find((a) => a.id === appId)
            ?.fields.map((f) => ({
              label: f.name,
              value: f.id,
            })) ?? []
        }
        required
        disabled={disabled}
        placeholder={"保存したいフィールド名を選択してください"}
      />
    </>
  );
};
