import type { RecordColumn } from "@feature/app/schema/record-schema";

export const ShowCell = ({ column }: { column: RecordColumn }) => {
  return <div>{column.value}</div>;
};
