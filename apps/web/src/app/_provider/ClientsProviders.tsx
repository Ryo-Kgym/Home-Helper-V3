"use client";

import { MantineProvider } from "@mantine/core";
import { Toaster } from "react-hot-toast";

// import { Provider as UrqlProvider } from "urql";

// import { datasource } from "./datasource";

// FIXME: Provider不要なはず
export const ClientsProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  // <UrqlProvider value={datasource}>
  <MantineProvider>
    {children}
    <Toaster />
  </MantineProvider>
  // </UrqlProvider>
);
