"use client";

import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";

import { Drawer } from "./index";

export const OpenedDrawer = ({ children }: PropsWithChildren) => {
  const { back } = useRouter();

  return (
    <Drawer opened={true} onClose={back}>
      {children}
    </Drawer>
  );
};
