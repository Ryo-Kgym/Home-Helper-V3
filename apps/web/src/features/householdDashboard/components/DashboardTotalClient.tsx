import { FC } from "react";

import styles from "./DashboardTotalClient.module.scss";

type Props = {
  cash: number;
  investment: number;
  total: number;
  currentDatetime: Date;
};

export const DashboardTotalClient: FC<Props> = ({
  cash,
  investment,
  total,
  currentDatetime,
}) => {
  return (
    <div>
      <div>資産合計</div>
      <div className={styles.body}>
        <div className={styles.detail}>現金: {cash}</div>
        <div className={styles.detail}>投資: {investment}</div>
      </div>
      <div className={styles.detail}>
        <span>合計</span>
        <span>{total}</span>
      </div>
      <div>Current Datetime: {currentDatetime.toLocaleString("ja-JP")}</div>
    </div>
  );
};
