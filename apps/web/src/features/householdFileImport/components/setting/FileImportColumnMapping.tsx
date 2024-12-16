import { FC } from "react";

import { NumberInput } from "../../../../components/ui/v4/textInput";
import { useFileImportColumnMapping } from "../../client/useFileImportColumnMapping";

export const FileImportColumnMapping: FC = () => {
  const { mapping, setMapping } = useFileImportColumnMapping();
  return (
    <div className={"space-y-5"}>
      <span className={"font-bold"}>列のマッピング</span>
      <div className={"space-y-5"}>
        {Object.values(fields).map(({ columnName, label }) => (
          <div key={columnName}>
            <div>
              <NumberInput
                label={label}
                value={mapping[columnName] ?? ""}
                setValue={(value) => {
                  if (value === "") {
                    setMapping(columnName, null);
                    return;
                  }

                  setMapping(columnName, value);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export type ColumnName = "settlementDate" | "amount" | "memo";

const fields: Record<
  ColumnName,
  {
    columnName: ColumnName;
    label: string;
  }
> = {
  settlementDate: {
    columnName: "settlementDate",
    label: "決済日",
  },
  amount: {
    columnName: "amount",
    label: "金額",
  },
  memo: {
    columnName: "memo",
    label: "メモ",
  },
};
