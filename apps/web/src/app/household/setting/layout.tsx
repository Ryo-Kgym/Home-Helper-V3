/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { RoutingTabs } from "@components/ui";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <RoutingTabs
    defaultValue={"genre"}
    tabs={[
      {
        value: "genre",
        label: "ジャンル",
        url: "/household/setting/genre",
      },
      {
        value: "category",
        label: "カテゴリ",
        url: "/household/setting/category",
      },
      {
        value: "categoryAdd",
        label: "カテゴリ登録",
        url: "/household/setting/category/add",
      },
    ]}
  >
    {children}
  </RoutingTabs>
);

export default Layout;
