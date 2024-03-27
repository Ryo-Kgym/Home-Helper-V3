import type { Field, Fields, Records } from "@feature/app/schema";
import type { RecordColumn } from "@feature/app/schema/record-schema";
import { MultiTextInput } from "@components/ui/v4/multiTextInput";
import { Select } from "@components/ui/v4/select";
import { TextInput } from "@components/ui/v4/textInput";
import { AddCellLookupFactory } from "@feature/record/list/cell/AddCellLookupFactory";

export const ModifyCell = ({
  field,
  record,
  setRecord,
  fields,
  column = {
    fieldKind: fields[field.id]?.fieldKind ?? "text",
    value: "",
  },
}: {
  field: Field;
  record: Records[number];
  setRecord: (record: Records[number]) => void;
  fields: Fields;
  column: RecordColumn | undefined;
}) => {
  if (field.fieldKind !== column.fieldKind) {
    console.error(
      `fieldKind mismatch: ${field.fieldKind} !== ${column.fieldKind}`,
    );
    return null;
  }

  const changeHandler = (value: string) => {
    const newRecord = {
      ...record,
      columns: {
        ...record.columns,
        [field.id]: {
          ...record.columns[field.id]!,
          value,
        },
      },
    };

    setRecord(newRecord);
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
    case "lookup": {
      return (
        // Add を同じものを使用する。不都合が発生すれば、別途コンポーネントを作成する
        <AddCellLookupFactory
          value={value}
          changeHandler={changeHandler}
          options={field.options}
        />
      );
    }
  }
};
