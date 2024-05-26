import { columnsSchema, Records, recordsSchema } from "../schema/recordSchema";

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
        columns: columnsSchema.parse(r.columns),
        isEditing: false,
      },
    ]),
  );
  return recordsSchema.parse(recordsData) ?? {};
};
