import { Record } from "@oneforall/domain/schema/recordSchema";
import { SortDirection } from "@oneforall/domain/schema/sortDirectionSchema";

/**
 * @package
 */
export const sortLookupData = (
  a: Record,
  b: Record,
  sortFieldId: string,
  sortDirection: SortDirection,
) => {
  const aSortValue = a.columns[sortFieldId]?.value ?? "";
  const bSortValue = b.columns[sortFieldId]?.value ?? "";
  return sortDirection === "asc"
    ? aSortValue.localeCompare(bSortValue)
    : bSortValue.localeCompare(aSortValue);
};
