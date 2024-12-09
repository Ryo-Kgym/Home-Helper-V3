import { useState } from "react";

import { TabsProps } from "./index";

/**
 * @package
 */
export const TailWindCssTabs = ({ tabs, defaultTab }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<keyof typeof tabs>(defaultTab);

  return (
    <div>
      <div className={"flex justify-between"}>
        {Object.entries(tabs).map(([id, tab]) => (
          <button
            key={id}
            className={`w-full border-b-4 border-gray-300 bg-inherit p-2 text-center ${selectedTab === id ? "border-b-blue-500" : ""}`}
            onClick={() => setSelectedTab(id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[selectedTab]?.Component}</div>
    </div>
  );
};
