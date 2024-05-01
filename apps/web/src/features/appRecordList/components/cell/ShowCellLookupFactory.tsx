import { RecordColumn } from "@oneforall/domain/schema/recordSchema";

export const ShowCellLookupFactory = ({
  options,
}: {
  options: RecordColumn["options"];
}) => {
  return <div>{options?.label}</div>;
};
