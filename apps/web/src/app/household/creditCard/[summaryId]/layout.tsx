/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

const Layout = ({
  children,
  modify,
}: {
  children: React.ReactNode;
  modify: React.ReactNode;
}) => (
  <div>
    {children}
    {modify}
  </div>
);

export default Layout;
