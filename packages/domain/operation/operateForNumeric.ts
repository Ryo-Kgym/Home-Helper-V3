import { RecordFilter } from "../schema/filter/recordFiltersSchema";

export const operateForNumeric = (filter: RecordFilter, value: number) => {
  switch (filter.operator) {
    case "eq": {
      return value === Number(filter.value);
    }
    case "neq": {
      return value !== Number(filter.value);
    }
    case "lt": {
      return value < Number(filter.value);
    }
    case "lte": {
      return value <= Number(filter.value);
    }
    case "gt": {
      return value > Number(filter.value);
    }
    case "gte": {
      return value >= Number(filter.value);
    }
    case "in": {
      return filter.value
        .split(",")
        .map((v) => Number(v))
        .includes(value);
    }
    case "nin": {
      return !filter.value
        .split(",")
        .map((v) => Number(v))
        .includes(value);
    }
    case "like": {
      return value.toString().includes(filter.value);
    }
    case "nlike": {
      return !value.toString().includes(filter.value);
    }
    default: {
      return false;
    }
  }
};
