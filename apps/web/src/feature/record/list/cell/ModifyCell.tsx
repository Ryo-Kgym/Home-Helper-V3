import type { Fields, Records } from "@feature/app/schema";
import type { RecordColumn } from "@feature/app/schema/record-schema";
import { MultiTextInput } from "@components/ui/v4/multiTextInput";
import { Select } from "@components/ui/v4/select";
import { TextInput } from "@components/ui/v4/textInput";

export const ModifyCell = ({
  record,
  fieldId,
  fields,
  column = {
    fieldKind: fields[fieldId]?.fieldKind ?? "text",
    value: "",
  },
  records,
  setRecords,
}: {
  record: Records[number];
  fieldId: string;
  fields: Fields;
  column: RecordColumn | undefined;
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
    const col = record.columns[fieldId];
    if (!col) return;
    col.value = value;
    setRecords({ ...records });
  };

  const value = column.value;

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
