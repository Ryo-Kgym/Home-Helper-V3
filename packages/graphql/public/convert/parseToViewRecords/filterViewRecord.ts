import { judgeComplexity } from "@oneforall/domain/complexity/judgeComplexity";
import { operate } from "@oneforall/domain/operation/operate";
import { ViewFilters } from "@oneforall/domain/schema/view/viewFilterSchema";
import { ViewRecordColumns } from "@oneforall/domain/schema/view/viewRecordSchema";

/**
 * @package
 */
export const filterViewRecord = (
  viewRecordColumns: ViewRecordColumns,
  filters: ViewFilters,
): boolean => {
  if (Object.keys(filters).length === 0) return true;

  const filterResult = Object.values(filters).map((filter) => ({
    complexity: filter.filterComplexity,
    result: operate(filter, viewRecordColumns[filter.fieldId]?.value),
  }));

  return judgeComplexity(filterResult);
};
