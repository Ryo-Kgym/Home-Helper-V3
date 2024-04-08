import { ShowCellDateFactory } from "@feature/record/list/cell/ShowCellDateFactory";
import { ShowCellLookupFactory } from "@feature/record/list/cell/ShowCellLookupFactory";
import { ShowCellSelectBoxFactory } from "@feature/record/list/cell/ShowCellSelectBoxFactory";

import type { Field } from "@feature/app/schema";
import type { RecordColumn } from "@feature/app/schema/record-schema";

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
  }
  return <div>{column.value}</div>;
};
