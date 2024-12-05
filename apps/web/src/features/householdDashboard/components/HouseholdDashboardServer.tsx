import { ComponentProps } from "react";

import { HouseholdDashboardClient } from "./HouseholdDashboardClient";

export const HouseholdDashboardServer = () => {
  const items: ComponentProps<typeof HouseholdDashboardClient>["items"] = [
    {
      type: "total",
      favoriteFilterId: "1",
      favoriteFilterName: "総資産",
    },
    {
      type: "balance",
      favoriteFilterId: "2",
      favoriteFilterName: "2024年12月の収支",
    },
  ];

  return <HouseholdDashboardClient items={items} />;
};
