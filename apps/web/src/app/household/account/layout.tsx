import { ReactNode } from "react";

import { ResponsiveSwitcher } from "../_layout/ResponsiveSwitcher";

const Layout = ({
  balance,
  detail,
}: {
  balance: ReactNode;
  detail: ReactNode;
}) => {
  return <ResponsiveSwitcher first={balance} second={detail} size={25} />;
};

export default Layout;
