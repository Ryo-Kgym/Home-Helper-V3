import type { AppFieldOptions } from "@feature/app/create/app-field-value";
import type { FieldKind } from "@oneforall/domain/field/type";
import { selectBoxOptionsSchema } from "@feature/app/create/app-field-value";
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
      const parsed = selectBoxOptionsSchema.safeParse(options);
      if (!parsed.success) {
        return null;
      }
      return (
        <FieldOptionsSelectBox options={parsed.data} setOptions={setOptions} />
      );
    }
    case "lookup": {
      return <div></div>;
    }
  }

  return <div>設定なし</div>;
};
