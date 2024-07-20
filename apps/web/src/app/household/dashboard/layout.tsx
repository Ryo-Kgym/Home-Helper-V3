import { ReactNode } from "react";

const Layout = ({
  chart,
  detailTable,
}: {
  chart: ReactNode;
  detailTable: ReactNode;
}) => {
  return (
    <div className="space-y-10">
      <div className="h-[40vh] rounded-lg bg-white p-4 shadow-md">{chart}</div>
      <div className="h-[40vh] rounded-lg bg-white p-4 shadow-md">
        {detailTable}
      </div>
    </div>
  );
};

export default Layout;
