import type { RecordList } from "@feature/app/schema/record-schema";
import type { GetRecordsQuery } from "@v3/graphql/public/type";
import { recordSchema } from "@feature/app/schema";
import { recordListSchema } from "@feature/app/schema/record-schema";

export const convertToRecords = async (
  recordData: GetRecordsQuery,
): Promise<RecordList> => {
  const recordsData = recordData.records.reduce(
    (acc, r) =>
      ({
        ...acc,
        [r.index!.toString()]: recordSchema.parse(
          JSON.parse(r.columns ?? "{}"),
        ),
      }) as RecordList,
    {},
  );
  return recordListSchema.parse(recordsData);
};
