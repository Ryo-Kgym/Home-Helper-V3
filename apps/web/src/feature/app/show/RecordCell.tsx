import type { Fields } from "@feature/app/schema";
import type { Record, RecordColumn } from "@feature/app/schema/record-schema";
import { MultiTextInput } from "@components/ui/v4/multiTextInput";
import { Select } from "@components/ui/v4/select";
import { TextInput } from "@components/ui/v4/textInput";

export const RecordCell = ({
  fieldId,
  fields,
  isEditing,
  column = {
    fieldKind: fields[fieldId]?.fieldKind ?? "text",
    value: "",
  },
  newRecord,
  setNewRecord,
}: {
  fieldId: string;
  fields: Fields;
  isEditing: boolean;
  column: RecordColumn | undefined;
  newRecord: Record;
  setNewRecord: (newRecord: Record) => void;
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
    setNewRecord({
      ...newRecord,
      [fieldId]: {
        ...column,
        value,
      },
    });
  };

  if (!isEditing) {
    return <div>{column.value}</div>;
  }

  switch (field.fieldKind) {
    case "text":
      return (
        <TextInput
          label={""}
          value={newRecord[fieldId]!.value}
          setValue={changeHandler}
        />
      );
    case "selectBox":
      return (
        <Select
          label={""}
          value={newRecord[fieldId]!.value}
          setValue={changeHandler}
          data={field.options.selector
            .split(",")
            .map((option) => ({ label: option, value: option }))}
        />
      );
    case "multipleText":
      return (
        <MultiTextInput
          label={""}
          value={newRecord[fieldId]!.value}
          setValue={changeHandler}
        />
      );
  }
};
