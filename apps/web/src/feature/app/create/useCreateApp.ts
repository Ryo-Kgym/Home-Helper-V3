import { AppFieldValue } from "@oneforall/domain/schema/appFieldValue";
import { useInsertAppMutation } from "@v3/graphql/public";

import { useGroup } from "~/hooks/group/useGroup";
import { useUser } from "~/hooks/user/useUser";
import { generateId } from "../function/generateId";

export const useCreateApp = () => {
  const { userId } = useUser();
  const { groupId } = useGroup();
  const [, mutation] = useInsertAppMutation();

  const createApp = async ({
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

    return { appId };
  };

  return {
    createApp,
  };
};
