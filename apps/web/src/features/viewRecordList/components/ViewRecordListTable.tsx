import type { View } from "@oneforall/domain/schema/view/viewSchema";
import type { ComponentProps } from "react";
import { Table } from "@components/ui/v4/table";

import { useViewRecords } from "../client/useViewRecordsState";

export const ViewRecordListTable = ({
  headerItems,
}: {
  view: View;
  headerItems: ComponentProps<typeof Table.Header>["headerItems"];
}) => {
  const { viewRecords } = useViewRecords();

  return (
    <Table>
      <Table.Header headerItems={headerItems} />
      <Table.Body
        data={Object.entries(viewRecords)}
        renderItem={([, v], index) => (
          <>
            <Table.BodyTd align={"right"}>{index + 1}</Table.BodyTd>
            {Object.values(v.columns).map((value, index) => (
              <Table.BodyTd key={index}>{value.value}</Table.BodyTd>
            ))}
            <Table.BodyTd>{v.appName}</Table.BodyTd>
          </>
        )}
      ></Table.Body>
    </Table>
  );
};
