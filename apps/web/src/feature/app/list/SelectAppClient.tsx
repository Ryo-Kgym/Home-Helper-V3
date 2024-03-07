/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import type { LinkProps } from "@components/atoms/Card";
import type { GetApplicationsQuery } from "@v3/graphql/public/type";
import { LinkList } from "@components/atoms/Card";

export const SelectAppClient = ({ data }: { data: GetApplicationsQuery }) => {
  const linkListProps: LinkProps[] = [
    { href: "/group", label: "戻る", back: true } as LinkProps,
    { href: "/app/create", label: "Create App" } as LinkProps,
  ].concat(
    data?.group.map(({ app }) => ({
      href: app.topUrl,
      label: app.name,
    })) ?? [],
  );

  return <LinkList props={linkListProps} />;
};
