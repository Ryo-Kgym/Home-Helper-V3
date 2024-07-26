import { FC } from "react";
import { Table } from "@components/ui/v4/table";

import { LoadFileInputRow } from "./LoadFileInputRow";

type Props = {
  visible: boolean;
  header: string[];
  body: string[][];
};

export const LoadFileInputTable: FC<Props> = ({ visible, header, body }) => {
  return (
    <Table>
      <Table.Header
        headerItems={header
          .map((name) => ({ name }))
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
