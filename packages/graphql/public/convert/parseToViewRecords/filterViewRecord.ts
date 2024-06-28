import { judgeComplexity } from "@oneforall/domain/complexity/judgeComplexity";
import { operate } from "@oneforall/domain/operation/operate";
import { RecordFilters } from "@oneforall/domain/schema/filter/recordFiltersSchema";
import { ViewRecordColumns } from "@oneforall/domain/schema/view/viewRecordSchema";

/**
 * @package
 */
export const filterViewRecord = (
  viewRecordColumns: ViewRecordColumns,
  filters: RecordFilters,
): boolean => {
  if (Object.keys(filters).length === 0) return true;

  const filterResult = Object.values(filters).map((filter) => ({
    complexity: filter.filterComplexity,
    result: operate(filter, viewRecordColumns[filter.fieldId]?.value),
  }));

  return judgeComplexity(filterResult);
};
