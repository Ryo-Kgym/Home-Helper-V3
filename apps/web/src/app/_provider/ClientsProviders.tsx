"use client";

import { MantineProvider } from "@mantine/core";
import { Toaster } from "react-hot-toast";

export const ClientsProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <MantineProvider>
    {children}
    <Toaster />
  </MantineProvider>
);
