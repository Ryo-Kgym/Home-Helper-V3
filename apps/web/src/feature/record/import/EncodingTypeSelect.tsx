import { Select } from "@components/ui/v4/select";

import type { EncodingType } from "@feature/app/schema";

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
