import { convertDateStyle } from "@feature/app/function/convertDateStyle";
import { ViewRecordColumn } from "@oneforall/domain/schema/view/viewRecordSchema";
import { ViewField } from "@oneforall/domain/schema/view/viewSchema";

export const ViewRecordCell = ({
  viewField,
  column = {
    fieldKind: viewField.fieldKind,
    value: "",
  },
}: {
  viewField: ViewField;
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  column: ViewRecordColumn | undefined;
}) => {
  switch (viewField.fieldKind) {
    case "lookup": {
      return <div>{column.options?.label}</div>;
    }
    case "date": {
      return (
        <div>{convertDateStyle(column.value, viewField.options.format)}</div>
      );
    }
  }

  return <div>{column.value}</div>;
};
