import type { ReactNode } from "react";
import { SelectApp } from "@feature/app/list";
import { CurrentGroupServer } from "@feature/group/current/CurrentGroupServer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div>
    <CurrentGroupServer />
    <SelectApp />
    <div className={"h-[80vh] overflow-y-scroll"}>{children}</div>
  </div>
);

export default Layout;
