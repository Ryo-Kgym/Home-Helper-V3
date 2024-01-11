import { useDeleteDailyDetailBySerialNoMutation } from "@/turbo/graphql/household";

type useDeleteDailyDetailBySerialNoArgs = {
  id: string;
};
export const useDeleteDailyDetailBySerialNo = ({
  id,
}: useDeleteDailyDetailBySerialNoArgs) => {
  const [, deleteMutation] = useDeleteDailyDetailBySerialNoMutation();

  const deleteHandler = async () => {
    await deleteMutation({
      id: id,
    });
  };

  return {
    deleteHandler,
  };
};
