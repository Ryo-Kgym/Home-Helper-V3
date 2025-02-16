"use server";

import { UpdateCreditSummaryDocument } from "@v3/graphql/household/schema/mutation/v5/updateCreditSummary.generated";

import { execMutation } from "../../../persistence/database/server/execMutation";
import type { SummaryFormState } from "../types/summaryProps";

export const modifyCreditSummary = async (
  params: {
    id: string;
  } & SummaryFormState,
) => {
  const { data } = await execMutation(UpdateCreditSummaryDocument, {
    id: params.id,
    form: {
      creditCard: params.creditCard,
      withdrawalDate: params.withdrawalDate,
      accountId: params.accountId,
    },
  });

  if (!data) {
    throw new Error("Failed to update credit summary");
  }
};
