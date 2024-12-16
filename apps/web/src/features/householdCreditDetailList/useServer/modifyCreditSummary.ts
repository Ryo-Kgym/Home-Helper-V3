"use server";

import { UpdateCreditSummaryDocument } from "@v3/graphql/household/type";

import { execMutation } from "../../../persistence/database/server/execMutation";
import { SummaryFormState } from "../types/summaryProps";

export const modifyCreditSummary = async (
  params: {
    id: string;
  } & SummaryFormState,
) => {
  const { data, error } = await execMutation(UpdateCreditSummaryDocument, {
    id: params.id,
    form: {
      creditCard: params.creditCard,
      withdrawalDate: params.withdrawalDate,
      accountId: params.accountId,
    },
  });

  if (!data || error) {
    throw new Error("Failed to update credit summary");
  }
};
