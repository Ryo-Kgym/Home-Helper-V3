import type { FieldKind } from "@oneforall/domain/field/type";

export type AppFieldValue = NonNullable<
  Record<
    number,
    | {
        fieldName: string;
        fieldKind: FieldKind;
        options: Record<string, never>;
        mode: "add";
      }
    | {
        fieldName: string;
        fieldKind: FieldKind;
        options: Record<string, never>;
        id: string;
        mode: "modify";
      }
  >
>;
