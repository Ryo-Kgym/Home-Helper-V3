/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import "../styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import { ClientsProviders } from "app/_provider/ClientsProviders";
import { ColorSchemeScript } from "@mantine/core";

// eslint-disable-next-line no-unused-vars
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
