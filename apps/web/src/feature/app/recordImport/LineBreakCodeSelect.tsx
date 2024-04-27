import { Select } from "@components/ui/v4/select";

import type { LineBreakCode } from "@oneforall/domain/schema";

export const LineBreakCodeSelect = ({
  value,
  setValue,
}: {
  value: LineBreakCode;
  setValue: (value: LineBreakCode) => void;
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

const lineBreakCodeArray: Record<
  string,
  { value: LineBreakCode; label: string }
> = {
  lf: {
    value: "\n",
    label: "LF ( ¥n )",
  },
  crlf: {
    value: "\r\n",
    label: "CRLF ( ¥r¥n )",
  },
};
