import type { Records } from "@oneforall/domain/schema/record-schema";
import type { GetAppQuery } from "@v3/graphql/public";
import { columnsSchema } from "@oneforall/domain/schema";
import { recordsSchema } from "@oneforall/domain/schema/record-schema";

export const convertToRecords = (
  recordData: NonNullable<GetAppQuery["app"]>["records"],
): Records => {
  const recordsData = Object.fromEntries(
    recordData.map((r) => [
      r.index,
      {
        recordId: r.id,
        columns: columnsSchema.parse(r.columns),
        isEditing: false,
      },
    ]),
  );
  return recordsSchema.parse(recordsData) ?? {};
};
