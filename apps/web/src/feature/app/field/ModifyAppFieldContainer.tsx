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

  useEffect(() => {
    if (currentField.fieldKind !== fieldKind) {
      setOptions({});
    }
  }, [fieldKind]);

  if (currentField.mode === "add") {
    throw new Error("mode is add");
  }

  const parseResult = modifyAppFieldValueSchema.safeParse({
    id: currentField.id,
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

  return (
    <AppFieldPresenter
      mode={"modify"}
      saved={saved}
      fieldKind={{
        value: fieldKind,
        setValue: setFieldKind,
        disabled: true,
      }}
      fieldName={{
        value: fieldName,
        setValue: setFieldName,
      }}
      options={{
        value: options,
        setValue: setOptions,
      }}
      saveDisabled={!parseResult.success}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      saveHandler={saveHandler}
    />
  );
};
