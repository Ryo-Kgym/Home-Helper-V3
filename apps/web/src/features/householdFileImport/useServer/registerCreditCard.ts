"use server";

import { CreateCreditCardDetailDocument } from "@v3/graphql/household/schema/mutation/create/CreateCreditCardDetail.generated";
import { CreateCreditCardSummaryDocument } from "@v3/graphql/household/schema/mutation/create/CreateCreditCardSummary.generated";

import { generateId } from "../../../function/generateId";
import { findUser } from "../../../persistence/browser/server/find-user";
import { execMutation } from "../../../persistence/database/server/execMutation";
import { LoadFileProps } from "../types";

export const registerCreditCard = async ({
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
  const {
    id: userId,
    group: { id: groupId },
  } = await findUser();

  await execMutation(CreateCreditCardSummaryDocument, {
    id: summaryId,
    creditCard: "クレジットカードCSV",
    accountId: accountId,
    totalAmount: loadData.reduce((acc, cur) => acc + cur.amount, 0),
    count: loadData.length,
    withdrawalDate: withdrawalDate,
    groupId,
  });

  const detailVariableList = loadData.map((data) => ({
    id: generateId(),
    ...data,
    summaryId,
    userId,
    groupId,
  }));

  const results = await Promise.all(
    detailVariableList.map(
      async (detail) =>
        await execMutation(CreateCreditCardDetailDocument, detail),
    ),
  );

  return {
    count: results.length,
  };
};
