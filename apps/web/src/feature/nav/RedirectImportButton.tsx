import Link from "next/link";
import { paths } from "@routing/paths";

export const RedirectImportButton = ({ appId }: { appId: string }) => {
  return <Link href={paths.app.import({ id: appId })}>ファイル取込</Link>;
};
