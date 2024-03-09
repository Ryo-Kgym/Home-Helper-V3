/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import "../styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ColorSchemeScript } from "@mantine/core";
import { ClientsProviders } from "app/_provider/ClientsProviders";

export const metadata: Metadata = {
  title: "One for All",
  description: "アプリを作るアプリ",
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang={"ja"}>
    <head>
      <ColorSchemeScript />
    </head>
    <body>
      <ClerkProvider>
        <ClientsProviders>{children}</ClientsProviders>
      </ClerkProvider>
    </body>
  </html>
);

export default Layout;
