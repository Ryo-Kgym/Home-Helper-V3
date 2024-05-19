import { FieldOptionsLookup } from "@oneforall/domain/schema/appSchema";
import { Record } from "@oneforall/domain/schema/recordSchema";

/**
 * @package
 */
export const filterLookupData = (
  lookupRecord: Record,
  filters: FieldOptionsLookup["filters"],
): boolean => {
  if (Object.keys(filters).length === 0) return true;

  for (const filter of Object.values(filters)) {
    const column = lookupRecord.columns[filter.fieldId];
    if (column?.value === filter.value) {
      return true;
    }
  }

  return false;
};
