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

  // TODO complexity には対応しておらず、一律ORで判定している
  for (const filter of Object.values(filters)) {
    const lookupColumn = lookupRecord.columns[filter.fieldId];
    if (filter.filterType === "value") {
      if (lookupColumn?.value === filter.value) {
        return true;
      }
    }
    // フィルターの値が、columns に存在する場合、そのカラムの値を使って、フィルターを行う
    if (filter.filterType === "field") {
      if (columns[filter.value]?.value === lookupColumn?.value) {
        return true;
      }
    }
  }

  return false;
};
