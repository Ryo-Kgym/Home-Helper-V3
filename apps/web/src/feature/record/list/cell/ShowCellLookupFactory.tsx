import type { FieldOptionsLookup } from "@feature/app/schema";

export const ShowCellLookupFactory = ({
  options,
}: {
  options: FieldOptionsLookup;
}) => {
  return <div>{options.label}</div>;
};
