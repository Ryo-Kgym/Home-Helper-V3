import { useGetDashboardSettingQuery } from "@v3/graphql/household";

import type { ArgsMapType, ArgsType, BoxesType, Feature } from "./type";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { useSaveUserId } from "~/hooks/user/useSaveUserId";
import { generateBox } from "./generate-box";

export const useGetDashboardBoxes = () => {
  const { userId } = useSaveUserId();
  const { groupId } = useSaveGroupId();

  const [{ data }] = useGetDashboardSettingQuery({
    variables: {
      userId,
      groupId,
    },
  });

  const setting: BoxesType =
    data?.setting.map((s) => {
      return {
        feature: s.feature as Feature,
        argsMap: s.args.map((a) => valueConverter[a.type as ArgsType](a.value)),
      };
    }) ?? [];

  const getBoxNodes = (): React.ReactNode[] => generateBox(setting);

  return { getBoxNodes, setting };
};

const valueConverter: {
  [type in ArgsType]: (value: string) => ArgsMapType;
} = {
  year: (value: string) => ({
    type: "year",
    value: Number(value),
  }),
  month: (value: string) => ({
    type: "month",
    value: Number(value),
  }),
};
