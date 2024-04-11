import { FieldOptionsSelectBox } from "@oneforall/domain/schema";

export const convertValueSelectBox = (
  originalValue: string,
  options: FieldOptionsSelectBox,
) => {
  const foundSelector = options.selector.find(
    ({ label }) => label === originalValue,
  );

  const errorMessage = foundSelector ? undefined : "選択肢が見つかりません";

  return {
    originalValue,
    value: foundSelector?.value ?? originalValue,
    errorMessage,
  };
};
