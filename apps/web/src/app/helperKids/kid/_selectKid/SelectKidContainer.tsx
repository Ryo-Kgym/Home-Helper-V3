/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { HelperKid } from "@domain/model/helper_kids/HelperKid";
import { useGetHelperKidsQuery } from "@graphql/hasura/generated/hasuraHelperKidsGraphql";
import { useGroup } from "@hooks/group/useGroup";
import { useHelperKidHolder } from "@hooks/user/useHelperKidHolder";
import { useRouter } from "next/navigation";
import { SelectKidPresenter } from "./SelectKidPresenter";

export const SelectKidContainer = () => {
  const { push } = useRouter();
  const { groupId } = useGroup();
  const { save } = useHelperKidHolder();
  const [{ data }] = useGetHelperKidsQuery({ variables: { groupId } });

  const kids: HelperKid[] =
    data?.helperKid.map(({ id, name, nameSuffix }) =>
      HelperKid.of(id, name, nameSuffix),
    ) ?? [];

  const saveKidHandler = (id: string) => {
    save({ id });
    push("/helperKids/chargePoint");
  };

  return <SelectKidPresenter kids={kids} saveKidHandler={saveKidHandler} />;
};
