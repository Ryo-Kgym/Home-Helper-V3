import type { FieldOptionsDate } from "@feature/app/schema";
import { convertDateStyle } from "@feature/app/function/convert-date-style";

export const ShowCellDateFactory = ({
  value,
  options,
}: {
  value: string;
  options: FieldOptionsDate;
}) => {
  return <div>{convertDateStyle(value, options.format)}</div>;
};
