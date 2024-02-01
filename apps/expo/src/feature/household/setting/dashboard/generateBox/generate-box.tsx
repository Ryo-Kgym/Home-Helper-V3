import type { BoxesType } from "../type";
import { featureSetting } from "~/feature/household/setting/dashboard/feature-setting";

export const generateBox = (boxes: BoxesType): React.ReactNode[] => {
  return boxes.map(({ feature, argsMap }, index) => {
    const { component: Component, argsTypes } = featureSetting[feature];
    const props = {};

    if (argsTypes.includes("year")) {
      const type = argsMap.filter((arg) => arg.type === "year")?.[0];
      if (!type) throw new Error("year type is required");
      const year = new Date();
      year.setFullYear(year.getFullYear() + type.value);

      Object.defineProperty(props, "year", {
        value: year,
        enumerable: true,
      });
    }

    if (argsTypes.includes("month")) {
      const type = argsMap.filter((arg) => arg.type === "month")?.[0];
      if (!type) throw new Error("month type is required");
      const month = new Date();
      month.setMonth(month.getMonth() + type.value);

      Object.defineProperty(props, "month", {
        value: month,
        enumerable: true,
      });
    }

    return <Component key={index} {...props} />;
  });
};
