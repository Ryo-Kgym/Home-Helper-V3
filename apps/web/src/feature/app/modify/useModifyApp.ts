import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { generateId } from "@feature/app/function/generate-id";
import { useGroup } from "@hooks/group/useGroup";
import { useUser } from "@hooks/user/useUser";
import { useInsertAppMutation } from "@v3/graphql/public";

export const useModifyApp = () => {
  const { userId } = useUser();
  const { groupId } = useGroup();
  const [, mutation] = useInsertAppMutation();

  const modifyApp = async ({
    appName,
    fields,
  }: {
    appName: string;
    fields: AppFieldValue;
  }) => {
    const appId = generateId();

    const { error } = await mutation({
      id: appId,
      name: appName,
      fields: Object.entries(fields).map(([index, f]) => ({
        id: generateId(parseInt(index)),
        appId,
        name: f.fieldName,
        index: parseInt(index),
        fieldKind: f.fieldKind,
        options: f.options,
      })),
      createUserId: userId,
      groupId,
    });
    if (error) {
      throw error;
    }
  };

  return {
    modifyApp,
  };
};
