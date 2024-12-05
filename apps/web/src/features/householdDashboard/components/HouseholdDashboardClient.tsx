import { FC } from "react";
import { DashboardComponentProps } from "@features/householdDashboard/types/dashboardFC";
import { DashboardFeature } from "@features/householdDashboard/types/dashboardFeature";

import { DashboardBalanceClient } from "./DashboardBalanceClient";
import { DashboardMonthlyClient } from "./DashboardMonthlyClient";
import styles from "./HouseholdDashboardClient.module.scss";
import { ItemCard } from "./ItemCard";

type Props = {
  items: ({
    feature: DashboardFeature;
  } & DashboardComponentProps)[];
};

export const HouseholdDashboardClient: FC<Props> = ({ items }) => {
  return (
    <div className={styles.module}>
      {items.map((item) => (
        <ItemCard key={item.dashboardSettingId} itemName={item.feature}>
          {item.feature === "balance" && <DashboardBalanceClient {...item} />}
          {item.feature === "monthly" && <DashboardMonthlyClient {...item} />}
        </ItemCard>
      ))}
    </div>
  );
};
