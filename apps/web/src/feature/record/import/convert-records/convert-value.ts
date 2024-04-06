import type { Field } from "@feature/app/schema";

import { convertValueSelectBox } from "./convert-value-selectbox";

export const convertValue = (
  originalValue: string,
  field: Field,
): {
  originalValue: string | undefined;
  value: string;
  errorMessage: string | undefined;
} => {
  switch (field.fieldKind) {
    case "text":
    case "multipleText":
    case "lookup":
      return {
        originalValue: undefined,
        value: originalValue,
        errorMessage: undefined,
      };
    case "selectBox": {
      return convertValueSelectBox(originalValue, field.options);
    }
    case "date": {
      return {
        originalValue: undefined,
        value: originalValue,
        errorMessage: undefined,
      };
    }
  }
};
