import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { generateId } from "@feature/app/function/generate-id";
import { useUpdateAppMutation } from "@v3/graphql/public";

export const useModifyApp = ({ appId }: { appId: string }) => {
  const [, mutation] = useUpdateAppMutation();

  const modifyApp = async ({
    appName,
    fields,
  }: {
    appName: string;
    fields: AppFieldValue;
  }) => {
    const { error } = await mutation({
      id: appId,
      name: appName,
      insertFields: Object.entries(fields)
        .filter(([, f]) => f.mode === "add")
        .map(([index, f]) => ({
          id: generateId(parseInt(index)),
          appId,
          name: f.fieldName,
          index: parseInt(index),
          fieldKind: f.fieldKind,
          options: f.options,
        })),
      updateFields: [],
    });
    if (error) {
      throw error;
    }
  };

  return {
    modifyApp,
  };
};
