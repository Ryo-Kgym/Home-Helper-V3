import type { Splitter } from "@oneforall/domain/schema/importFileSettingsSchema";

import { Select } from "../../../components/ui/select/v4";

export const SplitterSelect = ({
  value,
  setValue,
}: {
  value: Splitter;
  setValue: (value: Splitter) => void;
}) => {
  return (
    <Select
      data={Object.values(lineBreakCodeArray).map((v) => ({
        value: v.value,
        label: v.label,
      }))}
      label={""}
      value={value}
      setValue={setValue}
    />
  );
};

const lineBreakCodeArray: Record<string, { value: Splitter; label: string }> = {
  comma: {
    value: ",",
    label: "カンマ(,)",
  },
  semiColon: {
    value: ";",
    label: "セミコロン(;)",
  },
  tab: { value: "\t", label: "タブ( tab )" },
};
