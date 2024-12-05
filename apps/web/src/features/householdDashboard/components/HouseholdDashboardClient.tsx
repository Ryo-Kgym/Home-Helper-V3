import { FC } from "react";

import { DashboardBalanceClient } from "./DashboardBalanceClient";
import { DashboardTotalClient } from "./DashboardTotalClient";
import styles from "./HouseholdDashboardClient.module.scss";
import { ItemCard } from "./ItemCard";

type Props = {
  items: {
    type: "total" | "balance";
    favoriteFilterId: string;
    favoriteFilterName: string;
  }[];
};

export const HouseholdDashboardClient: FC<Props> = ({ items }) => {
  return (
    <div className={styles.module}>
      {items.map((item) => (
        <ItemCard
          key={item.favoriteFilterId}
          itemName={item.favoriteFilterName}
        >
          {item.type === "total" && <DashboardTotalClient {...item} />}
          {item.type === "balance" && <DashboardBalanceClient {...item} />}
        </ItemCard>
      ))}
    </div>
  );
};
