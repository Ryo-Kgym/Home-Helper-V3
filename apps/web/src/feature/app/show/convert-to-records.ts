import type { Records } from "@feature/app/schema/record-schema";
import type { GetRecordsQuery } from "@v3/graphql/public/type";
import { recordSchema } from "@feature/app/schema";
import { recordsSchema } from "@feature/app/schema/record-schema";

export const convertToRecords = (recordData: GetRecordsQuery): Records => {
  const recordsData = recordData.records.reduce(
    (acc, r) =>
      ({
        ...acc,
        [r.index]: {
          recordId: r.id,
          columns: recordSchema.parse(JSON.parse(r.columns ?? "{}")),
        },
      }) as Records,
    {},
  );
  return recordsSchema.parse(recordsData);
};
