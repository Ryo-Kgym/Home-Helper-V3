import type { ArgsMapType, BoxesType } from "./type";
import { featureSetting } from "./feature-setting";

export const generateBox = (boxes: BoxesType): React.ReactNode[] => {
  return boxes.map(({ feature, argsMap }, index) => {
    const { component: Component, argsTypes } = featureSetting[feature];
    const props = {};

    if (argsTypes.includes("year")) {
      appendProps({
        argsMap,
        props,
        key: "year",
        callback: (type) => {
          const year = new Date();
          year.setFullYear(year.getFullYear() + type.value);
          return year;
        },
      });
    }

    if (argsTypes.includes("month")) {
      appendProps({
        argsMap,
        props,
        key: "month",
        callback: (type) => {
          const month = new Date();
          month.setMonth(month.getMonth() + type.value);
          return month;
        },
      });
    }

    return <Component key={index} {...props} />;
  });
};

const appendProps = ({
  props,
  argsMap,
  key,
  callback,
}: {
  props: unknown;
  argsMap: ArgsMapType[];
  key: string;
  callback: (props: ArgsMapType) => unknown;
}) => {
  const type = argsMap.filter((arg) => arg.type === key)?.[0];
  if (!type) throw new Error(`${key} type is required`);

  return Object.defineProperty(props, key, {
    value: callback(type),
    enumerable: true,
  });
};
