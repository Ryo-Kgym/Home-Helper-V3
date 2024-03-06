import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { useGroup } from "@hooks/group/useGroup";
import { useGenerateId } from "@hooks/useGenerateId";
import { useUser } from "@hooks/user/useUser";
import { useInsertAppMutation } from "@v3/graphql/public";

export const useCreateApp = () => {
  const { generate } = useGenerateId();
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
      id: generate(),
      name: appName,
      fields: JSON.stringify(fields),
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
