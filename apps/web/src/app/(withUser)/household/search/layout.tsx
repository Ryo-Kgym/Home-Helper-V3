import type { ReactNode } from "react";

const Layout = ({ form, list }: { form: ReactNode; list: ReactNode }) => {
  return (
    <div>
      {form}
      <div>{list}</div>
    </div>
  );
};

export default Layout;
