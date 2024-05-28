import { useEffect, useState } from "react";
import { useSaveAppFieldValue } from "@feature/app/create/useAppFieldValueState";
import { isEquals } from "@function/isEquals";
import { FieldKind } from "@oneforall/domain/field/type";
import {
  AppFieldOptions,
  AppFieldValue,
  modifyAppFieldValueSchema,
} from "@oneforall/domain/schema/appFieldValue";

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
  const [saved, setSaved] = useState<boolean>(true);
  const [mode, setMode] = useState<AppFieldValue[number]["mode"]>("modify");

  const save = useSaveAppFieldValue();

  useEffect(() => {
    if (currentField.fieldKind !== fieldKind) {
      setOptions({});
    }
  }, [currentField.fieldKind, fieldKind]);

  useEffect(() => {
    setSaved(currentField.fieldName === fieldName);
  }, [currentField.fieldName, fieldName]);

  useEffect(() => {
    setSaved(isEquals(currentField.options, options));
  }, [currentField.options, options]);

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

  const deleteHandler = () => {
    const againstMode = mode === "delete" ? "modify" : "delete";

    save(index, {
      ...currentField,
      mode: againstMode,
    });
    setMode(againstMode);
  };

  return (
    <AppFieldPresenter
      mode={mode}
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
      deleteHandler={deleteHandler}
    />
  );
};
