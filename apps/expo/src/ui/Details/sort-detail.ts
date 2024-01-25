import type { Detail } from "~/ui/Details/detail-type";

export const sortKey = {
  date: {
    asc: (a: Detail, b: Detail) => sortByDate(a, b, 1),
    desc: (a: Detail, b: Detail) => sortByDate(a, b, -1),
  },
} as const;

const sortByDate = (a: Detail, b: Detail, sign: 1 | -1) => {
  if (!a.date || !b.date) return 0;
  if (a.date > b.date) return 1 * sign;
  if (a.date < b.date) return -1 * sign;
  return 0;
};
