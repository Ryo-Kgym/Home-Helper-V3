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
        favoriteFilterId: "1",
      },
    },
  ];

  return <HouseholdDashboardClient items={items} />;
};
