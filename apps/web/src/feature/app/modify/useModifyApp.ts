import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { useUpdateAppMutation } from "@v3/graphql/public";

export const useModifyApp = ({ appId }: { appId: string }) => {
  const [, mutation] = useUpdateAppMutation();

  const modifyApp = async ({
    appName,
  }: {
    appName: string;
    fields: AppFieldValue;
  }) => {
    const { error } = await mutation({
      id: appId,
      name: appName,
      insertFields: [],
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
