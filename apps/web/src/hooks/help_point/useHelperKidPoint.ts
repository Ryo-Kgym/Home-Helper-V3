/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useHelperKidHolder } from "@/hooks/user/useHelperKidHolder";
import { useGetHelperKidByIdQuery } from "@/turbo/graphql/helperKids";
import { HelperKid } from "@domain/model/helper_kids/HelperKid";

export const useGetHelperKid = () => {
  const { helperKidId } = useHelperKidHolder();
  const [{ data: helperKidData }] = useGetHelperKidByIdQuery({
    variables: { helperKidId },
  });
  const helperKid = (): HelperKid =>
    helperKidData?.helperKid
      ? HelperKid.of(
          helperKidData.helperKid.id as string,
          helperKidData.helperKid.name,
          helperKidData.helperKid.nameSuffix,
        )
      : HelperKid.empty();

  const getEarnedPoint = () =>
    helperKidData?.earnedAgg.aggregate?.sum?.earnedPoint ?? 0;
  const getExchangedPoint = () =>
    helperKidData?.exchangedAgg.aggregate?.sum?.exchangeTotalPoint ?? 0;
  const getLastEarnedDatetime = () =>
    helperKidData?.earnedAgg.aggregate?.max?.earnedDatetime as string;

  return {
    helperKid,
    getEarnedPoint,
    getExchangedPoint,
    getCurrentPoint: () => getEarnedPoint() - getExchangedPoint(),
    getLastEarnedDatetime,
  };
};
