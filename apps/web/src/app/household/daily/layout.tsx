/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { ResponsiveSwitcher } from "@app/household/_layout/ResponsiveSwitcher";

const DailyLayout = ({
  calendar,
  detail,
}: {
  calendar: React.ReactNode;
  detail: React.ReactNode;
}) => <ResponsiveSwitcher first={calendar} second={detail} />;

export default DailyLayout;
