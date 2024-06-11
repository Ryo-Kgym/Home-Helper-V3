import type { View } from "@oneforall/domain/schema/view/viewSchema";
import type { ComponentProps } from "react";
import { Table } from "@components/ui/v4/table";
import { ViewRecordCell } from "@features/viewRecordList/components/ViewRecordCell";
import { useNavigation } from "@routing/client/useNavigation";

import { useViewRecords } from "../client/useViewRecordsState";

export const ViewRecordListTable = ({
  view,
  headerItems,
}: {
  view: View;
  headerItems: ComponentProps<typeof Table.Header>["headerItems"];
}) => {
  const { viewRecords } = useViewRecords();
  const { prependParamAndPush } = useNavigation();

  return (
    <Table>
      <Table.Header headerItems={headerItems} />
      <Table.Body
        data={Object.entries(viewRecords)}
        rowClick={([, v]) => {
          prependParamAndPush({
            key: "recordId",
            value: `${v.viewAppId}-${v.recordId}`,
          });
        }}
        renderItem={([, v], index) => (
          <>
            <Table.BodyTd align={"right"}>{index + 1}</Table.BodyTd>
            {Object.entries(view.fields).map(
              ([viewFieldId, viewField], index) => (
                <Table.BodyTd key={index}>
                  <ViewRecordCell
                    viewField={viewField}
                    column={v.columns[viewFieldId]}
                  />
                </Table.BodyTd>
              ),
            )}
            <Table.BodyTd>{v.appName}</Table.BodyTd>
          </>
        )}
      />
    </Table>
  );
};
