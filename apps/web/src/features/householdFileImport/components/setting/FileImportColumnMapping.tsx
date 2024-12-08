import { FC } from "react";

import { NumberInput } from "~/components/ui/v4/textInput";
import {
  ColumnName,
  useFileImportColumnMapping,
} from "../../client/useFileImportColumnMapping";

export const FileImportColumnMapping: FC = () => {
  const { mapping, setMapping } = useFileImportColumnMapping();
  return (
    <div className={"space-y-5"}>
      <span className={"font-bold"}>列のマッピング</span>
      <div className={"space-y-5"}>
        {Object.entries(mapping).map(([columnName, value]) => (
          <div key={columnName}>
            <div>
              <NumberInput
                label={label[columnName as ColumnName]}
                value={value ?? ""}
                setValue={(value) => {
                  if (value === "") {
                    setMapping(columnName as ColumnName, null);
                    return;
                  }

                  setMapping(columnName as ColumnName, value);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const label: Record<ColumnName, string> = {
  settlementDate: "決済日",
  amount: "金額",
  memo: "メモ",
};
