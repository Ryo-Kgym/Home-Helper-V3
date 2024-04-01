import type { Field, Fields } from "@feature/app/schema";
import type { Columns, RecordColumn } from "@feature/app/schema/record-schema";
import type { ModifyCellFactoryChangeHandler } from "@feature/record/list/cell/cell-factory-change-handler";
import { MultiTextInput } from "@components/ui/v4/multiTextInput";
import { TextInput } from "@components/ui/v4/textInput";
import { AddCellLookupFactory } from "@feature/record/list/cell/AddCellLookupFactory";
import { AddCellSelectBoxFactory } from "@feature/record/list/cell/AddCellSelectBoxFactory";

export const AddCell = ({
  field,
  fields,
  column = {
    fieldKind: fields[field.id]?.fieldKind ?? "text",
    value: "",
  },
  columns,
  setColumns,
}: {
  field: Field;
  fields: Fields;
  column: RecordColumn | undefined;
  columns: Columns;
  setColumns: (columns: Columns) => void;
}) => {
  if (field.fieldKind !== column.fieldKind) {
    console.error(
      `fieldKind mismatch: ${field.fieldKind} !== ${column.fieldKind}`,
    );
    return null;
  }

  const changeHandler: ModifyCellFactoryChangeHandler = (value, options) => {
    setColumns({
      ...columns,
      [field.id]: {
        ...column,
        options,
        value,
      },
    });
  };

  const value = column.value;

  switch (field.fieldKind) {
    case "text":
      return <TextInput label={""} value={value} setValue={changeHandler} />;
    case "selectBox":
      return (
        <AddCellSelectBoxFactory
          value={value}
          changeHandler={changeHandler}
          options={field.options}
        />
      );
    case "multipleText":
      return (
        <MultiTextInput label={""} value={value} setValue={changeHandler} />
      );
    case "lookup": {
      return (
        <AddCellLookupFactory
          value={value}
          changeHandler={changeHandler}
          options={field.options}
        />
      );
    }
  }
};
