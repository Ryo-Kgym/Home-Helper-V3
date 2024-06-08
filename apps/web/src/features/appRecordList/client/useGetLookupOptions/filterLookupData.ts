import { judgeComplexity } from "@oneforall/domain/complexity/judgeComplexity";
import { FieldOptionsLookup } from "@oneforall/domain/schema/appSchema";
import { Record, RecordColumns } from "@oneforall/domain/schema/recordSchema";

/**
 * @package
 */
export const filterLookupData = (
  lookupRecord: Record,
  filters: FieldOptionsLookup["filters"],
  columns: RecordColumns,
): boolean => {
  if (Object.keys(filters).length === 0) return true;

  const source = Object.values(filters).map((filter) => {
    const lookupColumn = lookupRecord.columns[filter.fieldId];
    if (filter.filterType === "value") {
      return {
        complexity: filter.complexity,
        result: lookupColumn?.value === filter.value,
      };
    }
    // filterType === "field"
    else {
      return {
        complexity: filter.complexity,
        result: columns[filter.value]?.value === lookupColumn?.value,
      };
    }
  });

  return judgeComplexity(source);
};
