import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/v4/button";
import { notify } from "~/components/ui/v4/notify/notify";
import { paths } from "~/routing/paths";
import { useDeleteAppRelations } from "../client/useDeleteAppRelations";
import { AppDeleteRelations } from "../types/appDeleteRelations";

export const DeleteAppRelationsClient = ({
  appDeleteRelations: { app, viewApps, ...other },
}: {
  appDeleteRelations: AppDeleteRelations;
}) => {
  const { deleteAppRelations } = useDeleteAppRelations({
    appId: app.id,
  });
  const { push, refresh } = useRouter();
  const existViewApps = viewApps.nodes.length > 0;
  const existViewAppsMessage = existViewApps
    ? "関連するビューが存在するので、削除できません。ビューを削除してから再度操作してください。"
    : "";

  const deleteHandler = async () => {
    try {
      await deleteAppRelations();
      notify("アプリを削除しました");
      push(paths.group.select);
      refresh();
    } catch (e) {
      console.error(e);
      notify("アプリの削除に失敗しました");
    }
  };

  if (existViewApps) {
    return <div>{existViewAppsMessage}</div>;
  }

  return (
    <div className={"px-10"}>
      <div className={"space-y-10"}>
        <div>以下のデータを削除します</div>
        <div className={"space-y-5 px-10"}>
          <div>
            <div className={"text-xl"}>{app.name}</div>
          </div>
          {Object.entries(other).map(([table, attr]) => (
            <List key={table} title={table} data={attr} />
          ))}
        </div>
        <Button
          label={"アプリを削除する"}
          clickHandler={deleteHandler}
          type={"dangerous"}
          disabled={existViewApps}
        />
      </div>
    </div>
  );
};

const List = <
  T extends
    | {
        nodes: {
          id: string;
          name: string;
        }[];
        count?: undefined;
      }
    | {
        nodes?: undefined;
        count: number;
      },
>({
  title,
  data,
}: {
  title: string;
  data: T;
}) => (
  <div>
    <div className={"flex items-center space-x-10"}>
      <div className={"text-xl"}>テーブル名：{title}</div>
      <div>合計：{data.nodes?.length ?? data.count} 件</div>
    </div>
    <ul className={"space-y-2"}>
      {data.nodes?.map((field) => (
        <li key={field.id} className={"ml-5 list-disc"}>
          {field.name}
        </li>
      ))}
    </ul>
  </div>
);
