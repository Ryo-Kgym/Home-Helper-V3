import { columnsSchema } from "@oneforall/domain/schema";
import { recordsSchema } from "@oneforall/domain/schema/record-schema";
import type { Records } from "@oneforall/domain/schema/record-schema";
import type { GetViewQuery } from "@v3/graphql/public";

export const convertToRecords = (
  recordData: NonNullable<GetViewQuery["view"]>["records"],
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
