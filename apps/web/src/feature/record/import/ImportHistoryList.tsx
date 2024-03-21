import type { ImportFileHistory, Records } from "@feature/app/schema";
import { Button } from "@components/ui/v4/button";
import { Table } from "@components/ui/v4/table";

export const ImportHistoryList = ({
  importHistories,
  setPreviewRecords,
}: {
  importHistories: ImportFileHistory[];
  setPreviewRecords: (records: Records) => void;
}) => {
  const fetchImportFileRecords = async (historyId: string) => {
    const history = importHistories.find((h) => h.id === historyId);
    if (!history) {
      return;
    }
    setPreviewRecords(history.importFileRecords);
  };

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
                <Button
                  type="display"
                  label="表示"
                  clickHandler={() => fetchImportFileRecords(item.id)}
                />
              </Table.BodyTd>
            </>
          )}
        />
      </Table>
    </div>
  );
};
