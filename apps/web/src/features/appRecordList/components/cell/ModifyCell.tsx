import { MultiTextInput } from "@components/ui/v4/multiTextInput";
import { Select } from "@components/ui/v4/select";
import { TextInput } from "@components/ui/v4/textInput";
import { Field } from "@oneforall/domain/schema/appSchema";
import { RecordColumn, Records } from "@oneforall/domain/schema/recordSchema";

import { ModifyCellFactoryChangeHandler } from "./cell-factory-change-handler";
import { ModifyCellDateFactory } from "./ModifyCellDateFactory";
import { ModifyCellLookupFactory } from "./ModifyCellLookupFactory";

export const ModifyCell = ({
  field,
  record,
  setRecord,
  column = {
    fieldKind: field.fieldKind,
    value: "",
  },
}: {
  field: Field;
  record: Records[number];
  setRecord: (record: Records[number]) => void;
  column: RecordColumn | undefined;
}) => {
  if (field.fieldKind !== column.fieldKind) {
    console.error(
      `fieldKind mismatch: ${field.fieldKind} !== ${column.fieldKind}`,
    );
    return null;
  }

  const changeHandler: ModifyCellFactoryChangeHandler = (value, options) => {
    const newRecord = {
      ...record,
      columns: {
        ...record.columns,
        [field.id]: {
          ...record.columns[field.id]!,
          value,
          options,
          fieldKind: field.fieldKind,
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
          data={field.options.selector}
        />
      );
    case "multipleText":
      return (
        <MultiTextInput label={""} value={value} setValue={changeHandler} />
      );
    case "lookup": {
      return (
        <ModifyCellLookupFactory
          value={value}
          changeHandler={changeHandler}
          options={field.options}
        />
      );
    }
    case "date": {
      return (
        <ModifyCellDateFactory
          value={value}
          changeHandler={changeHandler}
          options={field.options}
        />
      );
    }
  }
};
