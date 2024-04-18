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

  const bodyData = Object.entries(viewApps).map(([index, viewApp]) => {
    if (viewApp.mode === "add") {
      return [
        {
          id: "viewApp" + index,
          name: Number(index) + 1,
        },
        {
          id: viewApp.appId.concat(index),
          name: appListData.find((a) => a.value === viewApp.appId)?.label ?? "",
        },
        ...Object.values(viewApp.viewFields).map((appField) => ({
          id: appField.appFieldId,
          name:
            appListData
              .find((a) => a.value === viewApp.appId)
              ?.fields.find((f) => f.value === appField.appFieldId)?.label ??
            "",
        })),
        {
          id: "delete",
          name: <RemoveViewApp />,
        },
      ];
    }

    return [];
  });

  const renderItem = (columns: { id: string; name: string | ReactNode }[]) =>
    columns.map((col) => <Table.BodyTd key={col.id}>{col.name}</Table.BodyTd>);

  return (
    <Table>
      <Table.Header headerItems={headerItems} />
      <Table.Body data={bodyData} renderItem={renderItem} />
    </Table>
  );
};
