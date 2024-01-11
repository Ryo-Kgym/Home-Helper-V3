/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { useRouter } from "next/navigation";
import { useGetHelperKidsQuery } from "@/turbo/graphql/helperKids";
import { HelperKid } from "@domain/model/helper_kids/HelperKid";
import { useGroup } from "@hooks/group/useGroup";
import { useHelperKidHolder } from "@hooks/user/useHelperKidHolder";

import { SelectKidPresenter } from "./SelectKidPresenter";

export const SelectKidContainer = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { push } = useRouter();
  const { groupId } = useGroup();
  const { save } = useHelperKidHolder();
  const [{ data }] = useGetHelperKidsQuery({ variables: { groupId } });

  const kids: HelperKid[] =
    data?.helperKid.map(({ id, name, nameSuffix }) =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      HelperKid.of(id, name, nameSuffix),
    ) ?? [];

  const saveKidHandler = (id: string) => {
    save({ id });
    push("/helperKids/chargePoint");
  };

  return <SelectKidPresenter kids={kids} saveKidHandler={saveKidHandler} />;
};
