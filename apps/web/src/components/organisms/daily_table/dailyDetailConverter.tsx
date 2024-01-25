/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import type { TableProps } from "@components/atoms/Table/";
import type { IocomeType } from "@domain/model/household/IocomeType";
import type { GetDailyDetailByDateQuery } from "@v3/graphql/household";
import { FormatPrice } from "@components/molecules/FormatPrice";

type dailyDetailConverterArgs = {
  data: GetDailyDetailByDateQuery | undefined;
  onClickHandler?: (_: string) => void;
};
export const dailyDetailConverter = ({
  data,
  onClickHandler = () => undefined,
}: dailyDetailConverterArgs): TableProps[] => {
  return (
    data?.dailyDetailByDateList?.map((dailyDetail) => {
      return {
        keyPrefix: "dailyDetail",
        columns: [
          { value: dailyDetail?.date as string, align: "center" },
          {
            value: (
              <div>
                <div className={"text-xs text-gray-500"}>
                  {dailyDetail?.categoryByCategoryId?.genreByGenreId?.genreName}
                </div>
                <div>{dailyDetail?.categoryByCategoryId?.categoryName}</div>
              </div>
            ),
          },
          { value: dailyDetail?.accountByAccountId?.accountName },
          {
            value: (
              <FormatPrice
                price={dailyDetail?.amount as number}
                iocomeType={
                  dailyDetail?.categoryByCategoryId?.genreByGenreId
                    ?.iocomeType as IocomeType
                }
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
