"use client";

import { Loading } from "../../../components/ui/v5/loading/Loading";
import { useDashboardMonthly } from "../client/useDashboardMonthly";
import type { DashboardFC } from "../types/dashboardFC";
import styles from "./DashboardMonthlyClient.module.scss";

export const DashboardMonthlyClient: DashboardFC = ({
  dashboardSettingId,
  dashboardSettingArgs,
}) => {
  const { loading, data } = useDashboardMonthly({
    dashboardSettingId,
    dashboardSettingArgs,
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
          <div className={styles.nominal}>
            {data.income.details.map((d) => (
              <div key={d.id} className={styles.detail}>
                <span>{d.name}</span>
                <span>{d.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className={styles.nominal}>
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
