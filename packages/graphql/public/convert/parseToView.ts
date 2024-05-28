import {
  View,
  viewFieldsSchema,
  viewSchema,
} from "@oneforall/domain/schema/view/viewSchema";

export const parseToView = (
  view:
    | {
        id: string;
        name: string;
        viewFields: {
          id: string;
          name: string;
          index: number;
          fieldKind: string;
          options?: unknown;
        }[];
      }
    | undefined
    | null,
): View => {
  if (!view) {
    throw new Error("View not found");
  }

  const fieldsData = Object.fromEntries(
    view.viewFields.map((f) => [
      f.id,
      {
        id: f.id,
        fieldName: f.name,
        fieldKind: f.fieldKind,
        fieldIndex: f.index,
        options: f.options,
      },
    ]),
  );

  const fields = viewFieldsSchema.parse(fieldsData);

  return viewSchema.parse({
    id: view.id,
    name: view?.name ?? "",
    fields,
  });
};
