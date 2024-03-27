import type {
  AppFieldValue,
  AppFieldValueOptions,
} from "@feature/app/create/app-field-value";
import { FieldOptionsLookupFactory } from "@feature/app/create/FieldOptionsLookupFactory";
import { FieldOptionsSelectBoxFactory } from "@feature/app/create/FieldOptionsSelectBoxFactory";

export const FieldOptions = (props: {
  appFieldValue: AppFieldValue[number];
  options: AppFieldValueOptions;
  setOptions: (options: AppFieldValueOptions) => void;
  disabled: boolean;
}) => {
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
