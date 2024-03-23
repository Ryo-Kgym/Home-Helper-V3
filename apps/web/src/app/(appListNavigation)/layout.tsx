import type { ReactNode } from "react";
import { SelectApp } from "@feature/app/list";

const Layout = ({ children }: { children: ReactNode }) => (
  <div>
    <SelectApp />
    <div className={"h-[80vh] overflow-y-scroll"}>{children}</div>
  </div>
);

export default Layout;
