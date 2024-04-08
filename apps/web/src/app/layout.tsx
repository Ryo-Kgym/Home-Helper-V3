/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import "../styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { ClerkProvider } from "@clerk/nextjs";
import { ColorSchemeScript } from "@mantine/core";
import { ClientsProviders } from "app/_provider/ClientsProviders";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "One for All",
  description: "アプリを作るアプリ",
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang={"ja"}>
    <head>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
      />
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
