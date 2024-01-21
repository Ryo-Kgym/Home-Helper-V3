import {
  useDeleteDailyDetailBySerialNoMutation,
  useUpdateDailyDetailByIdMutation,
} from "@/turbo/graphql/household";

import type { IocomeType } from "~/types/iocome-type";

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
