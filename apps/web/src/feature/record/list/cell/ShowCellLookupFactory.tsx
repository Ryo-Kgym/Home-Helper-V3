import type { RecordColumn } from "@feature/app/schema";

export const ShowCellLookupFactory = ({
  options,
}: {
  options: RecordColumn["options"];
}) => {
  return <div>{options?.label}</div>;
};
