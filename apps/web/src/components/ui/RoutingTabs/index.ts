/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import type { ReactNode } from "react";

export { MantineRoutingTabs as RoutingTabs } from "./MantineRoutingTabs";

export type RoutingTabsProps = {
  defaultValue: string;
  tabs: {
    label: string;
    value: string;
    url: string;
  }[];
  children: React.ReactNode | ReactNode[];
};
