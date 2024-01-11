import { FormatPrice } from "@components/molecules/FormatPrice";
import { IocomeType } from "@domain/model/household/IocomeType";
import { GetCreditCardSummaryBetweenWithdrawalDateQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { TableProps } from "@components/atoms/Table";

type Props = {
  data: GetCreditCardSummaryBetweenWithdrawalDateQuery | undefined;
};
export const creditCardSummaryConverter = ({ data }: Props): TableProps[] => {
  return (
    data?.allCreditCardSummariesList?.map((summary) => {
      return {
        keyPrefix: "creditCardSummary",
        columns: [
          { value: summary?.withdrawalDate, align: "center" },
          { value: summary?.creditCard },
          { value: summary?.accountByAccountId?.accountName },
          {
            value: (
              <FormatPrice
                iocomeType={IocomeType.Outcome}
                price={summary?.totalAmount}
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
