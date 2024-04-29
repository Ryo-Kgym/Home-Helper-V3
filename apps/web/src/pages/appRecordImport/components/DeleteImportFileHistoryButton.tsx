import Trash from "@components/ui/v4/icon/Trash";
import { notify } from "@components/ui/v4/notify/notify";
import { useImportFileHistories } from "@pages/appRecordImport/hooks/useImportFileHistories";
import {
  useDeleteImportFileHistoryMutation,
  useDeleteRecordMutation,
} from "@v3/graphql/public";

export const DeleteImportFileHistoryButton = ({
  historyId,
}: {
  historyId: string;
}) => {
  const { importFileHistories, setImportFileHistories } =
    useImportFileHistories();

  const [, mut] = useDeleteImportFileHistoryMutation();
  const [, recordMut] = useDeleteRecordMutation();

  const deleteHandler = async () => {
    try {
      const { data, error } = await mut({ historyId });
      if (error) {
        throw error;
      }
      data?.deleteImportFileRecord?.returning.forEach(({ recordId }) => {
        void recordMut({ recordId });
      });

      notify("削除しました"); // TODO import_file_settingも
      setImportFileHistories(
        importFileHistories.filter((h) => h.id !== historyId),
      );
    } catch (e) {
      console.error(e);
      notify("削除に失敗しました");
    }
  };

  return (
    <div className={"flex items-center justify-center"}>
      <button className={"h-8 w-8 bg-inherit"} onClick={deleteHandler}>
        <Trash />
      </button>
    </div>
  );
};
