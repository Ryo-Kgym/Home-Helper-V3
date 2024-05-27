import { generateId } from "@feature/app/function/generateId";
import { AppFieldValue } from "@oneforall/domain/schema/appFieldValue";
import { FieldUpdates, useUpdateAppMutation } from "@v3/graphql/public";

export const useModifyApp = ({ appId }: { appId: string }) => {
  const [, mutation] = useUpdateAppMutation();

  const modifyApp = async ({
    appName,
    fields,
  }: {
    appName: string;
    fields: AppFieldValue;
  }) => {
    const insertFields = Object.entries(fields)
      .filter(([, f]) => f.mode === "add")
      .map(([index, f]) => ({
        id: generateId(parseInt(index)),
        appId,
        name: f.fieldName,
        index: parseInt(index),
        fieldKind: f.fieldKind,
        options: f.options,
      }));

    const updateFields = Object.entries(fields)
      .filter(([, f]) => f.mode === "modify")
      .map(([index, f]) => {
        if (f.mode !== "modify") {
          // filterしているので、到達しない
          throw new Error("mode is not modify");
        }

        return {
          where: { id: { _eq: f.id } },
          _set: {
            name: f.fieldName,
            index: parseInt(index),
            fieldKind: f.fieldKind,
            options: f.options,
          },
        };
      }) as FieldUpdates[];

    const deleteFieldIds = Object.values(fields)
      .filter((f) => f.mode === "delete")
      .map((f) => {
        if (f.mode !== "delete") {
          // filterしているので、到達しない
          throw new Error("mode is not delete");
        }

        return f.id;
      });

    const { error } = await mutation({
      id: appId,
      name: appName,
      insertFields,
      updateFields,
      deleteFieldIds,
    });
    if (error) {
      throw error;
    }
  };

  return {
    modifyApp,
  };
};
