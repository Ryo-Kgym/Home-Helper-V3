import {
  recordColumnsSchema,
  Records,
  recordsSchema,
} from "../schema/recordSchema";

export const convertToRecords = (
  recordData: {
    id: string;
    index: number;
    columns: unknown;
  }[],
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
  return recordsSchema.parse(recordsData) ?? {};
};
