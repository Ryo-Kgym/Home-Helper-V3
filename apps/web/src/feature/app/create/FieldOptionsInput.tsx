import type {
  AppFieldOptions,
  SelectBoxOptions,
} from "@feature/app/create/app-field-value";
import type { FieldKind } from "@oneforall/domain/field/type";
import { FieldOptionsSelectBox } from "@feature/app/create/FieldOptionsSelectBox";

export const FieldOptionsInput = ({
  fieldKind,
  options,
  setOptions,
}: {
  fieldKind: FieldKind;
  options: AppFieldOptions;
  setOptions: (options: AppFieldOptions) => void;
}) => {
  switch (fieldKind) {
    case "selectBox": {
      return (
        <FieldOptionsSelectBox
          options={options as SelectBoxOptions} // TODO Type cast
          setOptions={setOptions}
        />
      );
    }
    case "lookup": {
      return <div></div>;
    }
  }

  return <div>設定なし</div>;
};
