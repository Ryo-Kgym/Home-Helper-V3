import { CalcWorkTimeUsecase } from "@/core/usecase/business/work/CalcWorkTimeUsecase";
import { GetAttendanceOfMonthDocument } from "@v3/graphql/business/schema/query/v5/queryDailyAttendance.generated";

import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";
import { YYYY_MM_DD } from "../../../types/yyyyMMdd";

export const fetchDailyAttendance = async (baseDate: YYYY_MM_DD) => {
  const { id, group } = await findUser();

  const usecase = new CalcWorkTimeUsecase({
    findBy: async (fromDate, toDate) => {
      const { data } = await execQuery(GetAttendanceOfMonthDocument, {
        fromDate: new Date(fromDate),
        toDate: new Date(toDate),
        userId: id,
        groupId: group.id,
      });

      return {
        days:
          data.days.map((day) => ({
            id: day.id,
            date: day.date,
            startDatetime: new Date(day.startDatetime),
            endDatetime: new Date(day.endDatetime),
            breakSecond: day.breakSecond,
            logs: day.logs ?? [],
          })) ?? [],
      };
    },
  });

  return await usecase.handle({ baseDate });
};
