import { convertDateStyle } from "@feature/app/function/convertDateStyle";
import { formatThousandSeparator } from "@feature/app/function/formatThousandSeparator";
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
  column: ViewRecordColumn | undefined;
}) => {
  switch (viewField.fieldKind) {
    case "lookup": {
      return <div>{column.options?.label}</div>;
    }
    case "date": {
      return (
        <div className={"text-center"}>
          {convertDateStyle(column.value, viewField.options.format)}
        </div>
      );
    }
    case "numeric": {
      return (
        <div className={"text-right"}>
          {formatThousandSeparator(
            column.value,
            viewField.options.thousandsSeparatorPosition,
          )}
        </div>
      );
    }
  }

  return <div>{column.value}</div>;
};
