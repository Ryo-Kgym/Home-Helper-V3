import { judgeComplexity } from "@oneforall/domain/complexity/judgeComplexity";
import { operate } from "@oneforall/domain/operation/operate";
import { RecordFilters } from "@oneforall/domain/schema/filter/recordFiltersSchema";
import { RecordColumns } from "@oneforall/domain/schema/recordSchema";

/**
 * @package
 */
export const filterAppRecords = (
  appRecordColumns: RecordColumns,
  filters: RecordFilters,
): boolean => {
  if (Object.keys(filters).length === 0) return true;

  const filterResult = Object.values(filters).map((filter) => ({
    complexity: filter.filterComplexity,
    result: operate(filter, appRecordColumns[filter.fieldId]?.value),
  }));

  return judgeComplexity(filterResult);
};
