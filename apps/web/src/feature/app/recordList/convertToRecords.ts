import type { Records } from "@oneforall/domain/schema/recordSchema/recordSchema";
import type { GetAppQuery } from "@v3/graphql/public";
import {
  columnsSchema,
  recordsSchema,
} from "@oneforall/domain/schema/recordSchema/recordSchema";

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
