import type { FieldOptionsLookup } from "@feature/app/schema";
import { useGetLookupOptions } from "@feature/record/list/cell/useGetLookupOptions";

export const ShowCellLookupFactory = ({
  value,
  options,
}: {
  value: string;
  options: FieldOptionsLookup;
}) => {
  const { lookupData } = useGetLookupOptions({ options });
  const label = lookupData.find((d) => d.value === value)?.label ?? "";
  return <div>{label}</div>;
};
