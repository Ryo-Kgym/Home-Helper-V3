import type { AppFieldOptions } from "@feature/app/create/app-field-value";
import type { FieldKind } from "@oneforall/domain/field/type";
import { useEffect, useState } from "react";
import { addAppFieldValueSchema } from "@feature/app/create/app-field-value";
import { useSaveAppFieldValue } from "@feature/app/create/useAppFieldValueState";
import { fieldKindArray } from "@oneforall/domain/field/type";

import { AppFieldPresenter } from "./AppFieldPresenter";

export const AddAppFieldContainer = ({ index }: { index: number }) => {
  const [fieldName, setFieldName] = useState<string>("");
  const [fieldKind, setFieldKind] = useState<FieldKind>("text");
  const [options, setOptions] = useState<AppFieldOptions>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);

  const save = useSaveAppFieldValue();

  const data = Object.values(fieldKindArray).map((f) => ({
    label: f.description,
    value: f.fieldKind,
  }));

  const parseResult = addAppFieldValueSchema.safeParse({
    fieldName,
    fieldKind,
    options,
    mode: "add",
  });

  useEffect(() => {
    setOptions({});
  }, [fieldKind]);

  return (
    <AppFieldPresenter
      index={index}
      saved={saved}
      setSaved={setSaved}
      fieldKind={fieldKind}
      setFieldKind={setFieldKind}
      data={data}
      fieldName={fieldName}
      setFieldName={setFieldName}
      options={options}
      setOptions={setOptions}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      parseResult={parseResult}
      save={save}
    />
  );
};
