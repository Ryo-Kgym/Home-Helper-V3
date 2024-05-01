import { notify } from "@components/ui/v4/notify/notify";
import { RecordListMode } from "@features/appRecordList/types/recordListMode";
import { useRecords } from "@hooks/states/app/records/useRecords";
import { useDeleteRecordMutation } from "@v3/graphql/public";

export const DeleteRecordButton = ({
  recordId,
  mode,
  setMode,
}: {
  recordId: string;
  mode: RecordListMode;
  setMode: (mode: RecordListMode) => void;
}) => {
  const { records, setRecords } = useRecords();

  const [, mut] = useDeleteRecordMutation();
  const setRecordsState = () => {
    const copiedRecords = { ...records };
    Object.entries(copiedRecords).forEach(([key, value]) => {
      if (value.recordId === recordId) {
        delete copiedRecords[key];
      }
    });
    setRecords(copiedRecords);
  };

  const deleteRecordHandler = async (recordId: string) => {
    try {
      if (mode === "show") {
        const { error } = await mut({ recordId });
        if (error) {
          throw error;
        }
        setRecordsState();
        notify("削除しました");
      }

      if (mode === "add") {
        setRecordsState();
        setMode("show");
      }
    } catch (e) {
      console.error(e);
      notify("削除に失敗しました");
    }
  };

  return <button onClick={() => deleteRecordHandler(recordId)}>削除</button>;
};
