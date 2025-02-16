"use client";

import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

import type { Navi } from "./navi";

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
        width: 180,
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
        <AppShell.Section>
          {naviArray
            .filter(({ visible = true }) => visible)
            .map((navi, index) => (
              <Link
                key={`menu-${
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  index
                }`}
                href={navi.url}
              >
                <button
                  className={
                    "my-1 w-full bg-inherit p-3 text-left font-bold text-white hover:bg-blue-700 hover:font-bold hover:text-white"
                  }
                  type="button"
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
