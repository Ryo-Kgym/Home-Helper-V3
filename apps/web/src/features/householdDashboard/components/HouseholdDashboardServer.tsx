import { ComponentProps } from "react";

import { HouseholdDashboardClient } from "./HouseholdDashboardClient";

export const HouseholdDashboardServer = () => {
  const items: ComponentProps<typeof HouseholdDashboardClient>["items"] = [
    {
      id: "1",
      type: "total",
      props: {
        cash: 100000,
        investment: 1000000,
        total: 1100000,
        currentDatetime: new Date("2024-01-01T00:00:00Z"),
      },
    },
    {
      id: "2",
      type: "balance",
      props: {
        itemName: "2024年12月の収支",
        income: {
          total: 1000000,
          details: [
            { id: "1", name: "給与", amount: 1000000 },
            { id: "2", name: "副業", amount: 0 },
            { id: "3", name: "売電", amount: 0 },
            { id: "4", name: "その他", amount: 0 },
          ],
        },
        outcome: {
          total: 900000,
          details: [
            { id: "1", name: "食費", amount: 100000 },
            { id: "2", name: "住居費", amount: 0 },
            { id: "3", name: "光熱費", amount: 0 },
            { id: "4", name: "交通費", amount: 0 },
            { id: "5", name: "通信費", amount: 0 },
            { id: "6", name: "保険料", amount: 0 },
          ],
        },
      },
    },
  ];

  return <HouseholdDashboardClient items={items} />;
};
