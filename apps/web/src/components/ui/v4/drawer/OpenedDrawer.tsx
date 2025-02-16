"use client";

import { useRouter } from "next/navigation";
import type { PropsWithChildren } from "react";

import { Drawer } from "./index";

export const OpenedDrawer = ({ children }: PropsWithChildren) => {
  const { back } = useRouter();

  return (
    <Drawer opened={true} onClose={back}>
      {children}
    </Drawer>
  );
};
