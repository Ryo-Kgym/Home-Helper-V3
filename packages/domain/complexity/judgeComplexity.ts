import { FilterComplexity } from "../schema/filterComplexitySchema";

export const judgeComplexity = (
  source: { complexity: FilterComplexity; result: boolean }[],
): boolean => {
  let ret = source[0]?.result ?? true;

  const sourceSecond = source.slice(1);

  for (const { complexity, result } of sourceSecond) {
    if (complexity === "and") {
      ret = ret && result;
    } else {
      ret = ret || result;
    }
  }

  return ret;
};
