/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { LinkList } from "../../../components/atoms/Card";
import { Group } from "../../../domain/model/Group";
import { User } from "../../../domain/model/User";
import { useAuth } from "../../../hooks/authentication/useAuth";
import { saveUser } from "../../../persistence/browser/client";
import { paths } from "../../../routing/paths";

export const SelectGroupContainer = ({
  user,
  groups,
}: {
  user: User;
  groups: Group[];
}) => {
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
        await saveUser({
          ...user,
          group,
        });
      },
    })) ?? [],
  );

  return <LinkList props={linkProps} />;
};
