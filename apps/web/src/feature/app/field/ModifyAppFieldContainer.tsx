import type { AppFieldOptions } from "@feature/app/create/app-field-value";
import type { FieldKind } from "@oneforall/domain/field/type";
import { useEffect, useState } from "react";
import { modifyAppFieldValueSchema } from "@feature/app/create/app-field-value";
import { useSaveAppFieldValue } from "@feature/app/create/useAppFieldValueState";

import { AppFieldPresenter } from "./AppFieldPresenter";

export const ModifyAppFieldContainer = ({ index }: { index: number }) => {
  const [fieldName, setFieldName] = useState<string>("");
  const [fieldKind, setFieldKind] = useState<FieldKind>("text");
  const [options, setOptions] = useState<AppFieldOptions>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);

  const save = useSaveAppFieldValue();

  const parseResult = modifyAppFieldValueSchema.safeParse({
    fieldName,
    fieldKind,
    options,
    mode: "modify",
  });

  const saveHandler = () => {
    if (!parseResult.success) {
      return;
    }
    save(index, parseResult.data);
    setSaved(true);
  };

  useEffect(() => {
    setOptions({});
  }, [fieldKind]);

  return (
    <AppFieldPresenter
      saved={saved}
      fieldKind={fieldKind}
      setFieldKind={setFieldKind}
      fieldName={fieldName}
      setFieldName={setFieldName}
      options={options}
      setOptions={setOptions}
      isOpen={isOpen}
      settingOpenHandler={() => setIsOpen(true)}
      settingCloseHandler={() => setIsOpen(false)}
      parseResult={parseResult}
      saveHandler={saveHandler}
    />
  );
};
