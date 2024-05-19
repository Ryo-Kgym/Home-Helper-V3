import { FieldOptionsLookup } from "@oneforall/domain/schema/appSchema";
import { Columns, Record } from "@oneforall/domain/schema/recordSchema";

/**
 * @package
 */
export const filterLookupData = (
  lookupRecord: Record,
  filters: FieldOptionsLookup["filters"],
  columns: Columns,
): boolean => {
  if (Object.keys(filters).length === 0) return true;

  for (const filter of Object.values(filters)) {
    const lookupColumn = lookupRecord.columns[filter.fieldId];
    // フィルターの値が、columns に存在する場合、そのカラムの値を使って、フィルターを行う
    if (filter.value in columns) {
      if (columns[filter.value]?.value === lookupColumn?.value) {
        return true;
      }
    }

    if (lookupColumn?.value === filter.value) {
      return true;
    }
  }

  return false;
};
