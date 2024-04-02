import type { ImportFileHistory, Records } from "@feature/app/schema";
import { Button } from "@components/ui/v4/button";
import { Table } from "@components/ui/v4/table";
import { DeleteImportFileHistoryButton } from "@feature/record/import/DeleteImportFileHistoryButton";
import { usePreviewRecords } from "@feature/record/import/usePreviewRecordsState";

export const ImportHistoryList = ({
  histories,
  setHistories,
}: {
  histories: ImportFileHistory[];
  setHistories: (histories: ImportFileHistory[]) => void;
}) => {
  const { setPreviewRecords } = usePreviewRecords();

  const fetchImportFileRecords = async (historyId: string) => {
    const history = histories.find((h) => h.id === historyId);
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
            { name: "件数" },
            { name: "表示" },
            { name: "削除" },
          ]}
        />
        <Table.Body
          data={histories}
          renderItem={(history) => (
            <>
              <Table.BodyTd>
                {new Date(history.importDate).toISOString()}
              </Table.BodyTd>
              <Table.BodyTd>{history.fileName}</Table.BodyTd>
              <Table.BodyTd align={"right"}>{history.importCount}</Table.BodyTd>
              <Table.BodyTd align={"center"}>
                <Button
                  type="display"
                  label="表示"
                  clickHandler={() => fetchImportFileRecords(history.id)}
                />
              </Table.BodyTd>
              <Table.BodyTd align={"center"}>
                <DeleteImportFileHistoryButton
                  historyId={history.id}
                  histories={histories}
                  setHistories={setHistories}
                />
              </Table.BodyTd>
            </>
          )}
        />
      </Table>
    </div>
  );
};
