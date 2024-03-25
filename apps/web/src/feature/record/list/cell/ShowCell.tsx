import type {
  FieldOptions,
  FieldOptionsLookup,
  Fields,
} from "@feature/app/schema";
import type { RecordColumn } from "@feature/app/schema/record-schema";
import { ShowCellLookupFactory } from "@feature/record/list/cell/ShowCellLookupFactory";

export const ShowCell = ({
  fieldId,
  fields,
  column,
  options,
}: {
  fieldId: string;
  fields: Fields;
  column: RecordColumn;
  options: FieldOptions;
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

  switch (field.fieldKind) {
    case "lookup": {
      return (
        <ShowCellLookupFactory
          column={column}
          options={options as FieldOptionsLookup}
        />
      );
    }
  }
  return <div>{column.value}</div>;
};
