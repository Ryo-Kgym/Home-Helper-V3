import {
  useCreateCreditCardDetailMutation,
  useCreateCreditCardSummaryMutation,
} from "@v3/graphql/household";

import { useGroup } from "../../../hooks/group/useGroup";
import { useGenerateId } from "../../../hooks/useGenerateId";
import { useUser } from "../../../hooks/user/useUser";
import { LoadFileProps } from "../types";
import { ImportFileType } from "../types/importFileType";

/**
 * @package
 */
export const useRegisterCreditCard = ({
  fileType,
}: {
  fileType: ImportFileType;
}) => {
  const { generate } = useGenerateId();
  const { userId } = useUser();
  const { groupId } = useGroup();

  const [, createCreditCardSummaryMutation] =
    useCreateCreditCardSummaryMutation();

  const [, createCreditCardDetailMutation] =
    useCreateCreditCardDetailMutation();

  const registerCreditCard = async ({
    summaryId,
    withdrawalDate,
    accountId,
    loadData,
  }: {
    summaryId: string;
    withdrawalDate: Date;
    accountId: string;
    loadData: LoadFileProps[];
  }) => {
    await createCreditCardSummaryMutation({
      id: summaryId,
      creditCard: fileType, // FIX_VALUE
      accountId: accountId,
      totalAmount: loadData.reduce((acc, cur) => acc + cur.amount, 0),
      count: loadData.length,
      withdrawalDate: withdrawalDate,
      groupId,
    });

    const detailVariableList = loadData.map((data) => ({
      id: generate(),
      ...data,
      summaryId,
      userId,
      groupId,
    }));

    await Promise.all(
      detailVariableList.map(async (detail) => {
        await createCreditCardDetailMutation(detail);
      }),
    );
  };

  return { registerCreditCard };
};
