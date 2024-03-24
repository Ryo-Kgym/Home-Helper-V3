import type { FieldOptionsFactoryProps } from "@feature/app/create/field-options-factory";
import type { FieldKind } from "@oneforall/domain/field/type";
import { FieldOptionsLookupFactory } from "@feature/app/create/FieldOptionsLookupFactory";
import { FieldOptionsSelectBoxFactory } from "@feature/app/create/FieldOptionsSelectBoxFactory";

export const FieldOptions = (
  props: {
    fieldKind: FieldKind;
  } & FieldOptionsFactoryProps,
) => {
  switch (props.fieldKind) {
    case "selectBox":
      return <FieldOptionsSelectBoxFactory {...props} />;
    case "lookup":
      return <FieldOptionsLookupFactory {...props} />;
    default:
      return undefined;
  }
};
