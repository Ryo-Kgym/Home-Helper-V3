import Link from "next/link";

import { paths } from "~/routing/paths";

export const RedirectChartButton = ({ appId }: { appId: string }) => {
  return <Link href={paths.app.chart({ id: appId })}>chart作成</Link>;
};
