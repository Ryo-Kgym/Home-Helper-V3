import type { RecordListMode } from "@feature/record/list/RecordListClient";

export const UpdateRecordButton = ({
  setMode,
}: {
  setMode: (mode: RecordListMode) => void;
}) => {
  const updateHandler = async () => {
    try {
      setMode("show");
      alert("レコードを更新しました");
    } catch (e) {
      console.error(e);
      alert("レコード追加に更新しました");
    }
  };

  return <button onClick={updateHandler}>更新</button>;
};
