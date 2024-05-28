import { Field } from "@oneforall/domain/schema/appSchema";
import { convertValueDate } from "@pageComponents/appRecordImport/client/convertRecords/convertValueDate";

import { convertValueSelectbox } from "./convertValueSelectbox";

/**
 * @package
 */
export const switchValueConverter = (
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
    case "numeric":
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
