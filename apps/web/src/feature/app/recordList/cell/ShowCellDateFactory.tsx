import { convertDateStyle } from "@feature/app/function/convert-date-style";

import type { FieldOptionsDate } from "@oneforall/domain/schema";

export const ShowCellDateFactory = ({
  value,
  options,
}: {
  value: string;
  options: FieldOptionsDate;
}) => {
  return <div>{convertDateStyle(value, options.format)}</div>;
};
