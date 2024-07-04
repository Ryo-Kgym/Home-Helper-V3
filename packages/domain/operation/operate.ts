import { RecordFilter } from "../schema/filter/recordFiltersSchema";
import { operateForNumeric } from "./operateForNumeric";

// TODO filedKindごとに計算する
export const operate = (
  filter: RecordFilter,
  value: string | undefined = "",
) => {
  if (filter.fieldKind === "numeric") {
    return operateForNumeric(filter, Number(value));
  }

  switch (filter.operator) {
    case "eq": {
      return value === filter.value;
    }
    case "neq": {
      return value !== filter.value;
    }
    case "lt": {
      return value < filter.value;
    }
    case "lte": {
      return value <= filter.value;
    }
    case "gt": {
      return value > filter.value;
    }
    case "gte": {
      return value >= filter.value;
    }
    case "in": {
      return filter.value.split(",").includes(value);
    }
    case "nin": {
      return !filter.value.split(",").includes(value);
    }
    case "like": {
      return value.includes(filter.value);
    }
    case "nlike": {
      return !value.includes(filter.value);
    }
    default: {
      return false;
    }
  }
};
