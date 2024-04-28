import { Button } from "@components/ui/v4/button";
import { Table } from "@components/ui/v4/table";
import { DeleteImportFileHistoryButton } from "@pages/appRecordImport/components/DeleteImportFileHistoryButton";
import { useImportFileHistories } from "@pages/appRecordImport/hooks/useImportFileHistories";
import { useSetPreviewRecords } from "@pages/appRecordImport/hooks/useSetPreviewRecords";

export const ImportHistoryList = () => {
  const { importFileHistories } = useImportFileHistories();
  const setPreviewRecords = useSetPreviewRecords();

  const fetchImportFileRecords = async (historyId: string) => {
    const history = importFileHistories.find((h) => h.id === historyId);
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
          data={importFileHistories}
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
                <DeleteImportFileHistoryButton historyId={history.id} />
              </Table.BodyTd>
            </>
          )}
        />
      </Table>
    </div>
  );
};
