/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import {
  useGetCreditCardDetailBySummaryIdQuery,
  useUpdateCreditCardSummaryTotalMutation,
} from "@graphql/hasura/generated/hasuraGraphql";

export const useUpdateCreditCardSummaryTotal = ({
  summaryId,
}: {
  summaryId: string;
}) => {
  const [{ data }] = useGetCreditCardDetailBySummaryIdQuery({
    variables: {
      id: summaryId,
    },
  });
  const [, mutation] = useUpdateCreditCardSummaryTotalMutation();

  const updateTotal = async () => {
    const count = data?.creditCardSummary?.creditCardDetails.length ?? 0;
    const totalAmount =
      data?.creditCardSummary?.creditCardDetails
        .map((d) => d.amount as number)
        .reduce((a, b) => a + b, 0) ?? 0;

    try {
      const { error } = await mutation({
        id: summaryId,
        totalAmount,
        count,
      });

      if (error) {
        console.error(error);
        throw new Error("UpdateCreditCardSummaryTotalMutationError");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return { updateTotal };
};
