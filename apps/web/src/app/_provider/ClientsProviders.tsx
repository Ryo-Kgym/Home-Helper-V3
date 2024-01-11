/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

"use client";

import { datasource } from "@/turbo/graphql";
import { MantineProvider } from "@mantine/core";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import { Provider as UrqlProvider } from "urql";

export const ClientsProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <RecoilRoot>
    <UrqlProvider value={datasource}>
      <MantineProvider>
        {children}
        <Toaster />
      </MantineProvider>
    </UrqlProvider>
  </RecoilRoot>
);
