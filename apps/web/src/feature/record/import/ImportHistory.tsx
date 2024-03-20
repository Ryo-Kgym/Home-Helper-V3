import { Table } from "@components/ui/v4/table";

export type ImportHistory = {
  importDate: string;
  fileName: string;
  importCount: number;
};

export const ImportHistory = ({
  importHistories,
}: {
  importHistories: ImportHistory[];
}) => {
  return (
    <div>
      <div>取込履歴</div>
      <Table>
        <Table.Header
          headerItems={[
            { name: "取込日時" },
            { name: "ファイル名" },
            { name: "取込件数" },
          ]}
        />
        <Table.Body
          data={importHistories}
          renderItem={(item) => (
            <>
              <Table.BodyTd>{item.importDate}</Table.BodyTd>
              <Table.BodyTd>{item.fileName}</Table.BodyTd>
              <Table.BodyTd>{item.importCount}</Table.BodyTd>
            </>
          )}
        />
      </Table>
    </div>
  );
};
