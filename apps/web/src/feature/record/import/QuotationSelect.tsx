import type { Quotation } from "@feature/app/schema";
import { Select } from "@components/ui/v4/select";

export const QuotationSelect = ({
  value,
  setValue,
}: {
  value: Quotation;
  setValue: (value: Quotation) => void;
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

const lineBreakCodeArray: Record<string, { value: Quotation; label: string }> =
  {
    doubleQuotation: {
      value: '"',
      label: "ダブルクォーテーション",
    },
    singleQuotation: {
      value: "'",
      label: "シングルクォーテーション",
    },
    none: { value: "", label: "なし" },
  };
