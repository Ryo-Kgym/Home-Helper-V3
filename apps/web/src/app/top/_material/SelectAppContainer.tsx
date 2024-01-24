/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import type { LinkProps } from "@components/atoms/Card";
import { useGetAppsQuery } from "@/turbo/graphql/public";
import { LinkList } from "@components/atoms/Card";
import { useGroup } from "@hooks/group/useGroup";

export const SelectAppContainer = () => {
  const { groupId } = useGroup();
  const [{ data }] = useGetAppsQuery({
    variables: { groupId },
  });

  const linkListProps: LinkProps[] = [
    { href: "/group", label: "戻る", back: true } as LinkProps,
  ].concat(
    data?.group.map(({ app }) => ({
      href: app.topUrl,
      label: app.name,
    })) ?? [],
  );

  return <LinkList props={linkListProps} />;
};
