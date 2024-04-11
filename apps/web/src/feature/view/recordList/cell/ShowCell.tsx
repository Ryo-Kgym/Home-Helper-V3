import { ShowCellDateFactory } from "@feature/view/recordList/cell/ShowCellDateFactory";
import { ShowCellLookupFactory } from "@feature/view/recordList/cell/ShowCellLookupFactory";
import { ShowCellSelectBoxFactory } from "@feature/view/recordList/cell/ShowCellSelectBoxFactory";
import { Field, RecordColumn } from "@oneforall/domain/schema";

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
