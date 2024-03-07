/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import type { LinkProps } from "@components/atoms/Card";
import { LinkList } from "@components/atoms/Card";
import { useGetApplicationsQuery } from "@v3/graphql/public";

export const SelectAppClient = ({ groupId }: { groupId: string }) => {
  const [{ data }] = useGetApplicationsQuery({
    variables: { groupId },
  });

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
