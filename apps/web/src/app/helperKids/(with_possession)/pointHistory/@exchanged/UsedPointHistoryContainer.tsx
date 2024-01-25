/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { useHelperKidHolder } from "@hooks/user/useHelperKidHolder";
import { useGetExchangedAchievementsByHelperKidIdQuery } from "@v3/graphql/helperKids";

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
              value:
                (exchangedAchievement.datetime as string)?.substring(0, 10) ??
                "",
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
