import type { View } from "@oneforall/domain/schema/view/view-schema";
import type { ComponentProps } from "react";
import { Table } from "@components/ui/v4/table";
import { useRecords } from "@feature/view/recordList/useRecordsState";

export const RecordListTable = ({
  headerItems,
}: {
  view: View;
  headerItems: ComponentProps<typeof Table.Header>["headerItems"];
}) => {
  const { records } = useRecords();

  return (
    <Table>
      <Table.Header headerItems={headerItems} />
      <Table.Body
        data={Object.entries(records)}
        renderItem={([_]) => null}
      ></Table.Body>
    </Table>
  );
};
