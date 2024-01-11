/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import type { TabsProps } from "@components/ui";
import { Tabs } from "@mantine/core";

export const MobileTabs = ({ defaultSelect, tabPropsList }: TabsProps) => (
  <Tabs defaultValue={defaultSelect}>
    {tabPropsList.map(({ value, contents }, i) => (
      <Tabs.Panel value={value} key={"panel" + i}>
        {contents}
      </Tabs.Panel>
    ))}

    <Tabs.List className={"absolute bottom-0 left-0 h-16 w-full"}>
      {tabPropsList.map((tab, i) => (
        <Tabs.Tab
          className={`w-1/${tabPropsList.length} bg-gray-50 text-xl`}
          value={tab.value}
          leftSection={tab.icon}
          key={"tab" + i}
        >
          {tab.label}
        </Tabs.Tab>
      ))}
    </Tabs.List>
  </Tabs>
);
