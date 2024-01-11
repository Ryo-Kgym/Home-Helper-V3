/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

export { MantineTabs as Tab } from "./MantineTabs";
export { MobileTabs } from "./MobileTabs";

export type TabsProps = {
  defaultSelect: string;
  tabPropsList: TabProps[];
};

export type TabProps = {
  value: string;
  label: string;
  icon?: React.ReactNode;
  contents: React.ReactNode;
};
