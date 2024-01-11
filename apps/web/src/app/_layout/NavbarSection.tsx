/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

"use client";

import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group, ScrollArea } from "@mantine/core";
import { Navi } from "@app/_layout/navi";
import Link from "next/link";

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
          <div className={"font-bold text-2xl text-white"}>{header}</div>
          <Burger opened={opened} onClick={toggle} size="sm" />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar className={"bg-yellow-300"}>
        <AppShell.Section component={ScrollArea}>
          {naviArray
            .filter(({ visible = true }) => visible)
            .map((navi, index) => (
              <Link key={`menu-${index}`} href={navi.url}>
                <div
                  className={"p-3 my-1 hover:font-bold max-sm:text-center"}
                  onClick={() => {
                    // widthがsm以下の場合は、メニューを閉じる
                    if (window.innerWidth < 640) toggle();
                  }}
                >
                  {navi.icon && <div>{navi.icon}</div>}
                  <div>{navi.label}</div>
                </div>
              </Link>
            ))}
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
