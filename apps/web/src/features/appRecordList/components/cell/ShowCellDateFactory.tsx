import type { FieldOptionsDate } from "@oneforall/domain/schema/appSchema";

import { convertDateStyle } from "../../../../feature/app/function/convertDateStyle";

export const ShowCellDateFactory = ({
  value,
  options,
}: {
  value: string;
  options: FieldOptionsDate;
}) => {
  return (
    <div className={"text-center"}>
      {convertDateStyle(value, options.format)}
    </div>
  );
};
