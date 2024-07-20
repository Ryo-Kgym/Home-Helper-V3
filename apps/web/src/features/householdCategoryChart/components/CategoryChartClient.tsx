"use client";

import { FC } from "react";

import { CategoryChartData } from "../types";
import { CategoryChart } from "./CategoryChart";

type Props = {
  categoryChartData: CategoryChartData;
};

export const CategoryChartClient: FC<Props> = ({ categoryChartData }) => {
  console.log(categoryChartData);
  return <CategoryChart />;
};
