import type { ImportHistoryType, Records } from "@feature/app/schema";
import { Table } from "@components/ui/v4/table";

export const ImportHistory = ({
  importHistories,
}: {
  importHistories: ImportHistoryType[];
  setPreviewRecords: (records: Records) => void;
}) => {
  const fetchImportFileRecords = async () => {};

  return (
    <div>
      <div>取込履歴</div>
      <Table>
        <Table.Header
          headerItems={[
            { name: "取込日時" },
            { name: "ファイル名" },
            { name: "取込件数" },
            { name: "表示" },
          ]}
        />
        <Table.Body
          data={importHistories}
          renderItem={(item) => (
            <>
              <Table.BodyTd>
                {new Date(item.importDate).toISOString()}
              </Table.BodyTd>
              <Table.BodyTd>{item.fileName}</Table.BodyTd>
              <Table.BodyTd>{item.importCount}</Table.BodyTd>
              <Table.BodyTd>
                <button onClick={fetchImportFileRecords}>表示</button>
              </Table.BodyTd>
            </>
          )}
        />
      </Table>
    </div>
  );
};
