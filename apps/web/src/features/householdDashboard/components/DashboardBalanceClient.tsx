import { FC } from "react";

import styles from "./DashboardBalanceClient.module.scss";

type Props = {
  itemName: string;
  income: Nominal;
  outcome: Nominal;
};

type Nominal = {
  total: number;
  details: {
    id: string;
    name: string;
    amount: number;
  }[];
};

export const DashboardBalanceClient: FC<Props> = ({
  itemName,
  income,
  outcome,
}) => {
  return (
    <div className={styles.module}>
      <div>{itemName}</div>
      <div>
        <div>合計</div>
        <div className={styles.totalBody}>
          <div className={styles.total}>
            <span>収入</span>
            <span>{income.total.toLocaleString()}</span>
          </div>
          <div className={styles.total}>
            <span>支出</span>
            <span>{outcome.total.toLocaleString()}</span>
          </div>
        </div>
      </div>
      <div>
        <div>明細</div>
        <div className={styles.body}>
          <div>
            {income.details.map((d) => (
              <div key={d.id} className={styles.detail}>
                <span>{d.name}</span>
                <span>{d.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div>
            {outcome.details.map((d) => (
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
