import { ComponentProps } from "react";
import { fetchDashboardSettings } from "@features/householdDashboard/server/fetchDashboardSettings";

import { HouseholdDashboardClient } from "./HouseholdDashboardClient";

export const HouseholdDashboardServer = async () => {
  const dashboardSettings = await fetchDashboardSettings();

  const items: ComponentProps<typeof HouseholdDashboardClient>["items"] =
    dashboardSettings.map((setting) => ({
      feature: setting.feature,
      dashboardSettingId: setting.id,
      args: setting.args,
    }));

  return <HouseholdDashboardClient items={items} />;
};
