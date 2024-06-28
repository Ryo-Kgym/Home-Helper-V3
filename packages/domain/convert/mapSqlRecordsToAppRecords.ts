import { FieldKind } from "../field/type";
import { Fields } from "../schema/appSchema";
import { FieldColumnMaps } from "../schema/linkDatabase/fieldColumnMapsSchema";
import { Record as AppRecord, Records } from "../schema/recordSchema";
import { SqlResult } from "../sql/types";
import { LookupRecords } from "../type/lookupRecords";

export const mapSqlRecordsToAppRecords = <T extends Record<string, unknown>>(
  sqlRecords: SqlResult<T>,
  fields: Fields,
  fieldColumnMaps: FieldColumnMaps,
  lookupRecords: LookupRecords,
): Records =>
  Object.fromEntries(
    sqlRecords.map((sqlRecord, index) => {
      const recordId = `${index}`;

      const retRecord: AppRecord = {
        recordId,
        isEditing: false,
        columns: Object.fromEntries(
          Object.values(fields).map((f) => {
            const { columnName } = fieldColumnMaps[f.id] ?? { columnName: "" };
            const value = columnName ? String(sqlRecord[columnName]) : "";

            return [
              f.id,
              {
                fieldKind: f.fieldKind,
                value,
                options: optionsAttribute(
                  f.fieldKind,
                  value,
                  lookupRecords[f.id] ?? {},
                ),
              },
            ];
          }),
        ),
      };

      return [recordId, retRecord];
    }),
  );

const optionsAttribute = (
  fieldKind: FieldKind,
  columnValue: string,
  lookupRecord: Record<string, string>,
) => {
  switch (fieldKind) {
    case "lookup": {
      return {
        label: lookupRecord[columnValue] ?? "",
      };
    }
    default: {
      return undefined;
    }
  }
};
