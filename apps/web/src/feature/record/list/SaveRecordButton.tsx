import type { Record, Records } from "@feature/app/schema/record-schema";
import { generateId } from "@feature/app/function/generate-id";
import { useInsertRecordMutation } from "@v3/graphql/public";

export const SaveRecordButton = ({
  appId,
  records,
  setRecords,
  newRecord,
  setNewRecord,
  addingRecord,
  setAddingRecord,
  recordTemplate,
}: {
  appId: string;
  records: Records;
  setRecords: (records: Records) => void;
  newRecord: Record;
  setNewRecord: (newRecord: Record) => void;
  addingRecord: boolean;
  setAddingRecord: (addingRecord: boolean) => void;
  recordTemplate: Record;
}) => {
  const [, mut] = useInsertRecordMutation();

  const saveRecordHandler = async () => {
    if (!addingRecord) return;

    const newRecordIndex = Math.max(
      ...Object.keys(records).map((n) => parseInt(n)),
    );
    const recordId: string = generateId();

    try {
      const { error } = await mut({
        id: recordId,
        appId,
        index: newRecordIndex,
        columns: JSON.stringify({
          ...Object.entries(newRecord).reduce(
            (acc, [fieldId, { fieldKind, value }]) => ({
              ...acc,
              [fieldId]: {
                fieldKind,
                value,
              },
            }),
            {},
          ),
        }),
      });
      if (error) throw error;

      setRecords({
        ...records,
        [newRecordIndex]: {
          recordId,
          columns: {
            ...Object.entries(newRecord).reduce(
              (acc, [fieldId, { fieldKind, value }]) => ({
                ...acc,
                [fieldId]: {
                  fieldKind,
                  value,
                  editing: false,
                },
              }),
              {},
            ),
          },
        },
      });
      setNewRecord(recordTemplate);
      setAddingRecord(false);
      alert("レコードを追加しました");
    } catch (e) {
      console.error(e);
      alert("レコード追加に失敗しました");
    }
  };

  return <button onClick={saveRecordHandler}>追加</button>;
};
