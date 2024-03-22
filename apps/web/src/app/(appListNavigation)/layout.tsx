import type { ReactNode } from "react";
import { SelectApp } from "@feature/app/list";

const Layout = ({ children }: { children: ReactNode }) => (
  <div>
    <SelectApp />
    {children}
  </div>
);

export default Layout;
