/*
 * Copyright (c) 2024 Ryo-Kgym.
 */
"use client";

import { useRouter } from "next/navigation";
import { Tabs } from "@mantine/core";

import type { RoutingTabsProps } from "../RoutingTabs";

export const MantineRoutingTabs = ({
  defaultValue,
  tabs,
  children,
}: RoutingTabsProps) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { push } = useRouter();

  return (
    <>
      <Tabs>
        <Tabs.List defaultValue={defaultValue}>
          {tabs.map((tab) => (
            <Tabs.Tab
              key={tab.value}
              value={tab.value}
              onClick={() => {
                push(tab.url);
              }}
            >
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
      {children}
    </>
  );
};
