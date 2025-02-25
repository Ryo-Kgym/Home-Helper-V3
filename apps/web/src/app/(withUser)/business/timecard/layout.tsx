import type { ReactNode } from "react";

import { paths } from "../../../../routing/paths";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <a
        style={{
          fontSize: "30px",
        }}
        href={paths.household.dashboard}
      >
        戻る
      </a>
      <div>{children}</div>
    </div>
  );
};

export const metadata = {
  title: "タイムカード",
  description: "勤怠のページ",
};

export default Layout;
