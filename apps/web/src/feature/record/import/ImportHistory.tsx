import { Table } from "@components/ui/v4/table";

export const ImportHistory = () => {
  return (
    <div>
      <div>取込履歴</div>
      <Table>
        <Table.Header
          headerItems={[
            { name: "取込日時" },
            { name: "ファイル名" },
            { name: "取込件数" },
            { name: "ステータス" },
          ]}
        />
        <Table.Body
          data={[
            {
              importDate: "2021/01/01 12:00",
              fileName: "test.csv",
              importCount: 100,
              status: "完了",
            },
            {
              importDate: "2021/01/01 12:00",
              fileName: "test.csv",
              importCount: 100,
              status: "完了",
            },
            {
              importDate: "2021/01/01 12:00",
              fileName: "test.csv",
              importCount: 100,
              status: "完了",
            },
          ]}
          renderItem={(item) => (
            <>
              <Table.BodyTd>{item.importDate}</Table.BodyTd>
              <Table.BodyTd>{item.fileName}</Table.BodyTd>
              <Table.BodyTd>{item.importCount}</Table.BodyTd>
              <Table.BodyTd>{item.status}</Table.BodyTd>
            </>
          )}
        />
      </Table>
    </div>
  );
};
