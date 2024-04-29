import type { AppFieldOptions } from "@feature/app/create/appFieldValue";
import type { FieldKind } from "@oneforall/domain/field/type";
import { useEffect, useState } from "react";
import { addAppFieldValueSchema } from "@feature/app/create/appFieldValue";
import {
  useRemoveAppFieldValue,
  useSaveAppFieldValue,
} from "@feature/app/create/useAppFieldValueState";

import { AppFieldPresenter } from "./AppFieldPresenter";

export const AddAppFieldContainer = ({ index }: { index: number }) => {
  const [fieldName, setFieldName] = useState<string>("");
  const [fieldKind, setFieldKind] = useState<FieldKind>("text");
  const [options, setOptions] = useState<AppFieldOptions>({});

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);

  const save = useSaveAppFieldValue();
  const remove = useRemoveAppFieldValue();

  const parseResult = addAppFieldValueSchema.safeParse({
    fieldName,
    fieldKind,
    options,
    mode: "add",
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

  const deleteHandler = () => {
    remove(index);
  };

  return (
    <AppFieldPresenter
      mode={"add"}
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
      saveDisabled={!parseResult.success}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      saveHandler={saveHandler}
      deleteHandler={deleteHandler}
    />
  );
};
