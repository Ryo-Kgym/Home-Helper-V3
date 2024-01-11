/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { HelperPointCountUp } from "./_helperPointCountUp";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={"w-full"}>
        <div className={"z-[100] absolute right-5 lg:top-5 max-lg:bottom-5"}>
          <div
            className={
              "border-double border-8 border-black rounded-full " +
              "text-right text-4xl w-60 p-5 bg-white "
            }
          >
            <HelperPointCountUp />
          </div>
        </div>
      </div>
      <>{children}</>
    </>
  );
};

export default Layout;
