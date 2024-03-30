import type { AppFieldOptions } from "@feature/app/create/app-field-value";
import type { FieldKind } from "@oneforall/domain/field/type";
import type { ComponentProps } from "react";
import {
  lookupOptionsSchema,
  selectBoxOptionsSchema,
} from "@feature/app/create/app-field-value";
import { FieldOptionsLookUp } from "@feature/app/create/FieldOptionsLookUp";
import { FieldOptionsSelectBox } from "@feature/app/create/FieldOptionsSelectBox";

export const FieldOptionsInput = (props: {
  fieldKind: FieldKind;
  value: AppFieldOptions;
  setValue: (options: AppFieldOptions) => void;
}) => (
  <div className={"space-y-5"}>
    <FieldOptionsSWitcher {...props} />
  </div>
);

const FieldOptionsSWitcher = ({
  fieldKind,
  value,
  setValue,
}: ComponentProps<typeof FieldOptionsInput>) => {
  switch (fieldKind) {
    case "selectBox": {
      const parsed = selectBoxOptionsSchema.safeParse(value);
      return (
        <FieldOptionsSelectBox
          options={
            parsed.success
              ? parsed.data
              : {
                  selector: [],
                }
          }
          setOptions={setValue}
        />
      );
    }
    case "lookup": {
      const parsed = lookupOptionsSchema.safeParse(value);
      return (
        <FieldOptionsLookUp
          options={
            parsed.success
              ? parsed.data
              : {
                  appId: "",
                  selectFieldId: "",
                  saveFieldId: "",
                }
          }
          setOptions={setValue}
        />
      );
    }
  }

  return <div>設定なし</div>;
};
