import type { Fields, Records } from "@feature/app/schema";
import type { Record, RecordColumn } from "@feature/app/schema/record-schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";
import { MultiTextInput } from "@components/ui/v4/multiTextInput";
import { Select } from "@components/ui/v4/select";
import { TextInput } from "@components/ui/v4/textInput";

export const RecordCell = ({
  record,
  fieldId,
  fields,
  isEditing,
  column = {
    fieldKind: fields[fieldId]?.fieldKind ?? "text",
    value: "",
  },
  newRecord,
  setNewRecord,
  mode,
  records,
  setRecords,
}: {
  record: Records[number];
  fieldId: string;
  fields: Fields;
  isEditing: boolean;
  column: RecordColumn | undefined;
  newRecord: Record;
  setNewRecord: (newRecord: Record) => void;
  mode: RecordListMode;
  records: Records;
  setRecords: (records: Records) => void;
}) => {
  const field = fields[fieldId];
  if (!field) {
    console.error(`field not found: ${fieldId}`);
    return null;
  }
  if (field.fieldKind !== column.fieldKind) {
    console.error(
      `fieldKind mismatch: ${field.fieldKind} !== ${column.fieldKind}`,
    );
    return null;
  }

  const changeHandler = (value: string) => {
    if (mode === "add") {
      setNewRecord({
        ...newRecord,
        [fieldId]: {
          ...column,
          value,
        },
      });
    }
    if (mode === "modify") {
      const col = record.columns[fieldId];
      if (!col) return;
      col.value = value;
      setRecords({ ...records });
    }
  };

  if (!isEditing) {
    return <div>{column.value}</div>;
  }

  const value = mode === "add" ? newRecord[fieldId]!.value : column.value;

  switch (field.fieldKind) {
    case "text":
      return <TextInput label={""} value={value} setValue={changeHandler} />;
    case "selectBox":
      return (
        <Select
          label={""}
          value={value}
          setValue={changeHandler}
          data={field.options.selector
            .split(",")
            .map((option) => ({ label: option, value: option }))}
        />
      );
    case "multipleText":
      return (
        <MultiTextInput label={""} value={value} setValue={changeHandler} />
      );
  }
};
