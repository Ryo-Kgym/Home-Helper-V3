export { TailWindCssRoutingTabs as RoutingTabs } from "./TailWindCssRoutingTabs";

/**
 * @package
 */
export type RoutingTabsProps<T extends string = string> = {
  tabs: Record<T, { label: string }>;
  currentTab: T;
};
