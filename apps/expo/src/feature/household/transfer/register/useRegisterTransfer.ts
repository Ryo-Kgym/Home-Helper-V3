import { useRegisterDaily } from "~/hooks/household/daily/useRegisterDaily";
import { useGetTransferCategory } from "~/hooks/household/transfer/useGetTransferCategory";

export const useRegisterTransfer = () => {
  const { incomeCategory, outcomeCategory } = useGetTransferCategory();
  const { registerDaily } = useRegisterDaily();

  const registerTransfer = async ({
    date,
    fromAccountId,
    toAccountId,
    amount,
    memo,
  }: {
    date: Date;
    fromAccountId: string;
    toAccountId: string;
    amount: number;
    memo: string | null;
  }) => {
    try {
      await registerDaily({
        date,
        iocomeType: outcomeCategory.iocomeType,
        genreId: outcomeCategory.genreId,
        categoryId: outcomeCategory.id,
        accountId: fromAccountId,
        amount,
        memo,
      });
      await registerDaily({
        date,
        iocomeType: incomeCategory.iocomeType,
        genreId: incomeCategory.genreId,
        categoryId: incomeCategory.id,
        accountId: toAccountId,
        amount,
        memo,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return {
    registerTransfer,
  };
};
