import { AppListData } from "@feature/view/modify/type/appListData";
import { fieldKindSchema } from "@oneforall/domain/schema/appSchema";
import { GetAppFieldListQuery } from "@v3/graphql/public/type";

export const convertToAppListData = (data: GetAppFieldListQuery): AppListData =>
  data?.group?.apps.map((a) => ({
    label: a.name,
    value: a.id,
    fields: a.fields.map((f) => ({
      value: f.id,
      label: f.name,
      fieldKind: fieldKindSchema.parse(f.fieldKind),
    })),
  })) ?? [];
