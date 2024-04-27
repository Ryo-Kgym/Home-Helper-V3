import { convertValueDate } from "@feature/app/recordImport/convertRecords/convertValueDate";
import { Field } from "@oneforall/domain/schema";

import { convertValueSelectbox } from "./convertValueSelectbox";

/**
 * @package
 */
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
      return convertValueSelectbox(originalValue, field.options);
    }
    case "date": {
      return convertValueDate(originalValue);
    }
  }
};
