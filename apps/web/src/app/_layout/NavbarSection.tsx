"use client";

import Link from "next/link";
import { Navi } from "@app/_layout/navi";
import { AppShell, Burger, Group, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const NavbarSection = ({
  header,
  naviArray,
  children,
}: {
  header: string;
  naviArray: Navi[];
  children: React.ReactNode;
}) => {
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 150,
        breakpoint: "sm",
        collapsed: { desktop: !opened, mobile: !opened },
      }}
    >
      <AppShell.Header bg={"blue"}>
        <Group h="100%" px="md">
          <div className={"text-2xl font-bold text-white"}>{header}</div>
          <Burger opened={opened} onClick={toggle} size="sm" />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar bg={"blue"}>
        <AppShell.Section component={ScrollArea}>
          {naviArray
            .filter(({ visible = true }) => visible)
            .map((navi, index) => (
              <Link key={`menu-${index}`} href={navi.url}>
                <button
                  className={
                    "my-1 w-full bg-inherit p-3 text-left font-bold text-white hover:bg-blue-700 hover:font-bold hover:text-white"
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
