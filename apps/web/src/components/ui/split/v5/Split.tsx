"use client";

import type { ReactNode } from "react";
import ReactSplit from "react-split";

export const Split = ({
  first,
  second,
  size = 50,
}: {
  first: ReactNode;
  second: ReactNode;
  size?: number;
}) => (
  <ReactSplit
    className="flex"
    gutter={() => {
      const gutterElement = document.createElement("div");
      gutterElement.className =
        "w-[3px] bg-zinc-900 hover:cursor-col-resize hover:w-2 hover:bg-zinc-900 transition-all delay-100 duration-100 ease-in-out";
      return gutterElement;
    }}
    // デフォルトのガター幅を無効にするために指定
    gutterStyle={() => ({})}
    sizes={[size, 100 - size]}
  >
    <div className="flex justify-center">{first}</div>
    <div className="flex justify-center">{second}</div>
  </ReactSplit>
);
