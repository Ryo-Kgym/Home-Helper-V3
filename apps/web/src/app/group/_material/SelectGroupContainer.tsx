/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { useAuth } from "@hooks/authentication/useAuth";
import { useGetGroup } from "@hooks/group/useGetGroup";
import { useGroup } from "@hooks/group/useGroup";
import { useUser } from "@hooks/user/useUser";
import { LinkList } from "@components/atoms/Card/index";

export const SelectGroupContainer = () => {
  const { save: userSave } = useUser();
  const { save: groupSave } = useGroup();
  const { user, groups: data } = useGetGroup();
  const { logout } = useAuth();

  const linkProps = [
    {
      href: "/",
      label: "Logout",
      back: true,
      handleClick: () => {
        logout();
      },
    },
  ].concat(
    data.map(({ group }) => ({
      href: "/top",
      label: group.name,
      back: false,
      handleClick: () => {
        userSave(user!);
        groupSave(group);
      },
    })) ?? [],
  );

  return <LinkList props={linkProps} />;
};
