/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { GetDailyDetailByDateQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { TableProps } from "@components/atoms/Table/";
import { IocomeType } from "@domain/model/household/IocomeType";

type dailyDetailConverterArgs = {
  data: GetDailyDetailByDateQuery | undefined;
  onClickHandler?: (_: string) => void;
};
export const dailyDetailConverter = ({
  data,
  onClickHandler = () => {},
}: dailyDetailConverterArgs): TableProps[] => {
  return (
    data?.dailyDetailByDateList?.map((dailyDetail) => {
      return {
        keyPrefix: "dailyDetail",
        columns: [
          { value: dailyDetail?.date, align: "center" },
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
                price={dailyDetail?.amount!}
                iocomeType={
                  dailyDetail?.categoryByCategoryId?.genreByGenreId
                    ?.iocomeType! as IocomeType
                }
              />
            ),
            align: "right",
          },
          { value: dailyDetail?.memo },
        ],
        onClick: () => {
          onClickHandler(dailyDetail?.id!);
        },
      };
    }) ?? []
  );
};
