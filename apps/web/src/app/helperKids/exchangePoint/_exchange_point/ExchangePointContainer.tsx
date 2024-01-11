/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { Counter } from "@components/atoms/Counter/index";
import { TableProps } from "@components/atoms/Table/index";
import { ExchangeItem } from "@domain/model/helper_kids/ExchangeItem";
import { errorPopup, successPopup } from "@function/successPopup";
import { useGetExchangeItemsQuery } from "@graphql/hasura/generated/hasuraHelperKidsGraphql";
import { useGroup } from "@hooks/group/useGroup";
import { useExchangeHelpPoints } from "@hooks/help_point/useExchangeHelpPoints";
import { useGetHelperKid } from "@hooks/help_point/useHelperKidPoint";
import { useEffect, useState } from "react";
import { ExchangePointPresenter } from "./ExchangePointPresenter";

export const ExchangePointContainer = () => {
  const [totalPoint, setTotalPoint] = useState(0);
  const [exchangeItemMap, setExchangeItemMap] = useState<
    Map<string, ExchangeItem>
  >(new Map());
  const [forceReset, setForceReset] = useState(false);

  const { groupId } = useGroup();
  const [{ data: exchangeItemsData }] = useGetExchangeItemsQuery({
    variables: { groupId },
  });
  const { getCurrentPoint } = useGetHelperKid();
  const { exchangeHelpPoints } = useExchangeHelpPoints({
    exchangeItemMap,
  });

  const handleExchangeHelps = async () => {
    if (totalPoint === 0) {
      errorPopup("少なくとも一つの選んでください。");
      return;
    }

    try {
      await exchangeHelpPoints();
      setForceReset(!forceReset);
      successPopup("登録しました");
    } catch (e) {
      console.log(e);
      errorPopup("登録に失敗しました");
    }
  };

  useEffect(() => {
    setTotalPoint(0);
    setExchangeItemMap(new Map());
  }, [forceReset]);

  const exchangeItems: TableProps[] =
    exchangeItemsData?.exchangeItems.map(({ id, name, point }) => {
      return {
        keyPrefix: "exchangePoint",
        columns: [
          { value: name },
          { value: point },
          {
            value: (
              <Counter
                defaultValue={0}
                setCountHandler={(diffCount, count) => {
                  setTotalPoint(totalPoint + diffCount * point);
                  exchangeItemMap.set(id, { id, point, count });
                  setExchangeItemMap(exchangeItemMap);
                }}
                forceReset={forceReset}
              />
            ),
          },
        ],
      };
    }) ?? [];

  return (
    <ExchangePointPresenter
      currentPoint={getCurrentPoint()}
      totalUsePoint={totalPoint}
      handleRequest={handleExchangeHelps}
      handleRegisterAfterProcess={() => {}}
      tableProps={exchangeItems}
    />
  );
};
