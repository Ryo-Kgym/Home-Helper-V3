/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { paths } from "@routing/paths";

import type { AppListType } from "./SelectAppServer";

export const SelectAppClient = ({ data }: { data: AppListType[] }) => {
  const { push } = useRouter();

  return (
    <div>
      <div className={"grid grid-cols-3"}>
        {[
          {
            label: "グループ選択へ",
            href: paths.group.select,
            back: true,
          },
          {
            label: "アプリ新規作成",
            href: paths.app.create,
          },
          {
            label: "アプリ一覧",
            href: "#",
          },
        ].map((app) => (
          <LinkBox key={app.label} app={app} onClick={() => push(app.href)} />
        ))}
      </div>
      <div>
        {data.map((app) => (
          <LinkBox key={app.label} app={app} onClick={() => push(app.href)} />
        ))}
      </div>
    </div>
  );
};

const LinkBox = ({
  app,
  onClick,
}: {
  app: AppListType;
  onClick: () => void;
}) => (
  <div>
    <button
      key={app.label}
      className={
        "w-full border-2 border-gray-300 bg-inherit py-3 hover:bg-blue-100"
      }
      onClick={onClick}
    >
      {app.back ? "<-" : ""} {app.label}
    </button>
  </div>
);
