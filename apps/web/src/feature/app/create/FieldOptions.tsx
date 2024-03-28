import type {
  AddAppFieldValueOptions,
  AppFieldValue,
} from "@feature/app/create/app-field-value";
import { FieldOptionsLookupFactory } from "@feature/app/create/FieldOptionsLookupFactory";
import { FieldOptionsSelectBoxFactory } from "@feature/app/create/FieldOptionsSelectBoxFactory";

export const FieldOptions = (props: {
  appFieldValue: AppFieldValue[number];
  options: AddAppFieldValueOptions;
  setOptions: (options: AddAppFieldValueOptions) => void;
  disabled?: boolean;
}) => {
  if (props.appFieldValue.mode !== "add") return null;

  switch (props.appFieldValue.fieldKind) {
    case "selectBox":
      return (
        <FieldOptionsSelectBoxFactory
          options={props.appFieldValue.options}
          setOptions={props.setOptions}
          disabled={props.disabled}
        />
      );
    case "lookup":
      return (
        <FieldOptionsLookupFactory
          options={props.appFieldValue.options}
          setOptions={props.setOptions}
          disabled={props.disabled}
        />
      );
    default:
      return undefined;
  }
};
