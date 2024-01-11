/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

"use client";

import Split from "react-split";

type SplitPresenterProps = {
  first: React.ReactNode;
  second: React.ReactNode;
  size?: number;
};
export const SplitPresenter = ({
  first,
  second,
  size = 50,
}: {
  first: React.ReactNode;
  second: React.ReactNode;
  size?: number;
}) => (
  <Split
    className="flex"
    gutter={() => {
      const gutterElement = document.createElement("div");
      gutterElement.className = `w-[3px] bg-zinc-900 hover:cursor-col-resize hover:w-2 hover:bg-zinc-900 transition-all delay-100 duration-100 ease-in-out`;
      return gutterElement;
    }}
    // デフォルトのガター幅を無効にするために指定
    gutterStyle={() => ({})}
    sizes={[size, 100 - size]}
  >
    <div className="flex items-center justify-center">{first}</div>
    <div className="flex items-center justify-center">{second}</div>
  </Split>
);
