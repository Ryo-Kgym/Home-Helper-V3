import { useDeleteViewRelationsMutation } from "@v3/graphql/public";

export const useDeleteViewRelations = ({ viewId }: { viewId: string }) => {
  const [, mutation] = useDeleteViewRelationsMutation();

  const deleteViewRelations = async () => {
    const { error } = await mutation({ viewId });

    if (error) {
      throw error;
    }
  };

  return { deleteViewRelations };
};
