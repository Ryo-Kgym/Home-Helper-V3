/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import type { TableProps } from "@components/atoms/Table/";
import type { IocomeType } from "@domain/model/household/IocomeType";
import type {
  GetDailyByAccountIdQuery,
  GetDailyDetailByDateCategoryIdQuery,
} from "@v3/graphql/household";
import { FormatPrice } from "@components/molecules/FormatPrice";

type dailyDetailConverterArgs = {
  data:
    | GetDailyByAccountIdQuery
    | GetDailyDetailByDateCategoryIdQuery
    | undefined;
  onClickHandler?: (_: string) => void;
};
export const dailyDetailConverter = ({
  data,
  onClickHandler = () => undefined,
}: dailyDetailConverterArgs): TableProps[] => {
  return (
    data?.dailies?.map((dailyDetail) => {
      return {
        keyPrefix: "dailyDetail",
        columns: [
          { value: dailyDetail?.date as string, align: "center" },
          {
            value: (
              <div>
                <div className={"text-xs text-gray-500"}>
                  {dailyDetail?.genre.name}
                </div>
                <div>{dailyDetail?.category?.name}</div>
              </div>
            ),
          },
          { value: dailyDetail?.account?.name },
          {
            value: (
              <FormatPrice
                price={dailyDetail?.amount as number}
                iocomeType={dailyDetail?.genre.iocomeType as IocomeType}
              />
            ),
            align: "right",
          },
          { value: dailyDetail?.memo },
        ],
        onClick: () => {
          onClickHandler(dailyDetail?.id);
        },
      };
    }) ?? []
  );
};
