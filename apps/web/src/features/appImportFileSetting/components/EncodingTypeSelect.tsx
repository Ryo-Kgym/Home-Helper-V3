import type { EncodingType } from "@oneforall/domain/schema/importFileSettingsSchema";

import { Select } from "../../../components/ui/select/v4";

export const EncodingTypeSelect = ({
  value,
  setValue,
}: {
  value: EncodingType;
  setValue: (value: EncodingType) => void;
}) => {
  return (
    <Select
      data={Object.keys(encodingArray).map((k) => ({
        value: k as EncodingType,
        label: k,
      }))}
      label={""}
      value={value}
      setValue={setValue}
    />
  );
};

const encodingArray: Record<EncodingType, void> = {
  array: undefined,
};
