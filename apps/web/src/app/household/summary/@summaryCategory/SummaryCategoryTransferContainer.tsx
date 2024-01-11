/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useState } from "react";
import { TransferListItem } from "@components/ui/index";
import { SummaryCategoryTransferPresenter } from "./SummaryCategoryTransferPresenter";
import { useGetSummaryCategories } from "./useGetSummaryCategories";
import { useCreateSummaryCategories } from "@app/household/summary/@summaryCategory/useCreateSummaryCategories";
import { successPopup, errorPopup } from "@function/successPopup";

export const SummaryCategoryTransferContainer = () => {
  const [transferData, setTransferData] = useState<
    [TransferListItem[], TransferListItem[]]
  >([[], []]);
  const isEmpty = transferData[0].length === 0 && transferData[1].length === 0;

  const resetClickHandler = () => {
    setTransferData([unselectCategories, selectedCategories]);
  };

  const { unselectCategories, selectedCategories } = useGetSummaryCategories();
  const { createSummaryCategories } = useCreateSummaryCategories();
  const registerHandler = async () => {
    try {
      await createSummaryCategories({ selectedCategories: transferData[1] });
      successPopup("登録しました。");
    } catch (e) {
      console.error(e);
      errorPopup("登録に失敗しました。");
    }
  };

  return (
    <SummaryCategoryTransferPresenter
      transferData={
        isEmpty ? [unselectCategories, selectedCategories] : transferData
      }
      setTransferData={setTransferData}
      resetClickHandler={resetClickHandler}
      registerHandler={registerHandler}
    />
  );
};
