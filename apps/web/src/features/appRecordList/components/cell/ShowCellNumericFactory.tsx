import type { FieldOptionsNumeric } from "@oneforall/domain/schema/appSchema";
import { formatThousandSeparator } from "@feature/app/function/formatThousandSeparator";

export const ShowCellNumericFactory = ({
  value,
  options,
}: {
  value: string;
  options: FieldOptionsNumeric;
}) => {
  return (
    <div>
      {formatThousandSeparator(value, options.thousandsSeparatorPosition)}
    </div>
  );
};
