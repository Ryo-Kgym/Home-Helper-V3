import { useGetDashboardSettingQuery } from "@v3/graphql/household";

import type { ArgsMapType, ArgsType, Feature, SettingProps } from "./type";
import type { GenreType } from "~/types/genre-type";
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

  const settings: SettingProps[] =
    data?.setting.map((s) => ({
      id: s.id,
      feature: s.feature as Feature,
      order: s.order,
      argsMap: s.args.map((a) => valueConverter[a.type as ArgsType](a.value)),
    })) ?? [];

  const getBoxNodes = (): React.ReactNode[] => generateBox(settings);

  return { getBoxNodes, settings };
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
  genreType: (value: string) => ({
    type: "genreType",
    value: value.split(",").map((s) => s as GenreType),
  }),
};
