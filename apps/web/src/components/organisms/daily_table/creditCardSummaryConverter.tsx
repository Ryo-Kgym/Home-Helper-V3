import type { TableProps } from "@components/atoms/Table";
import type { GetCreditCardSummaryBetweenWithdrawalDateQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { IocomeType } from "@domain/model/household/IocomeType";

type Props = {
  data: GetCreditCardSummaryBetweenWithdrawalDateQuery | undefined;
};
export const creditCardSummaryConverter = ({ data }: Props): TableProps[] => {
  return (
    data?.allCreditCardSummariesList?.map((summary) => {
      return {
        keyPrefix: "creditCardSummary",
        columns: [
          { value: summary?.withdrawalDate as string, align: "center" },
          { value: summary?.creditCard },
          { value: summary?.accountByAccountId?.accountName },
          {
            value: (
              <FormatPrice
                iocomeType={IocomeType.Outcome}
                price={summary?.totalAmount as number}
              />
            ),
            align: "right",
          },
          { value: "-" },
        ],
      };
    }) ?? []
  );
};
