import type { LineBreakCode } from "@feature/app/schema";
import { Select } from "@components/ui/v4/select";

export const LineBreakCodeSelect = ({
  value,
  setValue,
}: {
  value: LineBreakCode;
  setValue: (value: LineBreakCode) => void;
}) => {
  return (
    <Select
      data={Object.entries(lineBreakCodeArray).map(([k, v]) => ({
        value: v,
        label: `${k}`,
      }))}
      label={""}
      value={value}
      setValue={setValue}
    />
  );
};

const lineBreakCodeArray: Record<string, LineBreakCode> = {
  LF: "\n",
  CRLF: "\r\n",
};
