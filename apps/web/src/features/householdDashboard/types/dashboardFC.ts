import type { FC } from "react";

export type DashboardComponentProps = {
  dashboardSettingId: string;
  dashboardSettingArgs: { id: string; type: string; value: string }[];
};

export type DashboardFC = FC<DashboardComponentProps>;
