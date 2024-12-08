import { Field } from "@oneforall/domain/schema/appSchema";
import { RecordColumn } from "@oneforall/domain/schema/recordSchema";

import { ShowCellDateFactory } from "./ShowCellDateFactory";
import { ShowCellLookupFactory } from "./ShowCellLookupFactory";
import { ShowCellNumericFactory } from "./ShowCellNumericFactory";
import { ShowCellSelectBoxFactory } from "./ShowCellSelectBoxFactory";

export const ShowCell = ({
  field,
  column = {
    fieldKind: field.fieldKind,
    value: "",
  },
}: {
  field: Field;
  column: RecordColumn | undefined;
}) => {
  if (field.fieldKind !== column.fieldKind) {
    console.error(
      `fieldKind mismatch: ${field.fieldKind} !== ${column.fieldKind}`,
    );
    return null;
  }

  switch (field.fieldKind) {
    case "selectBox": {
      return (
        <ShowCellSelectBoxFactory
          value={column.value}
          options={field.options}
        />
      );
    }
    case "lookup": {
      return <ShowCellLookupFactory options={column.options} />;
    }
    case "date": {
      return (
        <ShowCellDateFactory value={column.value} options={field.options} />
      );
    }
    case "numeric": {
      return (
        <ShowCellNumericFactory value={column.value} options={field.options} />
      );
    }
  }
  return <div>{column.value}</div>;
};
