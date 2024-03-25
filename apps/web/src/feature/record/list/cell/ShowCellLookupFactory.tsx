import type { FieldOptionsLookup, RecordColumn } from "@feature/app/schema";
import { useGetLookupOptions } from "@feature/record/list/cell/useGetLookupOptions";

export const ShowCellLookupFactory = ({
  column,
  options,
}: {
  column: RecordColumn;
  options: FieldOptionsLookup;
}) => {
  const { lookupData } = useGetLookupOptions({ options });
  const label = lookupData.find((d) => d.value === column.value)?.label ?? "";
  return <div>{label}</div>;
};
