import { LinkDatabase } from "@oneforall/domain/schema/linkDatabase/linkDatabaseSchema";
import { useUpdateLinkDatabaseMutation } from "@v3/graphql/public";

export const useUpdateLinkDatabase = (appId: string) => {
  const [, mutation] = useUpdateLinkDatabaseMutation();

  const updateLinkDatabase = async (linkDatabase: LinkDatabase) => {
    const { error } = await mutation({
      appId,
      input: {
        ...linkDatabase,
        appId,
      },
    });

    if (error) {
      throw new Error("Failed to update link database");
    }
  };

  return {
    updateLinkDatabase,
  };
};
