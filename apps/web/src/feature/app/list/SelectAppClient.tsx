/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import type { LinkProps } from "@components/atoms/Card";
import { LinkList } from "@components/atoms/Card";
import { paths } from "@routing/paths";

export const SelectAppClient = ({ data }: { data: LinkProps[] }) => {
  return (
    <LinkList
      props={[
        {
          label: "戻る",
          href: paths.group.select,
          back: true,
        },
        {
          label: "アプリ新規作成",
          href: paths.app.create,
        },
      ].concat(data)}
    />
  );
};
