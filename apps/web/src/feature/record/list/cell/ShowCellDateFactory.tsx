import { convertDateStyle } from "@feature/app/function/convert-date-style";

import type { FieldOptionsDate } from "@feature/app/schema";

export const ShowCellDateFactory = ({
  value,
  options,
}: {
  value: string;
  options: FieldOptionsDate;
}) => {
  return <div>{convertDateStyle(value, options.format)}</div>;
};
