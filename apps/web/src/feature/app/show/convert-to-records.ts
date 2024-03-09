import type { RecordList } from "@feature/app/schema/record-schema";
import type { GetRecordsQuery } from "@v3/graphql/public/type";
import { recordSchema } from "@feature/app/schema";

export const convertToRecords = (recordData: GetRecordsQuery) =>
  recordData.records.reduce(
    (acc, r) => ({
      ...acc,
      [r.appRecordOrder!.toString()]: recordSchema.parse(
        JSON.parse(r.columns ?? "{}"),
      ),
    }),
    {},
  ) as RecordList;
