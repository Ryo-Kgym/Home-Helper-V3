/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { SelectPageLayout } from "@app/_layout/SelectPageLayout";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <SelectPageLayout title={"アプリを選択してください"}>
    {children}
  </SelectPageLayout>
);

export default Layout;
