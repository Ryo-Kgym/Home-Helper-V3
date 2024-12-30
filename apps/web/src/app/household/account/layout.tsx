import { ReactNode } from "react";

import { ResponsiveSwitcher } from "../_layout/ResponsiveSwitcher";

const Layout = ({
  balance,
  daily,
}: {
  balance: ReactNode;
  daily: ReactNode;
}) => {
  return <ResponsiveSwitcher first={balance} second={daily} size={25} />;
};

export default Layout;
