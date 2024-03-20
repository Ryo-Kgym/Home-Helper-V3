import type { Records } from "@feature/app/schema";

export const convertRecords = (data: string[][]): Records =>
  Object.fromEntries(
    data.map((row, i) => [
      i.toString(), // dummy
      {
        recordId: i.toString(), // dummy
        isEditing: false, // dummy
        columns: Object.fromEntries(
          row.map((c, j) => [j.toString(), { value: c, fieldKind: "text" }]),
        ),
      },
    ]),
  );
