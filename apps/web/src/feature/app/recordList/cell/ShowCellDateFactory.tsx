import type { FieldOptionsDate } from "@oneforall/domain/schema/recordSchema";
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
