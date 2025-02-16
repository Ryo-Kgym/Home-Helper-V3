"use client";

import { LinkList } from "../../../components/atoms/Card";
import { useAuth } from "../../../hooks/authentication/useAuth";
import { saveUser } from "../../../persistence/browser/client";
import { paths } from "../../../routing/paths";
import type { Group } from "../types/group";
import type { User } from "../types/user";

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
