import { judgeComplexity } from "@oneforall/domain/complexity/judgeComplexity";
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

  // TODO eq test
  const filterResult = Object.values(filters).map((filter) => ({
    complexity: filter.filterComplexity,
    result: viewRecordColumns[filter.fieldId]?.value === filter.value,
  }));

  return judgeComplexity(filterResult);
};
