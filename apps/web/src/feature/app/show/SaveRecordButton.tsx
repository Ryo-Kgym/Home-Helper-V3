import type { Record, Records } from "@feature/app/schema/record-schema";
import { generateId } from "@feature/app/function/generate-id";
import { useInsertRecordMutation } from "@v3/graphql/public";

export const SaveRecordButton = ({
  appId,
  recordId,
  records,
  setRecords,
  newRecord,
  setNewRecord,
  addingRecord,
  setAddingRecord,
  recordTemplate,
}: {
  appId: string;
  recordId: string;
  records: Records;
  setRecords: (records: Records) => void;
  newRecord: Record;
  setNewRecord: (newRecord: Record) => void;
  addingRecord: boolean;
  setAddingRecord: (addingRecord: boolean) => void;
  recordTemplate: Record;
}) => {
  const [, mut] = useInsertRecordMutation();

  const saveRecordHandler = async (recordId: string) => {
    if (!addingRecord) return;

    const newRecordIndex =
      Object.keys(records).length > 0
        ? Math.max(...Object.values(records).map(({ index }) => index)) + 1
        : 1;

    try {
      const { error } = await mut({
        id: generateId(),
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
        [recordId]: {
          index: newRecordIndex,
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
      alert("保存しました");
    } catch (e) {
      console.error(e);
      alert("保存に失敗しました");
    }
  };

  return <button onClick={() => saveRecordHandler(recordId)}>保存</button>;
};
