import type {
  AppFieldOptions,
  SelectBoxOptions,
} from "@feature/app/create/app-field-value";
import type { FieldKind } from "@oneforall/domain/field/type";
import { FieldOptionsSelectBox } from "@feature/app/create/FieldOptionsSelectBox";

export const FieldOptionsInput = ({
  fieldKind,
  value,
  setValue,
}: {
  fieldKind: FieldKind;
  value: AppFieldOptions;
  setValue: (options: AppFieldOptions) => void;
}) => {
  switch (fieldKind) {
    case "selectBox": {
      return (
        <FieldOptionsSelectBox
          options={value as SelectBoxOptions} // TODO Type cast
          setOptions={setValue}
        />
      );
    }
    case "lookup": {
      return <div></div>;
    }
  }

  return <div>設定なし</div>;
};
