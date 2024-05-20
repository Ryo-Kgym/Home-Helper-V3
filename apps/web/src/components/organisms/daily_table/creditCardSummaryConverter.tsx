import type { TableProps } from "@components/atoms/Table";
import type { GetCreditCardSummaryByDateQuery } from "@v3/graphql/household";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { IocomeType } from "@domain/model/household/IocomeType";

type Props = {
  data: GetCreditCardSummaryByDateQuery | undefined;
};
export const creditCardSummaryConverter = ({ data }: Props): TableProps[] => {
  return (
    data?.creditCardSummaries?.map((summary) => {
      return {
        keyPrefix: "creditCardSummary",
        columns: [
          { value: summary?.withdrawalDate as string, align: "center" },
          { value: summary?.creditCard },
          { value: summary?.account?.name },
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
