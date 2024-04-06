import type { Field } from "@feature/app/schema";
import { convertValueDate } from "@feature/record/import/convert-records/convert-value-date";

import { convertValueSelectBox } from "./convert-value-selectbox";

export const convertValue = (
  originalValue: string,
  field: Field,
): {
  originalValue: string;
  value: string | undefined;
  errorMessage: string | undefined;
} => {
  switch (field.fieldKind) {
    case "text":
    case "multipleText":
    case "lookup":
      return {
        originalValue,
        value: originalValue,
        errorMessage: undefined,
      };
    case "selectBox": {
      return convertValueSelectBox(originalValue, field.options);
    }
    case "date": {
      return convertValueDate(originalValue);
    }
  }
};
