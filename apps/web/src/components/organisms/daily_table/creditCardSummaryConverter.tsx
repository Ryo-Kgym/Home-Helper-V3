import type { GetCreditCardSummaryByAccountIdQuery } from "@/turbo/graphql/household";
import type { TableProps } from "@components/atoms/Table";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { IocomeType } from "@domain/model/household/IocomeType";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  data: GetCreditCardSummaryByAccountIdQuery | undefined;
};
export const creditCardSummaryConverter = ({ data }: Props): TableProps[] => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
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
