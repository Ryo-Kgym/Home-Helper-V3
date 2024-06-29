import { Suspense } from "react";
import { OpenedDrawer } from "@components/ui/v4/drawer";
import { DrawerLoading } from "@components/ui/v4/loading";
import { AppRecordDetailServer } from "@features/appRecordList/components/detail/AppRecordDetailServer";

export const RecordDetailPage = async ({ recordId }: { recordId: string }) => {
  return (
    <OpenedDrawer>
      <Suspense fallback={<DrawerLoading />}>
        <AppRecordDetailServer recordId={recordId} />
      </Suspense>
    </OpenedDrawer>
  );
};
