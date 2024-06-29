import { PropsWithChildren, ReactNode } from "react";

const Layout = ({
  modal,
  children,
}: PropsWithChildren<{ modal: ReactNode }>) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default Layout;
