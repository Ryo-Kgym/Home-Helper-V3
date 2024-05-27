import { MultiTextInput } from "@components/ui/v4/multiTextInput";
import { Select } from "@components/ui/v4/select";
import { TextInput } from "@components/ui/v4/textInput";
import { Field } from "@oneforall/domain/schema/appSchema";
import { Record, RecordColumn } from "@oneforall/domain/schema/recordSchema";

import { ModifyCellFactoryChangeHandler } from "./cellFactoryChangeHandler";
import { ModifyCellDateFactory } from "./ModifyCellDateFactory";
import { ModifyCellLookupFactory } from "./ModifyCellLookupFactory";
import { ModifyCellNumericFactory } from "./ModifyCellNumericFactory";

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
  record: Record;
  setRecord: (record: Record) => void;
  column: RecordColumn | undefined;
}) => {
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
          columns={record.columns}
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
    case "numeric": {
      return (
        <ModifyCellNumericFactory value={value} changeHandler={changeHandler} />
      );
    }
  }
};
