import { FieldKind } from "@oneforall/domain/field/type";

export type AppListData = {
  label: string;
  value: string;
  fields: { label: string; value: string; fieldKind: FieldKind }[];
}[];
