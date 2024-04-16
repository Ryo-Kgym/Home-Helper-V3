import { Table } from "@components/ui/v4/table";
import { AppListData } from "@feature/view/modify/app-list-data";
import { useGetViewApps } from "@feature/view/modify/useZustandViewAppsStore";
import { ViewFields } from "@oneforall/domain/schema/view/view-schema";

export const ViewAppTable = ({
  viewFields,
  appListData,
}: {
  viewFields: ViewFields;
  appListData: AppListData;
}) => {
  const viewApps = useGetViewApps();

  const headerItems = [
    {
      name: "アプリ",
    },
    ...Object.values(viewFields).map((field) => ({
      name: field.fieldName,
    })),
  ];

  const bodyData = Object.entries(viewApps).map(([appId, appFields]) => [
    {
      id: appId,
      name: appListData.find((a) => a.value === appId)?.label ?? "",
    },
    ...Object.values(appFields).map((appField) => ({
      id: appField.appFieldId,
      name:
        appListData
          .find((a) => a.value === appId)
          ?.fields.find((f) => f.value === appField.appFieldId)?.label ?? "",
    })),
  ]);

  const renderItem = (columns: { id: string; name: string }[]) =>
    columns.map((col) => <Table.BodyTd key={col.id}>{col.name}</Table.BodyTd>);

  return (
    <Table>
      <Table.Header headerItems={headerItems} />
      <Table.Body data={bodyData} renderItem={renderItem} />
    </Table>
  );
};
