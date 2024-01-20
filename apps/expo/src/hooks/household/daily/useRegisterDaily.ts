import { useCreateDailyDetailMutation } from "@/turbo/graphql/household";

import type { IocomeType } from "~/types/iocome-type";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { useGenerateId } from "~/hooks/id/useGenerateId";
import { useSaveUserId } from "~/hooks/user/useSaveUserId";

export const useRegisterDaily = () => {
  const { userId } = useSaveUserId();
  const { groupId } = useSaveGroupId();
  const { generateId } = useGenerateId();

  const [, dailyRegistrationMutation] = useCreateDailyDetailMutation();

  const registerDaily = async ({
    date,
    genreId,
    iocomeType,
    categoryId,
    accountId,
    amount,
    memo,
  }: {
    date: Date;
    genreId: string;
    iocomeType: IocomeType;
    categoryId: string;
    accountId: string;
    amount: number;
    memo: string | null;
  }) => {
    const { error } = await dailyRegistrationMutation({
      id: generateId(),
      date,
      iocomeType,
      genreId,
      categoryId,
      accountId,
      amount,
      memo,
      groupId,
      userId,
    });
    if (error) {
      throw error;
    }
  };

  return {
    registerDaily,
  };
};
