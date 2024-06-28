import { RecordFilters } from "@oneforall/domain/schema/filter/recordFiltersSchema";
import {
  recordColumnsSchema,
  Records,
  recordsSchema,
} from "@oneforall/domain/schema/recordSchema";

import { filterAppRecords } from "./filterAppRecords";

export const parseToRecords = (
  recordData: {
    id: string;
    index: number;
    columns: unknown;
  }[],
  filters: RecordFilters = {},
): Records => {
  const recordsData = Object.fromEntries(
    recordData.map((r) => [
      r.index,
      {
        recordId: r.id,
        columns: recordColumnsSchema.parse(r.columns),
        isEditing: false,
      },
    ]),
  );
  return Object.fromEntries(
    Object.entries(recordsSchema.parse(recordsData) ?? {}).filter(
      ([_, record]) => filterAppRecords(record.columns, filters),
    ),
  );
};
