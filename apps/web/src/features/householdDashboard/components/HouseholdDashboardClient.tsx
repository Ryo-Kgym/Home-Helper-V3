import { FC } from "react";
import { DashboardFeature } from "@features/householdDashboard/types/dashboardFeature";

import { DashboardBalanceClient } from "./DashboardBalanceClient";
import { DashboardTotalClient } from "./DashboardTotalClient";
import styles from "./HouseholdDashboardClient.module.scss";
import { ItemCard } from "./ItemCard";

type Props = {
  items: {
    feature: DashboardFeature;
    dashboardSettingId: string;
    args: { id: string; type: string; value: string }[];
  }[];
};

export const HouseholdDashboardClient: FC<Props> = ({ items }) => {
  return (
    <div className={styles.module}>
      {items.map((item) => (
        <ItemCard key={item.dashboardSettingId} itemName={item.feature}>
          {item.feature === "balance" && <DashboardTotalClient {...item} />}
          {item.feature === "monthly" && <DashboardBalanceClient {...item} />}
        </ItemCard>
      ))}
    </div>
  );
};
