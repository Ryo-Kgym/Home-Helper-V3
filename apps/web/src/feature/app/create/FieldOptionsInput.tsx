import type { AppFieldOptions } from "@feature/app/create/app-field-value";
import type { FieldKind } from "@oneforall/domain/field/type";

export const FieldOptionsInput = ({
  fieldKind,
}: {
  fieldKind: FieldKind;
  options: AppFieldOptions;
  setOptions: (options: AppFieldOptions) => void;
}) => {
  switch (fieldKind) {
    case "selectBox": {
      return <div></div>;
    }
    case "lookup": {
      return <div></div>;
    }
  }

  return null;
};
