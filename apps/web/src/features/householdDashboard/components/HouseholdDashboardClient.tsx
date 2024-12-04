"use client";

import { ComponentProps, FC } from "react";

import { DashboardBalanceClient } from "./DashboardBalanceClient";
import { DashboardTotalClient } from "./DashboardTotalClient";
import styles from "./HouseholdDashboardClient.module.scss";
import { ItemCard } from "./ItemCard";

type Props = {
  items: ({
    id: string;
  } & (
    | { type: "total"; props: ComponentProps<typeof DashboardTotalClient> }
    | { type: "balance"; props: ComponentProps<typeof DashboardBalanceClient> }
  ))[];
};

export const HouseholdDashboardClient: FC<Props> = ({ items }) => {
  return (
    <div className={styles.module}>
      {items.map((item) => (
        <ItemCard key={item.id}>
          {item.type === "total" && <DashboardTotalClient {...item.props} />}
          {item.type === "balance" && (
            <DashboardBalanceClient {...item.props} />
          )}
        </ItemCard>
      ))}
    </div>
  );
};
