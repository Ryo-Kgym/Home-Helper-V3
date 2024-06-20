import { useDeleteAppRelationsMutation } from "@v3/graphql/public";

export const useDeleteAppRelations = ({ appId }: { appId: string }) => {
  const [, mutation] = useDeleteAppRelationsMutation();

  const deleteAppRelations = async () => {
    const { error } = await mutation({ appId });

    if (error) {
      throw error;
    }
  };

  return { deleteAppRelations };
};
