import { useDeleteDailyDetailBySerialNoMutation } from "@/turbo/graphql/household";

export const useDeleteDaily = () => {
  const [, deleteDailyMutation] = useDeleteDailyDetailBySerialNoMutation();

  const deleteDaily = async (id: string) => {
    const { error } = await deleteDailyMutation({
      id,
    });
    if (error) {
      throw error;
    }
  };

  return {
    deleteDaily,
  };
};
