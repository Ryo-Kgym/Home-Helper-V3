"use client";

import { FC } from "react";
import { Loading } from "@components/ui/v5/loading/Loading";
import { useDashboardBalance } from "@features/householdDashboard/client/useDashboardBalance";

import styles from "./DashboardBalanceClient.module.scss";

type Props = {
  dashboardSettingId: string;
};

export const DashboardBalanceClient: FC<Props> = ({ dashboardSettingId }) => {
  const { loading, data } = useDashboardBalance({
    favoriteFilterId: dashboardSettingId,
  });

  if (loading) return <Loading />;

  return (
    <div className={styles.module}>
      <div>
        <div>合計</div>
        <div className={styles.totalBody}>
          <div className={styles.total}>
            <span>収入</span>
            <span>{data.income.total.toLocaleString()}</span>
          </div>
          <div className={styles.total}>
            <span>支出</span>
            <span>{data.outcome.total.toLocaleString()}</span>
          </div>
        </div>
      </div>
      <div>
        <div>明細</div>
        <div className={styles.body}>
          <div>
            {data.income.details.map((d) => (
              <div key={d.id} className={styles.detail}>
                <span>{d.name}</span>
                <span>{d.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div>
            {data.outcome.details.map((d) => (
              <div key={d.id} className={styles.detail}>
                <span>{d.name}</span>
                <span>{d.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
