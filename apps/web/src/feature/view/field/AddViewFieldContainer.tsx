import { useEffect, useState } from "react";
import { useRemoveViewFieldValue } from "@feature/view/create/useRemoveViewFieldValue";
import { useSaveViewFieldValue } from "@feature/view/create/useSaveViewFieldValue";
import {
  addViewFieldValueSchema,
  ViewFieldOptions,
} from "@feature/view/create/view-field-value";
import type { FieldKind } from "@oneforall/domain/field/type";

import { ViewFieldPresenter } from "./ViewFieldPresenter";

export const AddViewFieldContainer = ({ index }: { index: number }) => {
  const [fieldName, setFieldName] = useState<string>("");
  const [fieldKind, setFieldKind] = useState<FieldKind>("text");
  const [options, setOptions] = useState<ViewFieldOptions>({});

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);

  const save = useSaveViewFieldValue();
  const remove = useRemoveViewFieldValue();

  const parseResult = addViewFieldValueSchema.safeParse({
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
    <ViewFieldPresenter
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
