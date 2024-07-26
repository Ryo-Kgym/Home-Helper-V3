import { FC } from "react";
import { Table } from "@components/ui/v4/table";

import { useFileImportColumnMapping } from "../client/useFileImportColumnMapping";
import { LoadFileInputRow } from "./LoadFileInputRow";

type Props = {
  visible: boolean;
  header: string[];
  body: string[][];
};

export const LoadFileInputTable: FC<Props> = ({ visible, header, body }) => {
  const { mapping } = useFileImportColumnMapping();

  return (
    <Table>
      <Table.Header
        headerItems={header
          .map((name, index) => {
            const columnNumber = index + 1;
            const [columnName] = Object.entries(mapping).find(
              ([, value]) => value === columnNumber,
            ) ?? [null, null];

            return { name: columnName ? `[${columnName}]` : name };
          })
          .concat({ name: "ジャンル" })
          .concat({ name: "カテゴリ" })}
      />
      <Table.Body
        data={visible ? body : []}
        renderItem={(item, rowNumber) => (
          <LoadFileInputRow key={rowNumber} item={item} rowNumber={rowNumber} />
        )}
      />
    </Table>
  );
};
