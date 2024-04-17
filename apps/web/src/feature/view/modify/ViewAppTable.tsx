import { ReactNode } from "react";
import { Table } from "@components/ui/v4/table";
import { AppListData } from "@feature/view/modify/app-list-data";
import { RemoveViewApp } from "@feature/view/modify/RemoveViewApp";
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
      name: "No.",
    },
    {
      name: "アプリ",
    },
    ...Object.values(viewFields).map((field) => ({
      name: field.fieldName,
    })),
    {
      name: "",
    },
  ];

  const bodyData = Object.entries(viewApps).map(([appId, appFields], index) => [
    {
      id: index.toString(),
      name: (index + 1).toString(),
    },
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
    {
      id: "delete",
      name: <RemoveViewApp />,
    },
  ]);

  const renderItem = (columns: { id: string; name: string | ReactNode }[]) =>
    columns.map((col) => <Table.BodyTd key={col.id}>{col.name}</Table.BodyTd>);

  return (
    <Table>
      <Table.Header headerItems={headerItems} />
      <Table.Body data={bodyData} renderItem={renderItem} />
    </Table>
  );
};
