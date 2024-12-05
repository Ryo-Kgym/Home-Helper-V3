/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { LinkList } from "@components/atoms/Card";
import { Group } from "@domain/model/Group";
import { User } from "@domain/model/User";
import { useAuth } from "@hooks/authentication/useAuth";
import { useGroup } from "@hooks/group/useGroup";
import { useUser } from "@hooks/user/useUser";
import { paths } from "@routing/paths";
import { saveUser } from "persistence/browser/client";

export const SelectGroupContainer = ({
  user,
  groups,
}: {
  user: User;
  groups: Group[];
}) => {
  const { save: userSave } = useUser();
  const { save: groupSave } = useGroup();
  const { logout } = useAuth();

  const linkProps = [
    {
      href: "/",
      label: "Logout",
      back: true,
      handleClick: () => {
        void logout();
      },
    },
  ].concat(
    groups.map((group) => ({
      href: paths.household.dashboard,
      label: group.name,
      back: false,
      handleClick: async () => {
        userSave(user); // TODO 削除
        groupSave(group); // TODO 削除
        await saveUser({
          ...user,
          group,
        });
      },
    })) ?? [],
  );

  return <LinkList props={linkProps} />;
};
