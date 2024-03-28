import type {
  AppFieldValue,
  ModifyAppFieldValueOptions,
} from "@feature/app/create/app-field-value";
import { FieldOptionsLookupFactory } from "@feature/app/create/FieldOptionsLookupFactory";
import { ModifyFieldOptionsSelectBoxFactory } from "@feature/app/modify/ModifyFieldOptionsSelectBoxFactory";

export const ModifyFieldOptions = (props: {
  appFieldValue: AppFieldValue[number];
  options: ModifyAppFieldValueOptions;
  setOptions: (options: ModifyAppFieldValueOptions) => void;
  disabled?: boolean;
}) => {
  if (props.appFieldValue.mode === "add") return null;

  switch (props.appFieldValue.fieldKind) {
    case "selectBox":
      return (
        <ModifyFieldOptionsSelectBoxFactory
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
