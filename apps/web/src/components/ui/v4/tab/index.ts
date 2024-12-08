export { TailWindCssTabs as Tabs } from "~/components/ui/v4/tab/TailWindCssTabs";

/**
 * @package
 */ export type TabsProps<T extends string = string> = {
  tabs: Record<T, { label: string; Component: JSX.Element }>;
  defaultTab: T;
};
