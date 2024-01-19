import { useCreateDailyDetailMutation } from "@/turbo/graphql/household";

import type { IocomeType } from "~/types/iocome-type";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { useSaveUserId } from "~/hooks/user/useSaveUserId";
import { convertToFullDate } from "~/persistence/converter/convert-to-full-date";
import { generateId } from "~/persistence/converter/generate-id";

export const useRegisterDaily = () => {
  const { userId } = useSaveUserId();
  const { groupId } = useSaveGroupId();

  const [, dailyRegistrationMutation] = useCreateDailyDetailMutation();

  const registerHandler = async ({
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
  }) =>
    await dailyRegistrationMutation({
      id: generateId(),
      date: convertToFullDate(date),
      iocomeType,
      genreId,
      categoryId,
      accountId,
      amount,
      memo,
      groupId,
      userId,
    });

  return {
    registerHandler,
  };
};
