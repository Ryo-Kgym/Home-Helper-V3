/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { Counter } from "@components/atoms/Counter/index";
import { TableProps } from "@components/atoms/Table/index";
import { HelpItem } from "@domain/model/helper_kids/HelpItem";
import { errorPopup, successPopup } from "@function/successPopup";
import { useGetHelpItemsQuery } from "@graphql/hasura/generated/hasuraHelperKidsGraphql";
import { useGroup } from "@hooks/group/useGroup";
import { useGetHelperKid } from "@hooks/help_point/useHelperKidPoint";
import { useRegisterHelpPoints } from "@hooks/help_point/useRegisterHelpPoints";
import { useEffect, useState } from "react";
import { ChargePointPresenter } from "./ChargePointPresenter";

export const ChargePointContainer = () => {
  const [totalPoint, setTotalPoint] = useState(0);
  const [helpItemMap, setHelpItemMap] = useState<Map<string, HelpItem>>(
    new Map(),
  );
  const [forceReset, setForceReset] = useState(false);

  const { groupId } = useGroup();
  const [{ data: helpItemsData }] = useGetHelpItemsQuery({
    variables: { groupId },
  });
  const { getCurrentPoint, getLastEarnedDatetime } = useGetHelperKid();
  const { registerHelpPoints } = useRegisterHelpPoints({
    helpItemMap,
    totalPoint,
  });

  const handleRegisterHelps = async () => {
    if (totalPoint === 0) {
      errorPopup("少なくとも一つの選んでください。");
      return;
    }

    try {
      await registerHelpPoints();
      setForceReset(!forceReset);
      successPopup("登録しました");
    } catch (e) {
      console.log(e);
      errorPopup("登録に失敗しました");
    }
  };

  useEffect(() => {
    setTotalPoint(0);
    setHelpItemMap(new Map());
  }, [forceReset]);

  const tableProps: TableProps[] =
    helpItemsData?.helpItems.map(({ id, name, point }) => ({
      keyPrefix: "charge-point",
      columns: [
        { value: name },
        { value: point },
        {
          value: (
            <Counter
              defaultValue={0}
              setCountHandler={(diffCount, count) => {
                setTotalPoint(totalPoint + diffCount * point);
                helpItemMap.set(id, { id, point, count });
                setHelpItemMap(helpItemMap);
              }}
              forceReset={forceReset}
            />
          ),
        },
      ],
    })) ?? [];

  return (
    <ChargePointPresenter
      fromDate={getLastEarnedDatetime()?.substring(0, 10) ?? ""}
      currentPoint={getCurrentPoint()}
      totalPoint={totalPoint}
      handleRegisterHelps={handleRegisterHelps}
      handleRegisterAfterProcess={() => {}}
      tableProps={tableProps}
    />
  );
};
