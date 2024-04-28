"server-only";

import {
  ImportFileHistory,
  previewColumnsSchema,
} from "@oneforall/domain/schema";
import { GetImportFileQuery } from "@v3/graphql/public/type";

export const convertToImportHistories = (
  data: GetImportFileQuery["importFileHistories"],
): ImportFileHistory[] =>
  data.map((h) => ({
    id: h.id,
    importDate: new Date(h.importDatetime),
    fileName: h.fileName,
    importCount: h.count,
    importFileRecords: Object.fromEntries(
      h.importFileRecords.map((r) => [
        r.record.index,
        {
          recordId: r.record.id,
          isEditing: false,
          columns: previewColumnsSchema.parse(r.record.columns),
        },
      ]),
    ),
  }));
