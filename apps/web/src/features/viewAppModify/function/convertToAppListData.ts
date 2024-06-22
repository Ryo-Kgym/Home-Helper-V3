import { fieldKindSchema } from "@oneforall/domain/schema/appSchema";
import { GetAppFieldListQuery } from "@v3/graphql/public/type";

import { AppListData } from "../type/appListData";

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
