import type { FieldOptionsNumeric } from "@oneforall/domain/schema/appSchema";

import { formatThousandSeparator } from "../../../../feature/app/function/formatThousandSeparator";

export const ShowCellNumericFactory = ({
  value,
  options,
}: {
  value: string;
  options: FieldOptionsNumeric;
}) => {
  return (
    <div className={"text-right"}>
      {formatThousandSeparator(value, options.thousandsSeparatorPosition)}
    </div>
  );
};
