import type { Records } from "@feature/app/schema/record-schema";
import type { GetAppQuery } from "@v3/graphql/public";
import { recordSchema } from "@feature/app/schema";
import { recordsSchema } from "@feature/app/schema/record-schema";

export const convertToRecords = (
  recordData: NonNullable<GetAppQuery["app"]>["records"],
): Records => {
  const recordsData = Object.fromEntries(
    recordData.map((r) => [
      r.index,
      {
        recordId: r.id,
        columns: recordSchema.parse(r.columns),
        isEditing: false,
      },
    ]),
  );
  return recordsSchema.parse(recordsData) ?? {};
};
