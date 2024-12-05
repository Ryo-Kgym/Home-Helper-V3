"use client";

import { FC } from "react";
import { Loading } from "@components/ui/v5/loading/Loading";
import { useDashboardTotal } from "@features/householdDashboard/client/useDashboardTotal";

import styles from "./DashboardTotalClient.module.scss";

type Props = {
  favoriteFilterId: string;
};

export const DashboardTotalClient: FC<Props> = ({ favoriteFilterId }) => {
  const { loading, data } = useDashboardTotal({ favoriteFilterId });

  if (loading) return <Loading />;

  return (
    <div className={styles.module}>
      <div className={styles.body}>
        <div className={styles.detail}>
          <span>現金</span>
          <span>{data.cash.toLocaleString()}</span>
        </div>
        <div className={styles.detail}>
          <span>投資</span>
          <span>{data.investment.toLocaleString()}</span>
        </div>
        <div />
        <div className={styles.detail}>
          <span>合計</span>
          <span>{data.total.toLocaleString()}</span>
        </div>
        <div />
        <div className={styles.detail}>
          <span> {data.currentDatetime.toLocaleString("ja-JP")} </span>
          <span>現在</span>
        </div>
      </div>
    </div>
  );
};
