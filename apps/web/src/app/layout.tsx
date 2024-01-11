/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import "../styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ColorSchemeScript } from "@mantine/core";
import { ClientsProviders } from "app/_provider/ClientsProviders";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const metadata: Metadata = {
  title: "Home-Helper",
  description: "うちのアプリです",
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
