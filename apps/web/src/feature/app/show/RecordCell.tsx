import type { Record, RecordColumn } from "@feature/app/schema/record-schema";
import { MultiTextInput } from "@components/ui/v4/multiTextInput";
import { Select } from "@components/ui/v4/select";
import { TextInput } from "@components/ui/v4/textInput";

export const RecordCell = ({
  column,
  newRecord,
  setNewRecord,
}: {
  column: RecordColumn;
  newRecord: Record;
  setNewRecord: (newRecord: Record) => void;
}) => {
  const changeHandler = (value: string) => {
    setNewRecord({
      ...newRecord,
      [column.fieldId]: {
        ...column,
        value,
      },
    });
  };

  if (!column.editing) {
    return <div>{column.value}</div>;
  }

  switch (column.fieldKind) {
    case "text":
      return (
        <TextInput
          label={""}
          value={newRecord[column.fieldId]!.value}
          setValue={changeHandler}
        />
      );
    case "selectBox":
      return (
        <Select
          label={""}
          value={newRecord[column.fieldId]!.value}
          setValue={changeHandler}
          data={[
            { label: "aaa", value: "aaa" },
            { label: "bbb", value: "bbb" },
            { label: "ccc", value: "ccc" },
          ]}
        />
      );
    case "multipleText":
      return (
        <MultiTextInput
          label={""}
          value={newRecord[column.fieldId]!.value}
          setValue={changeHandler}
        />
      );
  }
};
