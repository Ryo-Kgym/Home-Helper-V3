import type { FieldOptionsFactoryProps } from "@feature/app/create/field-options-factory";
import type { FieldKind } from "@oneforall/domain/field/type";
import { FieldOptionsSelectBoxFactory } from "@feature/app/create/FieldOptionsSelectBoxFactory";

export const FieldOptions = (
  props: {
    fieldKind: FieldKind;
  } & FieldOptionsFactoryProps,
) => {
  switch (props.fieldKind) {
    case "selectBox":
      return <FieldOptionsSelectBoxFactory {...props} />;
    default:
      return undefined;
  }
};
