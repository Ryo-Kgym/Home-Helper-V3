import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={"p-2"}>
      <div className={"text-3xl"}>アプリ設定</div>
      <div className={"space-y-2"}>{children}</div>
    </div>
  );
};

export default Layout;
