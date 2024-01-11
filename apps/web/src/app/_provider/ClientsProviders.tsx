/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

"use client";

import { RecoilRoot } from "recoil";
import { datasource } from "@graphql/datasource";
import { MantineProvider } from "@mantine/core";
import { Toaster } from "react-hot-toast";
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
