import { MultiTextInput } from "@components/ui/v4/multiTextInput";
import { TextInput } from "@components/ui/v4/textInput";
import { Field, Fields } from "@oneforall/domain/schema/appSchema";
import { Columns, RecordColumn } from "@oneforall/domain/schema/recordSchema";

import { AddCellDateFactory } from "./AddCellDateFactory";
import { AddCellLookupFactory } from "./AddCellLookupFactory";
import { AddCellNumericFactory } from "./AddCellNumericFactory";
import { AddCellSelectBoxFactory } from "./AddCellSelectBoxFactory";
import { ModifyCellFactoryChangeHandler } from "./cellFactoryChangeHandler";

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
          columns={columns}
        />
      );
    }
    case "date": {
      return (
        <AddCellDateFactory
          value={value}
          changeHandler={changeHandler}
          options={field.options}
        />
      );
    }
    case "numeric": {
      return (
        <AddCellNumericFactory value={value} changeHandler={changeHandler} />
      );
    }
  }
};
