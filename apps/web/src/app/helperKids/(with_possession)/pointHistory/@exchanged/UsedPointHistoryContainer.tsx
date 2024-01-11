/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { useGetExchangedAchievementsByHelperKidIdQuery } from "@graphql/hasura/generated/hasuraHelperKidsGraphql";
import { useHelperKidHolder } from "@hooks/user/useHelperKidHolder";
import { UsedPointHistoryPresenter } from "./UsedPointHistoryPresenter";

export const UsedPointHistoryContainer = () => {
  const { helperKidId } = useHelperKidHolder();

  const [{ data }] = useGetExchangedAchievementsByHelperKidIdQuery({
    variables: { helperKidId },
  });

  return (
    <UsedPointHistoryPresenter
      tableProps={
        data?.exchangedAchievements.map((exchangedAchievement) => ({
          keyPrefix: "exchangedPointHistory",
          columns: [
            {
              value: exchangedAchievement.datetime?.substring(0, 10) ?? "",
            },
            { value: exchangedAchievement.exchangeItem.name },
            { value: exchangedAchievement.count },
            {
              value:
                exchangedAchievement.point.toLocaleString() +
                process.env.NEXT_PUBLIC_POINT_UNIT,
            },
          ],
        })) ?? []
      }
    />
  );
};
