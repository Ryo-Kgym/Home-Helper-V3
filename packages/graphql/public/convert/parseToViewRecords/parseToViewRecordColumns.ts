import { Record } from "@oneforall/domain/schema/recordSchema";
import { ViewApp } from "@oneforall/domain/schema/view/viewAppSchema";
import {
  ViewRecordColumns,
  viewRecordColumnSchema,
} from "@oneforall/domain/schema/view/viewRecordSchema";
import { ViewFields } from "@oneforall/domain/schema/view/viewSchema";

/**
 * @package
 */
export const parseToViewRecordColumns = (
  viewFields: ViewFields,
  viewAppFields: ViewApp["viewFields"],
  appRecord: Record,
): ViewRecordColumns =>
  Object.fromEntries(
    Object.values(viewFields).map((viewField) => {
      const appFieldId = viewAppFields[viewField.id]?.appFieldId ?? "";
      const appRecordColumn = appRecord.columns[appFieldId];
      const parsed = viewRecordColumnSchema.safeParse(appRecordColumn);

      if (!parsed.success) {
        return [
          viewField.id,
          {
            fieldKind: viewField.fieldKind,
            options: viewField.options,
            value: "", // データがない場合は空文字を入れる
          },
        ];
      }

      return [viewField.id, parsed.data];
    }),
  );
