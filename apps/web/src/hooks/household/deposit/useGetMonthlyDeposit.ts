/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useEffect, useState } from "react";
import { useGetDepositQuery } from "@/turbo/graphql/household";
import { generateYearMonthList } from "@function/date/generate-year-month-list";
import { useGroup } from "@hooks/group/useGroup";

import { createMonthlyDeposits } from "./_useGetMonthlyDeposit_/create-monthly-deposits";
import { refillDepositQuery } from "./_useGetMonthlyDeposit_/refill-deposit-query";

/**
 * Retrieves monthly deposits for a given date range.
 *
 * @param {Date} fromDate - The start date of the date range.
 * @param {Date} toDate - The end date of the date range.
 *
 * @returns {Object} An object containing the following properties:
 *   - error: (boolean) Whether an error occurred during retrieval.
 *   - loading: (boolean) Whether the retrieval is in progress.
 *   - monthlyDeposits: (Array) The monthly deposits for the given date range.
 */
export const useGetMonthlyDeposit = ({
  fromDate,
  toDate,
}: {
  fromDate: Date;
  toDate: Date;
}) => {
  const [loading, setLoading] = useState(false);

  const { groupId } = useGroup();
  const [{ data, error, fetching }] = useGetDepositQuery({
    variables: {
      groupId,
      fromDate,
      toDate,
    },
  });

  const categoryDetails = refillDepositQuery(data);
  const yearMonths = generateYearMonthList(fromDate, toDate);
  const monthlyDeposits = createMonthlyDeposits(categoryDetails, yearMonths);

  // loadingには、useGetDepositQuery が実行中かつcreateMonthlyDepositsが実行中の場合のみtrueをセットする
  useEffect(() => {
    if (fetching) {
      setLoading(true);
    } else if (loading) {
      setLoading(false);
    }
  }, [fetching, loading]);

  return {
    error,
    loading,
    monthlyDeposits,
  };
};
