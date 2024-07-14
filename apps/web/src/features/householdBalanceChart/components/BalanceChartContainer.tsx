import { FC } from "react";
import { BalanceChart } from "@features/householdBalanceChart/components/BalanceChart";
import { useNavigation } from "@routing/client/useNavigation";

type Props = Pick<Parameters<typeof BalanceChart>[0], "data" | "settings">;

export const BalanceChartContainer: FC<Props> = ({ data, settings }) => {
  const { prependParamAndPush } = useNavigation();

  return (
    <BalanceChart
      data={data}
      settings={settings}
      onClick={(event) => {
        if (!event.activeLabel) {
          return;
        }
        prependParamAndPush({ key: "watch", value: event.activeLabel });
      }}
    />
  );
};
