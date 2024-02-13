import type { ArgsMapType, SettingProps } from "./type";
import type { GenreType } from "~/types/genre-type";
import { featureSetting } from "./feature-setting";

export const generateBox = (
  settingPropsList: SettingProps[],
): React.ReactNode[] =>
  settingPropsList.map(({ feature, argsMap }, index) => {
    const { component: Component, argsTypes } = featureSetting[feature];
    const props = {};

    if (argsTypes.includes("year")) {
      appendProps({
        argsMap,
        props,
        key: "year",
        parseToProps: ({ value }) => {
          const year = new Date();
          year.setFullYear(year.getFullYear() + (value as number));
          return year;
        },
      });
    }

    if (argsTypes.includes("month")) {
      appendProps({
        argsMap,
        props,
        key: "month",
        parseToProps: ({ value }) => {
          const month = new Date();
          month.setMonth(month.getMonth() + (value as number));
          return month;
        },
      });
    }
    if (argsTypes.includes("genreType")) {
      appendProps({
        argsMap,
        props,
        key: "genreType",
        parseToProps: ({ value }): GenreType[] => {
          if (value === "FXD") return ["FIXED"];
          if (value === "FLC") return ["FLUCTUATION"];
          return ["FIXED", "FLUCTUATION"];
        },
      });
    }

    return <Component key={index} {...props} />;
  });

const appendProps = ({
  props,
  argsMap,
  key,
  parseToProps,
}: {
  props: unknown;
  argsMap: ArgsMapType[];
  key: string;
  parseToProps: (argsMapType: ArgsMapType) => unknown;
}) => {
  const argsMapType = argsMap.filter((arg) => arg.type === key)?.[0];
  if (!argsMapType) throw new Error(`${key} type is required`);

  return Object.defineProperty(props, key, {
    value: parseToProps(argsMapType),
    enumerable: true,
  });
};
