import type { Records } from "@feature/app/schema/record-schema";
import { recordSchema } from "@feature/app/schema";
import { recordsSchema } from "@feature/app/schema/record-schema";

import type { GetAppQuery } from "../../../../../../packages/graphql/public/type";

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
  return recordsSchema.parse(recordsData);
};
