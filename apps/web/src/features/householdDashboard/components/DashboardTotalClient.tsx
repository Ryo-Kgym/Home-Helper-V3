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
    <div className={styles.module}>
      <div>資産合計</div>
      <div className={styles.body}>
        <div className={styles.detail}>
          <span>現金</span>
          <span>{cash.toLocaleString()}</span>
        </div>
        <div className={styles.detail}>
          <span>投資</span>
          <span>{investment.toLocaleString()}</span>
        </div>
        <div />
        <div className={styles.detail}>
          <span>合計</span>
          <span>{total.toLocaleString()}</span>
        </div>
        <div />
        <div className={styles.detail}>
          <span> {currentDatetime.toLocaleString("ja-JP")} </span>
          <span>現在</span>
        </div>
      </div>
    </div>
  );
};
