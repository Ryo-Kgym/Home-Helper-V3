import type { Field } from "@feature/app/schema";
import type { RecordColumn } from "@feature/app/schema/record-schema";
import { ShowCellLookupFactory } from "@feature/record/list/cell/ShowCellLookupFactory";

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
    case "lookup": {
      return <ShowCellLookupFactory options={field.options} />;
    }
  }
  return <div>{column.value}</div>;
};
