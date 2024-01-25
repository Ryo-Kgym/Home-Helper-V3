/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

"use client";

import { MantineProvider } from "@mantine/core";
import { datasource } from "@v3/graphql";
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
