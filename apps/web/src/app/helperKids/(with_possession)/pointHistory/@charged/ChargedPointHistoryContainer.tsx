/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { useGetEarnedDetailByHelperKidIdQuery } from "@graphql/hasura/generated/hasuraHelperKidsGraphql";
import { useHelperKidHolder } from "@hooks/user/useHelperKidHolder";
import { ChargedPointHistoryPresenter } from "./ChargedPointHistoryPresenter";

export const ChargedPointHistoryContainer = () => {
  const { helperKidId } = useHelperKidHolder();

  const [{ data }] = useGetEarnedDetailByHelperKidIdQuery({
    variables: { helperKidId },
  });

  return (
    <ChargedPointHistoryPresenter
      tableProps={
        data?.earnedAchievements.flatMap((earnedAchievement) =>
          earnedAchievement.details.flatMap((detail) => ({
            keyPrefix: "chargedPointHistory",
            columns: [
              {
                value: earnedAchievement.datetime?.substring(0, 10) ?? "",
              },
              { value: detail.helpItem.name },
              { value: detail.count },
              {
                value:
                  detail.point.toLocaleString() +
                  process.env.NEXT_PUBLIC_POINT_UNIT,
              },
            ],
          })),
        ) ?? []
      }
    />
  );
};
