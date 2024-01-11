/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { Tabs } from "@mantine/core";
import { TabsProps } from "@components/ui";

export const MantineTabs = ({ defaultSelect, tabPropsList }: TabsProps) => {
  const normalClassName = "";
  const mobileClassName: string = "max-sm:text-sm max-sm:h-5 max-sm:p-0";

  return (
    <Tabs defaultValue={defaultSelect} className={"w-full justify-center"}>
      <Tabs.List grow>
        {tabPropsList.map((tab, i) => (
          <Tabs.Tab
            value={tab.value}
            leftSection={tab.icon}
            key={"tab" + i}
            className={`${normalClassName} ${mobileClassName}`}
          >
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {tabPropsList.map(({ value, contents }, i) => (
        <Tabs.Panel value={value} pt="lg" pb="lg" key={"panel" + i}>
          {contents}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};
