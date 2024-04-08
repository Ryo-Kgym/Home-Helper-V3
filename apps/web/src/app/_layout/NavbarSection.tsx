/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

"use client";

import { AppShell, Burger, Group, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

import type { Navi } from "@app/_layout/navi";

export const NavbarSection = ({
  header,
  naviArray,
  children,
}: {
  header: string;
  naviArray: Navi[];
  children: React.ReactNode;
}) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 150,
        breakpoint: "sm",
        collapsed: { desktop: !opened, mobile: !opened },
      }}
    >
      <AppShell.Header className={"bg-blue-500"}>
        <Group h="100%" px="md">
          <div className={"text-2xl font-bold text-white"}>{header}</div>
          <Burger opened={opened} onClick={toggle} size="sm" />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar className={"bg-yellow-300"}>
        <AppShell.Section component={ScrollArea}>
          {naviArray
            .filter(({ visible = true }) => visible)
            .map((navi, index) => (
              <Link key={`menu-${index}`} href={navi.url}>
                <button
                  className={
                    "my-1 w-full bg-inherit p-3 hover:font-bold max-sm:text-center"
                  }
                  onClick={() => {
                    // widthがsm以下の場合は、メニューを閉じる
                    if (window.innerWidth < 640) toggle();
                  }}
                >
                  {navi.icon && <div>{navi.icon}</div>}
                  <div>{navi.label}</div>
                </button>
              </Link>
            ))}
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
