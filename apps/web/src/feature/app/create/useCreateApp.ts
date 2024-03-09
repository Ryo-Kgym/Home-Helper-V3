import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { generateId } from "@feature/app/function/generate-id";
import { useGroup } from "@hooks/group/useGroup";
import { useUser } from "@hooks/user/useUser";
import { useInsertAppMutation } from "@v3/graphql/public";

export const useCreateApp = () => {
  const { userId } = useUser();
  const { groupId } = useGroup();
  const [res, mutation] = useInsertAppMutation();

  const createApp = async ({
    appName,
    fields,
  }: {
    appName: string;
    fields: AppFieldValue;
  }) => {
    await mutation({
      id: generateId(),
      name: appName,
      fields: JSON.stringify(
        Object.entries(fields).map(([key, f]) => ({
          id: generateId(),
          fieldIndex: parseInt(key),
          fieldName: f.fieldName,
          fieldKind: f.fieldKind,
        })),
      ),
      createUserId: userId,
      groupId,
    });
    if (res.error) {
      throw res.error;
    }
  };

  return {
    createApp,
  };
};
