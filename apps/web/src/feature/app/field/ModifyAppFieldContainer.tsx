import type {
  AppFieldOptions,
  AppFieldValue,
} from "@feature/app/create/app-field-value";
import type { FieldKind } from "@oneforall/domain/field/type";
import { useEffect, useState } from "react";
import { modifyAppFieldValueSchema } from "@feature/app/create/app-field-value";
import { useSaveAppFieldValue } from "@feature/app/create/useAppFieldValueState";

import { AppFieldPresenter } from "./AppFieldPresenter";

export const ModifyAppFieldContainer = ({
  index,
  currentField,
}: {
  index: number;
  currentField: AppFieldValue[number];
}) => {
  const [fieldName, setFieldName] = useState<string>(currentField.fieldName);
  const [fieldKind, setFieldKind] = useState<FieldKind>(currentField.fieldKind);
  const [options, setOptions] = useState<AppFieldOptions>(currentField.options);

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
    if (currentField.fieldKind !== fieldKind) {
      setOptions({});
    }
  }, [fieldKind]);

  return (
    <AppFieldPresenter
      saved={saved}
      fieldKind={{
        value: fieldKind,
        setValue: setFieldKind,
      }}
      fieldName={{
        value: fieldName,
        setValue: setFieldName,
      }}
      options={{
        value: options,
        setValue: setOptions,
      }}
      isOpen={isOpen}
      settingOpenHandler={() => setIsOpen(true)}
      settingCloseHandler={() => setIsOpen(false)}
      parseResult={parseResult}
      saveHandler={saveHandler}
    />
  );
};
