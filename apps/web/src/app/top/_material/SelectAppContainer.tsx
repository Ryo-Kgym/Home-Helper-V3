/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { LinkProps, LinkList } from "@components/atoms/Card/index";
import { useGetApplicationByGroupIdQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";

export const SelectAppContainer = () => {
  const { groupId } = useGroup();
  const [{ data }] = useGetApplicationByGroupIdQuery({
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
