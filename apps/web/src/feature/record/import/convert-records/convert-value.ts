import type { Field } from "@feature/app/schema";

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
      return {
        originalValue: undefined,
        value: originalValue,
        errorMessage: undefined,
      };
    case "selectBox": {
      const options = field.options;
      const foundSelector = options.selector.find(
        ({ label }) => label === originalValue,
      );

      const errorMessage = foundSelector ? undefined : "選択肢が見つかりません";

      return {
        originalValue,
        value: foundSelector?.value ?? originalValue,
        errorMessage,
      };
    }
    case "lookup": {
      return {
        originalValue: undefined,
        value: originalValue,
        errorMessage: undefined,
      };
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
