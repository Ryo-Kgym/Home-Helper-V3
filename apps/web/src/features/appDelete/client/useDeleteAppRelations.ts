import { useDeleteViewRelationsMutation } from "@v3/graphql/public";

export const useDeleteAppRelations = ({ appId }: { appId: string }) => {
  const [, mutation] = useDeleteViewRelationsMutation();

  const deleteAppRelations = async () => {
    const { error } = await mutation({ viewId: appId });

    if (error) {
      throw error;
    }
  };

  return { deleteAppRelations };
};
