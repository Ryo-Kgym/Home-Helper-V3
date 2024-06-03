import React, { useState } from "react";
import { Select } from "@components/ui/v4/select";
import { ChartKind } from "@features/chart/types/chartKind";

import { chartRecord, FactoryComponentProps } from "./ChartFactoryClient";

/**
 * @package
 */
export const SwitchingChartsClient = ({
  data,
  colors,
}: FactoryComponentProps) => {
  const [selectedOption, setSelectedOption] = useState<ChartKind>("pieChart");

  const { FactoryComponent } = chartRecord[selectedOption];

  return (
    <>
      <Select
        data={Object.entries(chartRecord).map(([charKind, value]) => ({
          value: charKind as ChartKind,
          label: value.name,
        }))}
        label={"表示したいグラフ"}
        value={selectedOption}
        setValue={setSelectedOption}
      />
      <div>
        <FactoryComponent data={data} colors={colors} />
      </div>
    </>
  );
};
