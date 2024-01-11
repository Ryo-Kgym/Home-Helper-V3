/*
 * Copyright (c) 2024 Ryo-Kgym.
 */
"use client";

import { Tab } from "@components/ui/Tabs/index";

const Layout = ({
  charged,
  exchanged,
}: {
  charged: React.ReactNode;
  exchanged: React.ReactNode;
}) => (
  <>
    <Tab
      defaultSelect={"charged"}
      tabPropsList={[
        {
          value: "charged",
          label: "ためた",
          contents: charged,
        },
        {
          value: "used",
          label: "つかった",
          contents: exchanged,
        },
      ]}
    />
  </>
);

export default Layout;
