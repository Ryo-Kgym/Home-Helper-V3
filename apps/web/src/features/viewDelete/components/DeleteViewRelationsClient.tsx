import { useRouter } from "next/navigation";
import { Button } from "@components/ui/v4/button";
import { notify } from "@components/ui/v4/notify/notify";
import { useDeleteViewRelations } from "@features/viewDelete/hooks/useDeleteViewRelations";
import { ViewDeleteRelations } from "@features/viewDelete/types/viewDeleteRelations";
import { paths } from "@routing/paths";

export const DeleteViewRelationsClient = ({
  viewDeleteRelations,
}: {
  viewDeleteRelations: ViewDeleteRelations;
}) => {
  const { deleteViewRelations } = useDeleteViewRelations({
    viewId: viewDeleteRelations.view.id,
  });
  const { push, refresh } = useRouter();

  const deleteHandler = async () => {
    try {
      await deleteViewRelations();
      notify("ビューを削除しました");
      push(paths.group.select);
      refresh();
    } catch (e) {
      console.error(e);
      notify("ビューの削除に失敗しました");
    }
  };

  return (
    <div className={"px-10"}>
      <div className={"space-y-10"}>
        <div>以下のデータを削除します</div>
        <div className={"space-y-5 px-10"}>
          <div>
            <div className={"text-xl"}>{viewDeleteRelations.view.name}</div>
          </div>
          <div>
            <div className={"text-xl"}>アプリ</div>
            <ul className={"space-y-2"}>
              {viewDeleteRelations.apps.map((app) => (
                <li key={app.id} className={"ml-5 list-disc"}>
                  {app.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className={"text-xl"}>フィールド</div>
            <ul className={"space-y-2"}>
              {viewDeleteRelations.fields.map((field) => (
                <li key={field.id} className={"ml-5 list-disc"}>
                  {field.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className={"text-xl"}>サマリ</div>
            <ul className={"space-y-2"}>
              {viewDeleteRelations.summaries.map((summary) => (
                <li key={summary.id} className={"ml-5 list-disc"}>
                  {summary.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Button
          label={"ビューを削除する"}
          clickHandler={deleteHandler}
          type={"dangerous"}
        />
      </div>
    </div>
  );
};
