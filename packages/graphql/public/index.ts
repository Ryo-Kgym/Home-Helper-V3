import gql from "graphql-tag";
import * as Urql from "urql";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bpchar: any;
  date: any;
  numeric: any;
  timestamp: any;
};

export type AffiliationAggregateBoolExp = {
  count?: InputMaybe<AffiliationAggregateBoolExpCount>;
};

/** order by aggregate values of table "affiliation" */
export type AffiliationAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AffiliationMaxOrderBy>;
  min?: InputMaybe<AffiliationMinOrderBy>;
};

/** input type for inserting array relation for remote table "affiliation" */
export type AffiliationArrRelInsertInput = {
  data: Array<AffiliationInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<AffiliationOnConflict>;
};

/** Boolean expression to filter rows from the table "affiliation". All fields are combined with a logical 'AND'. */
export type AffiliationBoolExp = {
  _and?: InputMaybe<Array<AffiliationBoolExp>>;
  _not?: InputMaybe<AffiliationBoolExp>;
  _or?: InputMaybe<Array<AffiliationBoolExp>>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  groupRole?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "affiliation" */
export enum AffiliationConstraint {
  /** unique or primary key constraint on columns "id" */
  AffiliationPkey = "affiliation_pkey",
}

/** input type for inserting data into table "affiliation" */
export type AffiliationInsertInput = {
  groupId?: InputMaybe<Scalars["String"]>;
  groupRole?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "affiliation" */
export type AffiliationMaxOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  groupRole?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "affiliation" */
export type AffiliationMinOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  groupRole?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** on_conflict condition type for table "affiliation" */
export type AffiliationOnConflict = {
  constraint: AffiliationConstraint;
  updateColumns?: Array<AffiliationUpdateColumn>;
  where?: InputMaybe<AffiliationBoolExp>;
};

/** Ordering options when selecting data from "affiliation". */
export type AffiliationOrderBy = {
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  groupRole?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** select columns of table "affiliation" */
export enum AffiliationSelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  GroupRole = "groupRole",
  /** column name */
  Id = "id",
  /** column name */
  UserId = "userId",
}

/** Streaming cursor of the table "affiliation" */
export type AffiliationStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AffiliationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AffiliationStreamCursorValueInput = {
  groupId?: InputMaybe<Scalars["String"]>;
  groupRole?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** placeholder for update columns of table "affiliation" (current role has no relevant permissions) */
export enum AffiliationUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** order by aggregate values of table "app" */
export type AppAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AppMaxOrderBy>;
  min?: InputMaybe<AppMinOrderBy>;
};

/** Boolean expression to filter rows from the table "app". All fields are combined with a logical 'AND'. */
export type AppBoolExp = {
  _and?: InputMaybe<Array<AppBoolExp>>;
  _not?: InputMaybe<AppBoolExp>;
  _or?: InputMaybe<Array<AppBoolExp>>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** order by max() on columns of table "app" */
export type AppMaxOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "app" */
export type AppMinOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "app". */
export type AppOrderBy = {
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** select columns of table "app" */
export enum AppSelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** Streaming cursor of the table "app" */
export type AppStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AppStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AppStreamCursorValueInput = {
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** Boolean expression to filter rows from the table "application". All fields are combined with a logical 'AND'. */
export type ApplicationBoolExp = {
  _and?: InputMaybe<Array<ApplicationBoolExp>>;
  _not?: InputMaybe<ApplicationBoolExp>;
  _or?: InputMaybe<Array<ApplicationBoolExp>>;
  groupApplications?: InputMaybe<GroupApplicationBoolExp>;
  groupApplicationsAggregate?: InputMaybe<GroupApplicationAggregateBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  topUrl?: InputMaybe<StringComparisonExp>;
  validFlag?: InputMaybe<BooleanComparisonExp>;
};

/** Ordering options when selecting data from "application". */
export type ApplicationOrderBy = {
  groupApplicationsAggregate?: InputMaybe<GroupApplicationAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  topUrl?: InputMaybe<OrderBy>;
  validFlag?: InputMaybe<OrderBy>;
};

/** select columns of table "application" */
export enum ApplicationSelectColumn {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  TopUrl = "topUrl",
  /** column name */
  ValidFlag = "validFlag",
}

/** Streaming cursor of the table "application" */
export type ApplicationStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ApplicationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApplicationStreamCursorValueInput = {
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  topUrl?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars["Boolean"]>;
  _gt?: InputMaybe<Scalars["Boolean"]>;
  _gte?: InputMaybe<Scalars["Boolean"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Boolean"]>;
  _lte?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<Scalars["Boolean"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]>>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type BpcharComparisonExp = {
  _eq?: InputMaybe<Scalars["bpchar"]>;
  _gt?: InputMaybe<Scalars["bpchar"]>;
  _gte?: InputMaybe<Scalars["bpchar"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["bpchar"]>;
  _in?: InputMaybe<Array<Scalars["bpchar"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["bpchar"]>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["bpchar"]>;
  _lt?: InputMaybe<Scalars["bpchar"]>;
  _lte?: InputMaybe<Scalars["bpchar"]>;
  _neq?: InputMaybe<Scalars["bpchar"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["bpchar"]>;
  _nin?: InputMaybe<Array<Scalars["bpchar"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["bpchar"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["bpchar"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["bpchar"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["bpchar"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["bpchar"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["bpchar"]>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type DateComparisonExp = {
  _eq?: InputMaybe<Scalars["date"]>;
  _gt?: InputMaybe<Scalars["date"]>;
  _gte?: InputMaybe<Scalars["date"]>;
  _in?: InputMaybe<Array<Scalars["date"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["date"]>;
  _lte?: InputMaybe<Scalars["date"]>;
  _neq?: InputMaybe<Scalars["date"]>;
  _nin?: InputMaybe<Array<Scalars["date"]>>;
};

export type GroupApplicationAggregateBoolExp = {
  count?: InputMaybe<GroupApplicationAggregateBoolExpCount>;
};

/** order by aggregate values of table "group_application" */
export type GroupApplicationAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<GroupApplicationMaxOrderBy>;
  min?: InputMaybe<GroupApplicationMinOrderBy>;
};

/** Boolean expression to filter rows from the table "group_application". All fields are combined with a logical 'AND'. */
export type GroupApplicationBoolExp = {
  _and?: InputMaybe<Array<GroupApplicationBoolExp>>;
  _not?: InputMaybe<GroupApplicationBoolExp>;
  _or?: InputMaybe<Array<GroupApplicationBoolExp>>;
  application?: InputMaybe<ApplicationBoolExp>;
  applicationId?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
};

/** order by max() on columns of table "group_application" */
export type GroupApplicationMaxOrderBy = {
  applicationId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "group_application" */
export type GroupApplicationMinOrderBy = {
  applicationId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "group_application". */
export type GroupApplicationOrderBy = {
  application?: InputMaybe<ApplicationOrderBy>;
  applicationId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** select columns of table "group_application" */
export enum GroupApplicationSelectColumn {
  /** column name */
  ApplicationId = "applicationId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
}

/** Streaming cursor of the table "group_application" */
export type GroupApplicationStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GroupApplicationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GroupApplicationStreamCursorValueInput = {
  applicationId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
};

/** Boolean expression to filter rows from the table "group". All fields are combined with a logical 'AND'. */
export type GroupBoolExp = {
  _and?: InputMaybe<Array<GroupBoolExp>>;
  _not?: InputMaybe<GroupBoolExp>;
  _or?: InputMaybe<Array<GroupBoolExp>>;
  accounts?: InputMaybe<HouseholdAccountBoolExp>;
  accountsAggregate?: InputMaybe<HouseholdAccountAggregateBoolExp>;
  affiliations?: InputMaybe<AffiliationBoolExp>;
  affiliationsAggregate?: InputMaybe<AffiliationAggregateBoolExp>;
  apps?: InputMaybe<AppBoolExp>;
  categories?: InputMaybe<HouseholdCategoryBoolExp>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
  creditCardSummaries?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
  creditCardSummariesAggregate?: InputMaybe<HouseholdCreditCardSummaryAggregateBoolExp>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailBoolExp>;
  dashboardSettings?: InputMaybe<HouseholdDashboardSettingBoolExp>;
  depositCategories?: InputMaybe<HouseholdDepositCategoryBoolExp>;
  depositCategoriesAggregate?: InputMaybe<HouseholdDepositCategoryAggregateBoolExp>;
  details?: InputMaybe<HouseholdAllDetailViewBoolExp>;
  detailsAggregate?: InputMaybe<HouseholdAllDetailViewAggregateBoolExp>;
  favoriteFilters?: InputMaybe<HouseholdFavoriteFilterBoolExp>;
  favoriteFiltersAggregate?: InputMaybe<HouseholdFavoriteFilterAggregateBoolExp>;
  genres?: InputMaybe<HouseholdGenreBoolExp>;
  genresAggregate?: InputMaybe<HouseholdGenreAggregateBoolExp>;
  groupApplications?: InputMaybe<GroupApplicationBoolExp>;
  groupApplicationsAggregate?: InputMaybe<GroupApplicationAggregateBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  importFileHistories?: InputMaybe<HouseholdImportFileHistoryBoolExp>;
  importFileHistoriesAggregate?: InputMaybe<HouseholdImportFileHistoryAggregateBoolExp>;
  name?: InputMaybe<StringComparisonExp>;
  tags?: InputMaybe<HouseholdTagBoolExp>;
  totalByCategoryView?: InputMaybe<HouseholdTotalByCategoryViewBoolExp>;
  totalByCategoryViewAggregate?: InputMaybe<HouseholdTotalByCategoryViewAggregateBoolExp>;
  transferCategory?: InputMaybe<HouseholdTransferCategoryBoolExp>;
};

/** Ordering options when selecting data from "group". */
export type GroupOrderBy = {
  accountsAggregate?: InputMaybe<HouseholdAccountAggregateOrderBy>;
  affiliationsAggregate?: InputMaybe<AffiliationAggregateOrderBy>;
  appsAggregate?: InputMaybe<AppAggregateOrderBy>;
  categoriesAggregate?: InputMaybe<HouseholdCategoryAggregateOrderBy>;
  creditCardDetailsAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateOrderBy>;
  creditCardSummariesAggregate?: InputMaybe<HouseholdCreditCardSummaryAggregateOrderBy>;
  dailyDetailsAggregate?: InputMaybe<HouseholdDailyDetailAggregateOrderBy>;
  dashboardSettingsAggregate?: InputMaybe<HouseholdDashboardSettingAggregateOrderBy>;
  depositCategoriesAggregate?: InputMaybe<HouseholdDepositCategoryAggregateOrderBy>;
  detailsAggregate?: InputMaybe<HouseholdAllDetailViewAggregateOrderBy>;
  favoriteFiltersAggregate?: InputMaybe<HouseholdFavoriteFilterAggregateOrderBy>;
  genresAggregate?: InputMaybe<HouseholdGenreAggregateOrderBy>;
  groupApplicationsAggregate?: InputMaybe<GroupApplicationAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  importFileHistoriesAggregate?: InputMaybe<HouseholdImportFileHistoryAggregateOrderBy>;
  name?: InputMaybe<OrderBy>;
  tagsAggregate?: InputMaybe<HouseholdTagAggregateOrderBy>;
  totalByCategoryViewAggregate?: InputMaybe<HouseholdTotalByCategoryViewAggregateOrderBy>;
  transferCategory?: InputMaybe<HouseholdTransferCategoryOrderBy>;
};

/** select columns of table "group" */
export enum GroupSelectColumn {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** Streaming cursor of the table "group" */
export type GroupStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GroupStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GroupStreamCursorValueInput = {
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type HouseholdAccountAggregateBoolExp = {
  bool_and?: InputMaybe<HouseholdAccountAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<HouseholdAccountAggregateBoolExpBool_Or>;
  count?: InputMaybe<HouseholdAccountAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.account" */
export type HouseholdAccountAggregateOrderBy = {
  avg?: InputMaybe<HouseholdAccountAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdAccountMaxOrderBy>;
  min?: InputMaybe<HouseholdAccountMinOrderBy>;
  stddev?: InputMaybe<HouseholdAccountStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdAccountStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdAccountStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdAccountSumOrderBy>;
  varPop?: InputMaybe<HouseholdAccountVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdAccountVarSampOrderBy>;
  variance?: InputMaybe<HouseholdAccountVarianceOrderBy>;
};

/** order by avg() on columns of table "household.account" */
export type HouseholdAccountAvgOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.account". All fields are combined with a logical 'AND'. */
export type HouseholdAccountBoolExp = {
  _and?: InputMaybe<Array<HouseholdAccountBoolExp>>;
  _not?: InputMaybe<HouseholdAccountBoolExp>;
  _or?: InputMaybe<Array<HouseholdAccountBoolExp>>;
  allDetailViews?: InputMaybe<HouseholdAllDetailViewBoolExp>;
  allDetailViewsAggregate?: InputMaybe<HouseholdAllDetailViewAggregateBoolExp>;
  creditCardSummaries?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
  creditCardSummariesAggregate?: InputMaybe<HouseholdCreditCardSummaryAggregateBoolExp>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  validFlag?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "household.account" */
export enum HouseholdAccountConstraint {
  /** unique or primary key constraint on columns "id" */
  AccountPkey = "account_pkey",
}

/** input type for inserting data into table "household.account" */
export type HouseholdAccountInsertInput = {
  creditCardSummaries?: InputMaybe<HouseholdCreditCardSummaryArrRelInsertInput>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by max() on columns of table "household.account" */
export type HouseholdAccountMaxOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.account" */
export type HouseholdAccountMinOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "household.account" */
export type HouseholdAccountObjRelInsertInput = {
  data: HouseholdAccountInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdAccountOnConflict>;
};

/** on_conflict condition type for table "household.account" */
export type HouseholdAccountOnConflict = {
  constraint: HouseholdAccountConstraint;
  updateColumns?: Array<HouseholdAccountUpdateColumn>;
  where?: InputMaybe<HouseholdAccountBoolExp>;
};

/** Ordering options when selecting data from "household.account". */
export type HouseholdAccountOrderBy = {
  allDetailViewsAggregate?: InputMaybe<HouseholdAllDetailViewAggregateOrderBy>;
  creditCardSummariesAggregate?: InputMaybe<HouseholdCreditCardSummaryAggregateOrderBy>;
  dailyDetailsAggregate?: InputMaybe<HouseholdDailyDetailAggregateOrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  validFlag?: InputMaybe<OrderBy>;
};

/** select columns of table "household.account" */
export enum HouseholdAccountSelectColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  ValidFlag = "validFlag",
}

/** select "householdAccountAggregateBoolExpBool_andArgumentsColumns" columns of table "household.account" */
export enum HouseholdAccountSelectColumnHouseholdAccountAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  ValidFlag = "validFlag",
}

/** select "householdAccountAggregateBoolExpBool_orArgumentsColumns" columns of table "household.account" */
export enum HouseholdAccountSelectColumnHouseholdAccountAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  ValidFlag = "validFlag",
}

/** order by stddev() on columns of table "household.account" */
export type HouseholdAccountStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.account" */
export type HouseholdAccountStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.account" */
export type HouseholdAccountStddevSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_account" */
export type HouseholdAccountStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdAccountStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdAccountStreamCursorValueInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by sum() on columns of table "household.account" */
export type HouseholdAccountSumOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** placeholder for update columns of table "household.account" (current role has no relevant permissions) */
export enum HouseholdAccountUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** order by varPop() on columns of table "household.account" */
export type HouseholdAccountVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.account" */
export type HouseholdAccountVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.account" */
export type HouseholdAccountVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

export type HouseholdAllDetailViewAggregateBoolExp = {
  count?: InputMaybe<HouseholdAllDetailViewAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.all_detail_view" */
export type HouseholdAllDetailViewAggregateOrderBy = {
  avg?: InputMaybe<HouseholdAllDetailViewAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdAllDetailViewMaxOrderBy>;
  min?: InputMaybe<HouseholdAllDetailViewMinOrderBy>;
  stddev?: InputMaybe<HouseholdAllDetailViewStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdAllDetailViewStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdAllDetailViewStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdAllDetailViewSumOrderBy>;
  varPop?: InputMaybe<HouseholdAllDetailViewVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdAllDetailViewVarSampOrderBy>;
  variance?: InputMaybe<HouseholdAllDetailViewVarianceOrderBy>;
};

/** order by avg() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewAvgOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.all_detail_view". All fields are combined with a logical 'AND'. */
export type HouseholdAllDetailViewBoolExp = {
  _and?: InputMaybe<Array<HouseholdAllDetailViewBoolExp>>;
  _not?: InputMaybe<HouseholdAllDetailViewBoolExp>;
  _or?: InputMaybe<Array<HouseholdAllDetailViewBoolExp>>;
  account?: InputMaybe<HouseholdAccountBoolExp>;
  accountId?: InputMaybe<StringComparisonExp>;
  category?: InputMaybe<HouseholdCategoryBoolExp>;
  categoryId?: InputMaybe<StringComparisonExp>;
  date?: InputMaybe<DateComparisonExp>;
  detailTags?: InputMaybe<HouseholdDetailTagBoolExp>;
  detailTagsAggregate?: InputMaybe<HouseholdDetailTagAggregateBoolExp>;
  genre?: InputMaybe<HouseholdGenreBoolExp>;
  genreId?: InputMaybe<StringComparisonExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  iocomeType?: InputMaybe<StringComparisonExp>;
  memo?: InputMaybe<StringComparisonExp>;
  originalAmount?: InputMaybe<NumericComparisonExp>;
  settlementDate?: InputMaybe<DateComparisonExp>;
  signedAmount?: InputMaybe<NumericComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
  withdrawalDate?: InputMaybe<DateComparisonExp>;
};

/** order by max() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewMaxOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  originalAmount?: InputMaybe<OrderBy>;
  settlementDate?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  withdrawalDate?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewMinOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  originalAmount?: InputMaybe<OrderBy>;
  settlementDate?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  withdrawalDate?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "household.all_detail_view". */
export type HouseholdAllDetailViewOrderBy = {
  account?: InputMaybe<HouseholdAccountOrderBy>;
  accountId?: InputMaybe<OrderBy>;
  category?: InputMaybe<HouseholdCategoryOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  detailTagsAggregate?: InputMaybe<HouseholdDetailTagAggregateOrderBy>;
  genre?: InputMaybe<HouseholdGenreOrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  originalAmount?: InputMaybe<OrderBy>;
  settlementDate?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  withdrawalDate?: InputMaybe<OrderBy>;
};

/** select columns of table "household.all_detail_view" */
export enum HouseholdAllDetailViewSelectColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  Date = "date",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Memo = "memo",
  /** column name */
  OriginalAmount = "originalAmount",
  /** column name */
  SettlementDate = "settlementDate",
  /** column name */
  SignedAmount = "signedAmount",
  /** column name */
  Type = "type",
  /** column name */
  WithdrawalDate = "withdrawalDate",
}

/** order by stddev() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewStddevOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewStddevPopOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewStddevSampOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_all_detail_view" */
export type HouseholdAllDetailViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdAllDetailViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdAllDetailViewStreamCursorValueInput = {
  accountId?: InputMaybe<Scalars["String"]>;
  categoryId?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  memo?: InputMaybe<Scalars["String"]>;
  originalAmount?: InputMaybe<Scalars["numeric"]>;
  settlementDate?: InputMaybe<Scalars["date"]>;
  signedAmount?: InputMaybe<Scalars["numeric"]>;
  type?: InputMaybe<Scalars["String"]>;
  withdrawalDate?: InputMaybe<Scalars["date"]>;
};

/** order by sum() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewSumOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** order by varPop() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewVarPopOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewVarSampOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewVarianceOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** order by aggregate values of table "household.category" */
export type HouseholdCategoryAggregateOrderBy = {
  avg?: InputMaybe<HouseholdCategoryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdCategoryMaxOrderBy>;
  min?: InputMaybe<HouseholdCategoryMinOrderBy>;
  stddev?: InputMaybe<HouseholdCategoryStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdCategoryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdCategoryStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdCategorySumOrderBy>;
  varPop?: InputMaybe<HouseholdCategoryVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdCategoryVarSampOrderBy>;
  variance?: InputMaybe<HouseholdCategoryVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "household.category" */
export type HouseholdCategoryArrRelInsertInput = {
  data: Array<HouseholdCategoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdCategoryOnConflict>;
};

/** order by avg() on columns of table "household.category" */
export type HouseholdCategoryAvgOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.category". All fields are combined with a logical 'AND'. */
export type HouseholdCategoryBoolExp = {
  _and?: InputMaybe<Array<HouseholdCategoryBoolExp>>;
  _not?: InputMaybe<HouseholdCategoryBoolExp>;
  _or?: InputMaybe<Array<HouseholdCategoryBoolExp>>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailBoolExp>;
  depositCategory?: InputMaybe<HouseholdDepositCategoryBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  genre?: InputMaybe<HouseholdGenreBoolExp>;
  genreId?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  transferCategories?: InputMaybe<HouseholdTransferCategoryBoolExp>;
  transferCategoriesAggregate?: InputMaybe<HouseholdTransferCategoryAggregateBoolExp>;
  validFlag?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "household.category" */
export enum HouseholdCategoryConstraint {
  /** unique or primary key constraint on columns "id" */
  CategoryPkey = "category_pkey",
}

/** input type for incrementing numeric columns in table "household.category" */
export type HouseholdCategoryIncInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "household.category" */
export type HouseholdCategoryInsertInput = {
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailArrRelInsertInput>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genre?: InputMaybe<HouseholdGenreObjRelInsertInput>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by max() on columns of table "household.category" */
export type HouseholdCategoryMaxOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.category" */
export type HouseholdCategoryMinOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "household.category" */
export type HouseholdCategoryObjRelInsertInput = {
  data: HouseholdCategoryInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdCategoryOnConflict>;
};

/** on_conflict condition type for table "household.category" */
export type HouseholdCategoryOnConflict = {
  constraint: HouseholdCategoryConstraint;
  updateColumns?: Array<HouseholdCategoryUpdateColumn>;
  where?: InputMaybe<HouseholdCategoryBoolExp>;
};

/** Ordering options when selecting data from "household.category". */
export type HouseholdCategoryOrderBy = {
  creditCardDetailsAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateOrderBy>;
  dailyDetailsAggregate?: InputMaybe<HouseholdDailyDetailAggregateOrderBy>;
  depositCategory?: InputMaybe<HouseholdDepositCategoryOrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  genre?: InputMaybe<HouseholdGenreOrderBy>;
  genreId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  transferCategoriesAggregate?: InputMaybe<HouseholdTransferCategoryAggregateOrderBy>;
  validFlag?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: household.category */
export type HouseholdCategoryPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "household.category" */
export enum HouseholdCategorySelectColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  ValidFlag = "validFlag",
}

/** input type for updating data in table "household.category" */
export type HouseholdCategorySetInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by stddev() on columns of table "household.category" */
export type HouseholdCategoryStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.category" */
export type HouseholdCategoryStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.category" */
export type HouseholdCategoryStddevSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_category" */
export type HouseholdCategoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdCategoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdCategoryStreamCursorValueInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by sum() on columns of table "household.category" */
export type HouseholdCategorySumOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** update columns of table "household.category" */
export enum HouseholdCategoryUpdateColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  ValidFlag = "validFlag",
}

export type HouseholdCategoryUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HouseholdCategoryIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdCategorySetInput>;
  /** filter the rows which have to be updated */
  where: HouseholdCategoryBoolExp;
};

/** order by varPop() on columns of table "household.category" */
export type HouseholdCategoryVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.category" */
export type HouseholdCategoryVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.category" */
export type HouseholdCategoryVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by aggregate values of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailAggregateOrderBy = {
  avg?: InputMaybe<HouseholdCreditCardDetailAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdCreditCardDetailMaxOrderBy>;
  min?: InputMaybe<HouseholdCreditCardDetailMinOrderBy>;
  stddev?: InputMaybe<HouseholdCreditCardDetailStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdCreditCardDetailStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdCreditCardDetailStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdCreditCardDetailSumOrderBy>;
  varPop?: InputMaybe<HouseholdCreditCardDetailVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdCreditCardDetailVarSampOrderBy>;
  variance?: InputMaybe<HouseholdCreditCardDetailVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "household.credit_card_detail" */
export type HouseholdCreditCardDetailArrRelInsertInput = {
  data: Array<HouseholdCreditCardDetailInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdCreditCardDetailOnConflict>;
};

/** order by avg() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailAvgOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.credit_card_detail". All fields are combined with a logical 'AND'. */
export type HouseholdCreditCardDetailBoolExp = {
  _and?: InputMaybe<Array<HouseholdCreditCardDetailBoolExp>>;
  _not?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
  _or?: InputMaybe<Array<HouseholdCreditCardDetailBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  category?: InputMaybe<HouseholdCategoryBoolExp>;
  categoryId?: InputMaybe<StringComparisonExp>;
  creditCardSummary?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
  date?: InputMaybe<DateComparisonExp>;
  detailTags?: InputMaybe<HouseholdDetailTagBoolExp>;
  detailTagsAggregate?: InputMaybe<HouseholdDetailTagAggregateBoolExp>;
  genre?: InputMaybe<HouseholdGenreBoolExp>;
  genreId?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  iocomeType?: InputMaybe<StringComparisonExp>;
  memo?: InputMaybe<StringComparisonExp>;
  summaryId?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "household.credit_card_detail" */
export enum HouseholdCreditCardDetailConstraint {
  /** unique or primary key constraint on columns "id" */
  CreditCardDetailPkey = "credit_card_detail_pkey",
}

/** input type for incrementing numeric columns in table "household.credit_card_detail" */
export type HouseholdCreditCardDetailIncInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "household.credit_card_detail" */
export type HouseholdCreditCardDetailInsertInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
  category?: InputMaybe<HouseholdCategoryObjRelInsertInput>;
  categoryId?: InputMaybe<Scalars["String"]>;
  creditCardSummary?: InputMaybe<HouseholdCreditCardSummaryObjRelInsertInput>;
  date?: InputMaybe<Scalars["date"]>;
  detailTags?: InputMaybe<HouseholdDetailTagArrRelInsertInput>;
  genre?: InputMaybe<HouseholdGenreObjRelInsertInput>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  memo?: InputMaybe<Scalars["String"]>;
  summaryId?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailMaxOrderBy = {
  amount?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  summaryId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailMinOrderBy = {
  amount?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  summaryId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** on_conflict condition type for table "household.credit_card_detail" */
export type HouseholdCreditCardDetailOnConflict = {
  constraint: HouseholdCreditCardDetailConstraint;
  updateColumns?: Array<HouseholdCreditCardDetailUpdateColumn>;
  where?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
};

/** Ordering options when selecting data from "household.credit_card_detail". */
export type HouseholdCreditCardDetailOrderBy = {
  amount?: InputMaybe<OrderBy>;
  category?: InputMaybe<HouseholdCategoryOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  creditCardSummary?: InputMaybe<HouseholdCreditCardSummaryOrderBy>;
  date?: InputMaybe<OrderBy>;
  detailTagsAggregate?: InputMaybe<HouseholdDetailTagAggregateOrderBy>;
  genre?: InputMaybe<HouseholdGenreOrderBy>;
  genreId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  summaryId?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: household.credit_card_detail */
export type HouseholdCreditCardDetailPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "household.credit_card_detail" */
export enum HouseholdCreditCardDetailSelectColumn {
  /** column name */
  Amount = "amount",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  Date = "date",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Memo = "memo",
  /** column name */
  SummaryId = "summaryId",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "household.credit_card_detail" */
export type HouseholdCreditCardDetailSetInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
  categoryId?: InputMaybe<Scalars["String"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  memo?: InputMaybe<Scalars["String"]>;
};

/** order by stddev() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailStddevSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_credit_card_detail" */
export type HouseholdCreditCardDetailStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdCreditCardDetailStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdCreditCardDetailStreamCursorValueInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
  categoryId?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  memo?: InputMaybe<Scalars["String"]>;
  summaryId?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** order by sum() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailSumOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** update columns of table "household.credit_card_detail" */
export enum HouseholdCreditCardDetailUpdateColumn {
  /** column name */
  Amount = "amount",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  GenreId = "genreId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Memo = "memo",
}

export type HouseholdCreditCardDetailUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HouseholdCreditCardDetailIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdCreditCardDetailSetInput>;
  /** filter the rows which have to be updated */
  where: HouseholdCreditCardDetailBoolExp;
};

/** order by varPop() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

export type HouseholdCreditCardSummaryAggregateBoolExp = {
  count?: InputMaybe<HouseholdCreditCardSummaryAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryAggregateOrderBy = {
  avg?: InputMaybe<HouseholdCreditCardSummaryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdCreditCardSummaryMaxOrderBy>;
  min?: InputMaybe<HouseholdCreditCardSummaryMinOrderBy>;
  stddev?: InputMaybe<HouseholdCreditCardSummaryStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdCreditCardSummaryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdCreditCardSummaryStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdCreditCardSummarySumOrderBy>;
  varPop?: InputMaybe<HouseholdCreditCardSummaryVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdCreditCardSummaryVarSampOrderBy>;
  variance?: InputMaybe<HouseholdCreditCardSummaryVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryArrRelInsertInput = {
  data: Array<HouseholdCreditCardSummaryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdCreditCardSummaryOnConflict>;
};

/** order by avg() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryAvgOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.credit_card_summary". All fields are combined with a logical 'AND'. */
export type HouseholdCreditCardSummaryBoolExp = {
  _and?: InputMaybe<Array<HouseholdCreditCardSummaryBoolExp>>;
  _not?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
  _or?: InputMaybe<Array<HouseholdCreditCardSummaryBoolExp>>;
  account?: InputMaybe<HouseholdAccountBoolExp>;
  accountId?: InputMaybe<StringComparisonExp>;
  count?: InputMaybe<IntComparisonExp>;
  creditCard?: InputMaybe<StringComparisonExp>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  totalAmount?: InputMaybe<NumericComparisonExp>;
  withdrawalDate?: InputMaybe<DateComparisonExp>;
};

/** unique or primary key constraints on table "household.credit_card_summary" */
export enum HouseholdCreditCardSummaryConstraint {
  /** unique or primary key constraint on columns "id" */
  CreditCardSummaryPkey = "credit_card_summary_pkey",
}

/** input type for incrementing numeric columns in table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryIncInput = {
  count?: InputMaybe<Scalars["Int"]>;
  totalAmount?: InputMaybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryInsertInput = {
  account?: InputMaybe<HouseholdAccountObjRelInsertInput>;
  accountId?: InputMaybe<Scalars["String"]>;
  count?: InputMaybe<Scalars["Int"]>;
  creditCard?: InputMaybe<Scalars["String"]>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailArrRelInsertInput>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  totalAmount?: InputMaybe<Scalars["numeric"]>;
  withdrawalDate?: InputMaybe<Scalars["date"]>;
};

/** order by max() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryMaxOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  count?: InputMaybe<OrderBy>;
  creditCard?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
  withdrawalDate?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryMinOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  count?: InputMaybe<OrderBy>;
  creditCard?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
  withdrawalDate?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryObjRelInsertInput = {
  data: HouseholdCreditCardSummaryInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdCreditCardSummaryOnConflict>;
};

/** on_conflict condition type for table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryOnConflict = {
  constraint: HouseholdCreditCardSummaryConstraint;
  updateColumns?: Array<HouseholdCreditCardSummaryUpdateColumn>;
  where?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
};

/** Ordering options when selecting data from "household.credit_card_summary". */
export type HouseholdCreditCardSummaryOrderBy = {
  account?: InputMaybe<HouseholdAccountOrderBy>;
  accountId?: InputMaybe<OrderBy>;
  count?: InputMaybe<OrderBy>;
  creditCard?: InputMaybe<OrderBy>;
  creditCardDetailsAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateOrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
  withdrawalDate?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: household.credit_card_summary */
export type HouseholdCreditCardSummaryPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "household.credit_card_summary" */
export enum HouseholdCreditCardSummarySelectColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  Count = "count",
  /** column name */
  CreditCard = "creditCard",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  TotalAmount = "totalAmount",
  /** column name */
  WithdrawalDate = "withdrawalDate",
}

/** input type for updating data in table "household.credit_card_summary" */
export type HouseholdCreditCardSummarySetInput = {
  accountId?: InputMaybe<Scalars["String"]>;
  count?: InputMaybe<Scalars["Int"]>;
  creditCard?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  totalAmount?: InputMaybe<Scalars["numeric"]>;
  withdrawalDate?: InputMaybe<Scalars["date"]>;
};

/** order by stddev() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryStddevOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryStddevPopOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryStddevSampOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_credit_card_summary" */
export type HouseholdCreditCardSummaryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdCreditCardSummaryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdCreditCardSummaryStreamCursorValueInput = {
  accountId?: InputMaybe<Scalars["String"]>;
  count?: InputMaybe<Scalars["Int"]>;
  creditCard?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  totalAmount?: InputMaybe<Scalars["numeric"]>;
  withdrawalDate?: InputMaybe<Scalars["date"]>;
};

/** order by sum() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummarySumOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.credit_card_summary_total_by_account_view". All fields are combined with a logical 'AND'. */
export type HouseholdCreditCardSummaryTotalByAccountViewBoolExp = {
  _and?: InputMaybe<Array<HouseholdCreditCardSummaryTotalByAccountViewBoolExp>>;
  _not?: InputMaybe<HouseholdCreditCardSummaryTotalByAccountViewBoolExp>;
  _or?: InputMaybe<Array<HouseholdCreditCardSummaryTotalByAccountViewBoolExp>>;
  accountId?: InputMaybe<StringComparisonExp>;
  date?: InputMaybe<DateComparisonExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  iocomeType?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "household.credit_card_summary_total_by_account_view". */
export type HouseholdCreditCardSummaryTotalByAccountViewOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** select columns of table "household.credit_card_summary_total_by_account_view" */
export enum HouseholdCreditCardSummaryTotalByAccountViewSelectColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  Date = "date",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Name = "name",
  /** column name */
  Total = "total",
}

/** Streaming cursor of the table "household_credit_card_summary_total_by_account_view" */
export type HouseholdCreditCardSummaryTotalByAccountViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdCreditCardSummaryTotalByAccountViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdCreditCardSummaryTotalByAccountViewStreamCursorValueInput =
  {
    accountId?: InputMaybe<Scalars["String"]>;
    date?: InputMaybe<Scalars["date"]>;
    displayOrder?: InputMaybe<Scalars["Int"]>;
    groupId?: InputMaybe<Scalars["String"]>;
    iocomeType?: InputMaybe<Scalars["String"]>;
    name?: InputMaybe<Scalars["String"]>;
    total?: InputMaybe<Scalars["numeric"]>;
  };

/** update columns of table "household.credit_card_summary" */
export enum HouseholdCreditCardSummaryUpdateColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  Count = "count",
  /** column name */
  CreditCard = "creditCard",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  TotalAmount = "totalAmount",
  /** column name */
  WithdrawalDate = "withdrawalDate",
}

export type HouseholdCreditCardSummaryUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HouseholdCreditCardSummaryIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdCreditCardSummarySetInput>;
  /** filter the rows which have to be updated */
  where: HouseholdCreditCardSummaryBoolExp;
};

/** order by varPop() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryVarPopOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryVarSampOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryVarianceOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** order by aggregate values of table "household.daily_detail" */
export type HouseholdDailyDetailAggregateOrderBy = {
  avg?: InputMaybe<HouseholdDailyDetailAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdDailyDetailMaxOrderBy>;
  min?: InputMaybe<HouseholdDailyDetailMinOrderBy>;
  stddev?: InputMaybe<HouseholdDailyDetailStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdDailyDetailStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdDailyDetailStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdDailyDetailSumOrderBy>;
  varPop?: InputMaybe<HouseholdDailyDetailVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdDailyDetailVarSampOrderBy>;
  variance?: InputMaybe<HouseholdDailyDetailVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "household.daily_detail" */
export type HouseholdDailyDetailArrRelInsertInput = {
  data: Array<HouseholdDailyDetailInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdDailyDetailOnConflict>;
};

/** order by avg() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailAvgOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.daily_detail". All fields are combined with a logical 'AND'. */
export type HouseholdDailyDetailBoolExp = {
  _and?: InputMaybe<Array<HouseholdDailyDetailBoolExp>>;
  _not?: InputMaybe<HouseholdDailyDetailBoolExp>;
  _or?: InputMaybe<Array<HouseholdDailyDetailBoolExp>>;
  account?: InputMaybe<HouseholdAccountBoolExp>;
  accountId?: InputMaybe<StringComparisonExp>;
  amount?: InputMaybe<NumericComparisonExp>;
  category?: InputMaybe<HouseholdCategoryBoolExp>;
  categoryId?: InputMaybe<StringComparisonExp>;
  date?: InputMaybe<DateComparisonExp>;
  detailTags?: InputMaybe<HouseholdDetailTagBoolExp>;
  detailTagsAggregate?: InputMaybe<HouseholdDetailTagAggregateBoolExp>;
  genre?: InputMaybe<HouseholdGenreBoolExp>;
  genreId?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  iocomeType?: InputMaybe<StringComparisonExp>;
  memo?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "household.daily_detail" */
export enum HouseholdDailyDetailConstraint {
  /** unique or primary key constraint on columns "id" */
  DailyDetailPkey = "daily_detail_pkey",
}

/** input type for incrementing numeric columns in table "household.daily_detail" */
export type HouseholdDailyDetailIncInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "household.daily_detail" */
export type HouseholdDailyDetailInsertInput = {
  account?: InputMaybe<HouseholdAccountObjRelInsertInput>;
  accountId?: InputMaybe<Scalars["String"]>;
  amount?: InputMaybe<Scalars["numeric"]>;
  category?: InputMaybe<HouseholdCategoryObjRelInsertInput>;
  categoryId?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  detailTags?: InputMaybe<HouseholdDetailTagArrRelInsertInput>;
  genre?: InputMaybe<HouseholdGenreObjRelInsertInput>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  memo?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailMaxOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailMinOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** on_conflict condition type for table "household.daily_detail" */
export type HouseholdDailyDetailOnConflict = {
  constraint: HouseholdDailyDetailConstraint;
  updateColumns?: Array<HouseholdDailyDetailUpdateColumn>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

/** Ordering options when selecting data from "household.daily_detail". */
export type HouseholdDailyDetailOrderBy = {
  account?: InputMaybe<HouseholdAccountOrderBy>;
  accountId?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  category?: InputMaybe<HouseholdCategoryOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  detailTagsAggregate?: InputMaybe<HouseholdDetailTagAggregateOrderBy>;
  genre?: InputMaybe<HouseholdGenreOrderBy>;
  genreId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: household.daily_detail */
export type HouseholdDailyDetailPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "household.daily_detail" */
export enum HouseholdDailyDetailSelectColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  Amount = "amount",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  Date = "date",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Memo = "memo",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "household.daily_detail" */
export type HouseholdDailyDetailSetInput = {
  accountId?: InputMaybe<Scalars["String"]>;
  amount?: InputMaybe<Scalars["numeric"]>;
  categoryId?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  memo?: InputMaybe<Scalars["String"]>;
};

/** order by stddev() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailStddevSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_daily_detail" */
export type HouseholdDailyDetailStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdDailyDetailStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdDailyDetailStreamCursorValueInput = {
  accountId?: InputMaybe<Scalars["String"]>;
  amount?: InputMaybe<Scalars["numeric"]>;
  categoryId?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  memo?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** order by sum() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailSumOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** update columns of table "household.daily_detail" */
export enum HouseholdDailyDetailUpdateColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  Amount = "amount",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  Date = "date",
  /** column name */
  GenreId = "genreId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Memo = "memo",
}

export type HouseholdDailyDetailUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HouseholdDailyDetailIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdDailyDetailSetInput>;
  /** filter the rows which have to be updated */
  where: HouseholdDailyDetailBoolExp;
};

/** order by varPop() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.daily_total_view". All fields are combined with a logical 'AND'. */
export type HouseholdDailyTotalViewBoolExp = {
  _and?: InputMaybe<Array<HouseholdDailyTotalViewBoolExp>>;
  _not?: InputMaybe<HouseholdDailyTotalViewBoolExp>;
  _or?: InputMaybe<Array<HouseholdDailyTotalViewBoolExp>>;
  date?: InputMaybe<DateComparisonExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  iocomeType?: InputMaybe<StringComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "household.daily_total_view". */
export type HouseholdDailyTotalViewOrderBy = {
  date?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** select columns of table "household.daily_total_view" */
export enum HouseholdDailyTotalViewSelectColumn {
  /** column name */
  Date = "date",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Total = "total",
}

/** Streaming cursor of the table "household_daily_total_view" */
export type HouseholdDailyTotalViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdDailyTotalViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdDailyTotalViewStreamCursorValueInput = {
  date?: InputMaybe<Scalars["date"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  total?: InputMaybe<Scalars["numeric"]>;
};

/** order by aggregate values of table "household.dashboard_setting" */
export type HouseholdDashboardSettingAggregateOrderBy = {
  avg?: InputMaybe<HouseholdDashboardSettingAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdDashboardSettingMaxOrderBy>;
  min?: InputMaybe<HouseholdDashboardSettingMinOrderBy>;
  stddev?: InputMaybe<HouseholdDashboardSettingStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdDashboardSettingStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdDashboardSettingStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdDashboardSettingSumOrderBy>;
  varPop?: InputMaybe<HouseholdDashboardSettingVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdDashboardSettingVarSampOrderBy>;
  variance?: InputMaybe<HouseholdDashboardSettingVarianceOrderBy>;
};

/** order by aggregate values of table "household.dashboard_setting_args" */
export type HouseholdDashboardSettingArgsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdDashboardSettingArgsMaxOrderBy>;
  min?: InputMaybe<HouseholdDashboardSettingArgsMinOrderBy>;
};

/** input type for inserting array relation for remote table "household.dashboard_setting_args" */
export type HouseholdDashboardSettingArgsArrRelInsertInput = {
  data: Array<HouseholdDashboardSettingArgsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdDashboardSettingArgsOnConflict>;
};

/** Boolean expression to filter rows from the table "household.dashboard_setting_args". All fields are combined with a logical 'AND'. */
export type HouseholdDashboardSettingArgsBoolExp = {
  _and?: InputMaybe<Array<HouseholdDashboardSettingArgsBoolExp>>;
  _not?: InputMaybe<HouseholdDashboardSettingArgsBoolExp>;
  _or?: InputMaybe<Array<HouseholdDashboardSettingArgsBoolExp>>;
  dashboardSetting?: InputMaybe<HouseholdDashboardSettingBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  settingId?: InputMaybe<StringComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "household.dashboard_setting_args" */
export enum HouseholdDashboardSettingArgsConstraint {
  /** unique or primary key constraint on columns "id" */
  DashboardSettingArgsPkey = "dashboard_setting_args_pkey",
}

/** input type for inserting data into table "household.dashboard_setting_args" */
export type HouseholdDashboardSettingArgsInsertInput = {
  dashboardSetting?: InputMaybe<HouseholdDashboardSettingObjRelInsertInput>;
  id?: InputMaybe<Scalars["String"]>;
  settingId?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.dashboard_setting_args" */
export type HouseholdDashboardSettingArgsMaxOrderBy = {
  id?: InputMaybe<OrderBy>;
  settingId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.dashboard_setting_args" */
export type HouseholdDashboardSettingArgsMinOrderBy = {
  id?: InputMaybe<OrderBy>;
  settingId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** on_conflict condition type for table "household.dashboard_setting_args" */
export type HouseholdDashboardSettingArgsOnConflict = {
  constraint: HouseholdDashboardSettingArgsConstraint;
  updateColumns?: Array<HouseholdDashboardSettingArgsUpdateColumn>;
  where?: InputMaybe<HouseholdDashboardSettingArgsBoolExp>;
};

/** Ordering options when selecting data from "household.dashboard_setting_args". */
export type HouseholdDashboardSettingArgsOrderBy = {
  dashboardSetting?: InputMaybe<HouseholdDashboardSettingOrderBy>;
  id?: InputMaybe<OrderBy>;
  settingId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** select columns of table "household.dashboard_setting_args" */
export enum HouseholdDashboardSettingArgsSelectColumn {
  /** column name */
  Id = "id",
  /** column name */
  SettingId = "settingId",
  /** column name */
  Type = "type",
  /** column name */
  Value = "value",
}

/** Streaming cursor of the table "household_dashboard_setting_args" */
export type HouseholdDashboardSettingArgsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdDashboardSettingArgsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdDashboardSettingArgsStreamCursorValueInput = {
  id?: InputMaybe<Scalars["String"]>;
  settingId?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["String"]>;
};

/** placeholder for update columns of table "household.dashboard_setting_args" (current role has no relevant permissions) */
export enum HouseholdDashboardSettingArgsUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** order by avg() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingAvgOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.dashboard_setting". All fields are combined with a logical 'AND'. */
export type HouseholdDashboardSettingBoolExp = {
  _and?: InputMaybe<Array<HouseholdDashboardSettingBoolExp>>;
  _not?: InputMaybe<HouseholdDashboardSettingBoolExp>;
  _or?: InputMaybe<Array<HouseholdDashboardSettingBoolExp>>;
  dashboardSettingArgs?: InputMaybe<HouseholdDashboardSettingArgsBoolExp>;
  feature?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  order?: InputMaybe<IntComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "household.dashboard_setting" */
export enum HouseholdDashboardSettingConstraint {
  /** unique or primary key constraint on columns "id" */
  DashboardSettingPkey = "dashboard_setting_pkey",
}

/** input type for incrementing numeric columns in table "household.dashboard_setting" */
export type HouseholdDashboardSettingIncInput = {
  order?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "household.dashboard_setting" */
export type HouseholdDashboardSettingInsertInput = {
  dashboardSettingArgs?: InputMaybe<HouseholdDashboardSettingArgsArrRelInsertInput>;
  feature?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Scalars["Int"]>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingMaxOrderBy = {
  feature?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingMinOrderBy = {
  feature?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "household.dashboard_setting" */
export type HouseholdDashboardSettingObjRelInsertInput = {
  data: HouseholdDashboardSettingInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdDashboardSettingOnConflict>;
};

/** on_conflict condition type for table "household.dashboard_setting" */
export type HouseholdDashboardSettingOnConflict = {
  constraint: HouseholdDashboardSettingConstraint;
  updateColumns?: Array<HouseholdDashboardSettingUpdateColumn>;
  where?: InputMaybe<HouseholdDashboardSettingBoolExp>;
};

/** Ordering options when selecting data from "household.dashboard_setting". */
export type HouseholdDashboardSettingOrderBy = {
  dashboardSettingArgsAggregate?: InputMaybe<HouseholdDashboardSettingArgsAggregateOrderBy>;
  feature?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: household.dashboard_setting */
export type HouseholdDashboardSettingPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "household.dashboard_setting" */
export enum HouseholdDashboardSettingSelectColumn {
  /** column name */
  Feature = "feature",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Order = "order",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "household.dashboard_setting" */
export type HouseholdDashboardSettingSetInput = {
  feature?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Scalars["Int"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** order by stddev() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingStddevOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingStddevPopOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingStddevSampOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_dashboard_setting" */
export type HouseholdDashboardSettingStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdDashboardSettingStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdDashboardSettingStreamCursorValueInput = {
  feature?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Scalars["Int"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** order by sum() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingSumOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** update columns of table "household.dashboard_setting" */
export enum HouseholdDashboardSettingUpdateColumn {
  /** column name */
  Feature = "feature",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Order = "order",
  /** column name */
  UserId = "userId",
}

export type HouseholdDashboardSettingUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HouseholdDashboardSettingIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdDashboardSettingSetInput>;
  /** filter the rows which have to be updated */
  where: HouseholdDashboardSettingBoolExp;
};

/** order by varPop() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingVarPopOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingVarSampOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingVarianceOrderBy = {
  order?: InputMaybe<OrderBy>;
};

export type HouseholdDepositCategoryAggregateBoolExp = {
  count?: InputMaybe<HouseholdDepositCategoryAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.deposit_category" */
export type HouseholdDepositCategoryAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdDepositCategoryMaxOrderBy>;
  min?: InputMaybe<HouseholdDepositCategoryMinOrderBy>;
};

/** Boolean expression to filter rows from the table "household.deposit_category". All fields are combined with a logical 'AND'. */
export type HouseholdDepositCategoryBoolExp = {
  _and?: InputMaybe<Array<HouseholdDepositCategoryBoolExp>>;
  _not?: InputMaybe<HouseholdDepositCategoryBoolExp>;
  _or?: InputMaybe<Array<HouseholdDepositCategoryBoolExp>>;
  category?: InputMaybe<HouseholdCategoryBoolExp>;
  categoryId?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
};

/** order by max() on columns of table "household.deposit_category" */
export type HouseholdDepositCategoryMaxOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.deposit_category" */
export type HouseholdDepositCategoryMinOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "household.deposit_category". */
export type HouseholdDepositCategoryOrderBy = {
  category?: InputMaybe<HouseholdCategoryOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** select columns of table "household.deposit_category" */
export enum HouseholdDepositCategorySelectColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  GroupId = "groupId",
}

/** Streaming cursor of the table "household_deposit_category" */
export type HouseholdDepositCategoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdDepositCategoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdDepositCategoryStreamCursorValueInput = {
  categoryId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
};

export type HouseholdDetailTagAggregateBoolExp = {
  count?: InputMaybe<HouseholdDetailTagAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.detail_tag" */
export type HouseholdDetailTagAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdDetailTagMaxOrderBy>;
  min?: InputMaybe<HouseholdDetailTagMinOrderBy>;
};

/** input type for inserting array relation for remote table "household.detail_tag" */
export type HouseholdDetailTagArrRelInsertInput = {
  data: Array<HouseholdDetailTagInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdDetailTagOnConflict>;
};

/** Boolean expression to filter rows from the table "household.detail_tag". All fields are combined with a logical 'AND'. */
export type HouseholdDetailTagBoolExp = {
  _and?: InputMaybe<Array<HouseholdDetailTagBoolExp>>;
  _not?: InputMaybe<HouseholdDetailTagBoolExp>;
  _or?: InputMaybe<Array<HouseholdDetailTagBoolExp>>;
  creditCardDetailsDetailTag?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
  dailyDetailsDetailTag?: InputMaybe<HouseholdDailyDetailBoolExp>;
  detailId?: InputMaybe<StringComparisonExp>;
  details?: InputMaybe<HouseholdAllDetailViewBoolExp>;
  detailsAggregate?: InputMaybe<HouseholdAllDetailViewAggregateBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  tag?: InputMaybe<HouseholdTagBoolExp>;
  tagId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "household.detail_tag" */
export enum HouseholdDetailTagConstraint {
  /** unique or primary key constraint on columns "id" */
  DetailTagPkey = "detail_tag_pkey",
}

/** input type for inserting data into table "household.detail_tag" */
export type HouseholdDetailTagInsertInput = {
  creditCardDetailsDetailTag?: InputMaybe<HouseholdCreditCardDetailArrRelInsertInput>;
  dailyDetailsDetailTag?: InputMaybe<HouseholdDailyDetailArrRelInsertInput>;
  detailId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  tag?: InputMaybe<HouseholdTagObjRelInsertInput>;
  tagId?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.detail_tag" */
export type HouseholdDetailTagMaxOrderBy = {
  detailId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tagId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.detail_tag" */
export type HouseholdDetailTagMinOrderBy = {
  detailId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tagId?: InputMaybe<OrderBy>;
};

/** on_conflict condition type for table "household.detail_tag" */
export type HouseholdDetailTagOnConflict = {
  constraint: HouseholdDetailTagConstraint;
  updateColumns?: Array<HouseholdDetailTagUpdateColumn>;
  where?: InputMaybe<HouseholdDetailTagBoolExp>;
};

/** Ordering options when selecting data from "household.detail_tag". */
export type HouseholdDetailTagOrderBy = {
  creditCardDetailsDetailTagAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateOrderBy>;
  dailyDetailsDetailTagAggregate?: InputMaybe<HouseholdDailyDetailAggregateOrderBy>;
  detailId?: InputMaybe<OrderBy>;
  detailsAggregate?: InputMaybe<HouseholdAllDetailViewAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  tag?: InputMaybe<HouseholdTagOrderBy>;
  tagId?: InputMaybe<OrderBy>;
};

/** select columns of table "household.detail_tag" */
export enum HouseholdDetailTagSelectColumn {
  /** column name */
  DetailId = "detailId",
  /** column name */
  Id = "id",
  /** column name */
  TagId = "tagId",
}

/** Streaming cursor of the table "household_detail_tag" */
export type HouseholdDetailTagStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdDetailTagStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdDetailTagStreamCursorValueInput = {
  detailId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  tagId?: InputMaybe<Scalars["String"]>;
};

/** placeholder for update columns of table "household.detail_tag" (current role has no relevant permissions) */
export enum HouseholdDetailTagUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

export type HouseholdFavoriteFilterAggregateBoolExp = {
  count?: InputMaybe<HouseholdFavoriteFilterAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.favorite_filter" */
export type HouseholdFavoriteFilterAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdFavoriteFilterMaxOrderBy>;
  min?: InputMaybe<HouseholdFavoriteFilterMinOrderBy>;
};

export type HouseholdFavoriteFilterArgsAggregateBoolExp = {
  count?: InputMaybe<HouseholdFavoriteFilterArgsAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.favorite_filter_args" */
export type HouseholdFavoriteFilterArgsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdFavoriteFilterArgsMaxOrderBy>;
  min?: InputMaybe<HouseholdFavoriteFilterArgsMinOrderBy>;
};

/** input type for inserting array relation for remote table "household.favorite_filter_args" */
export type HouseholdFavoriteFilterArgsArrRelInsertInput = {
  data: Array<HouseholdFavoriteFilterArgsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdFavoriteFilterArgsOnConflict>;
};

/** Boolean expression to filter rows from the table "household.favorite_filter_args". All fields are combined with a logical 'AND'. */
export type HouseholdFavoriteFilterArgsBoolExp = {
  _and?: InputMaybe<Array<HouseholdFavoriteFilterArgsBoolExp>>;
  _not?: InputMaybe<HouseholdFavoriteFilterArgsBoolExp>;
  _or?: InputMaybe<Array<HouseholdFavoriteFilterArgsBoolExp>>;
  favoriteFilter?: InputMaybe<HouseholdFavoriteFilterBoolExp>;
  favoriteFilterArgCategoryId?: InputMaybe<HouseholdCategoryBoolExp>;
  filterId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  key?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "household.favorite_filter_args" */
export enum HouseholdFavoriteFilterArgsConstraint {
  /** unique or primary key constraint on columns "id" */
  FavoriteFilterArgsPkey = "favorite_filter_args_pkey",
}

/** input type for inserting data into table "household.favorite_filter_args" */
export type HouseholdFavoriteFilterArgsInsertInput = {
  favoriteFilter?: InputMaybe<HouseholdFavoriteFilterObjRelInsertInput>;
  favoriteFilterArgCategoryId?: InputMaybe<HouseholdCategoryObjRelInsertInput>;
  filterId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  key?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.favorite_filter_args" */
export type HouseholdFavoriteFilterArgsMaxOrderBy = {
  filterId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.favorite_filter_args" */
export type HouseholdFavoriteFilterArgsMinOrderBy = {
  filterId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** on_conflict condition type for table "household.favorite_filter_args" */
export type HouseholdFavoriteFilterArgsOnConflict = {
  constraint: HouseholdFavoriteFilterArgsConstraint;
  updateColumns?: Array<HouseholdFavoriteFilterArgsUpdateColumn>;
  where?: InputMaybe<HouseholdFavoriteFilterArgsBoolExp>;
};

/** Ordering options when selecting data from "household.favorite_filter_args". */
export type HouseholdFavoriteFilterArgsOrderBy = {
  favoriteFilter?: InputMaybe<HouseholdFavoriteFilterOrderBy>;
  favoriteFilterArgCategoryId?: InputMaybe<HouseholdCategoryOrderBy>;
  filterId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: household.favorite_filter_args */
export type HouseholdFavoriteFilterArgsPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "household.favorite_filter_args" */
export enum HouseholdFavoriteFilterArgsSelectColumn {
  /** column name */
  FilterId = "filterId",
  /** column name */
  Id = "id",
  /** column name */
  Key = "key",
  /** column name */
  Value = "value",
}

/** input type for updating data in table "household.favorite_filter_args" */
export type HouseholdFavoriteFilterArgsSetInput = {
  key?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "household.favorite_filter_args" */
export enum HouseholdFavoriteFilterArgsUpdateColumn {
  /** column name */
  Key = "key",
  /** column name */
  Value = "value",
}

export type HouseholdFavoriteFilterArgsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdFavoriteFilterArgsSetInput>;
  /** filter the rows which have to be updated */
  where: HouseholdFavoriteFilterArgsBoolExp;
};

/** Boolean expression to filter rows from the table "household.favorite_filter". All fields are combined with a logical 'AND'. */
export type HouseholdFavoriteFilterBoolExp = {
  _and?: InputMaybe<Array<HouseholdFavoriteFilterBoolExp>>;
  _not?: InputMaybe<HouseholdFavoriteFilterBoolExp>;
  _or?: InputMaybe<Array<HouseholdFavoriteFilterBoolExp>>;
  favoriteFilterArgs?: InputMaybe<HouseholdFavoriteFilterArgsBoolExp>;
  favoriteFilterArgsAggregate?: InputMaybe<HouseholdFavoriteFilterArgsAggregateBoolExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "household.favorite_filter" */
export enum HouseholdFavoriteFilterConstraint {
  /** unique or primary key constraint on columns "id" */
  FavoriteFilterPkey = "favorite_filter_pkey",
}

/** input type for inserting data into table "household.favorite_filter" */
export type HouseholdFavoriteFilterInsertInput = {
  favoriteFilterArgs?: InputMaybe<HouseholdFavoriteFilterArgsArrRelInsertInput>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.favorite_filter" */
export type HouseholdFavoriteFilterMaxOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.favorite_filter" */
export type HouseholdFavoriteFilterMinOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "household.favorite_filter" */
export type HouseholdFavoriteFilterObjRelInsertInput = {
  data: HouseholdFavoriteFilterInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdFavoriteFilterOnConflict>;
};

/** on_conflict condition type for table "household.favorite_filter" */
export type HouseholdFavoriteFilterOnConflict = {
  constraint: HouseholdFavoriteFilterConstraint;
  updateColumns?: Array<HouseholdFavoriteFilterUpdateColumn>;
  where?: InputMaybe<HouseholdFavoriteFilterBoolExp>;
};

/** Ordering options when selecting data from "household.favorite_filter". */
export type HouseholdFavoriteFilterOrderBy = {
  favoriteFilterArgsAggregate?: InputMaybe<HouseholdFavoriteFilterArgsAggregateOrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: household.favorite_filter */
export type HouseholdFavoriteFilterPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "household.favorite_filter" */
export enum HouseholdFavoriteFilterSelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "household.favorite_filter" */
export type HouseholdFavoriteFilterSetInput = {
  name?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "household.favorite_filter" */
export enum HouseholdFavoriteFilterUpdateColumn {
  /** column name */
  Name = "name",
}

export type HouseholdFavoriteFilterUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdFavoriteFilterSetInput>;
  /** filter the rows which have to be updated */
  where: HouseholdFavoriteFilterBoolExp;
};

export type HouseholdGenreAggregateBoolExp = {
  bool_and?: InputMaybe<HouseholdGenreAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<HouseholdGenreAggregateBoolExpBool_Or>;
  count?: InputMaybe<HouseholdGenreAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.genre" */
export type HouseholdGenreAggregateOrderBy = {
  avg?: InputMaybe<HouseholdGenreAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdGenreMaxOrderBy>;
  min?: InputMaybe<HouseholdGenreMinOrderBy>;
  stddev?: InputMaybe<HouseholdGenreStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdGenreStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdGenreStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdGenreSumOrderBy>;
  varPop?: InputMaybe<HouseholdGenreVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdGenreVarSampOrderBy>;
  variance?: InputMaybe<HouseholdGenreVarianceOrderBy>;
};

/** order by avg() on columns of table "household.genre" */
export type HouseholdGenreAvgOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.genre". All fields are combined with a logical 'AND'. */
export type HouseholdGenreBoolExp = {
  _and?: InputMaybe<Array<HouseholdGenreBoolExp>>;
  _not?: InputMaybe<HouseholdGenreBoolExp>;
  _or?: InputMaybe<Array<HouseholdGenreBoolExp>>;
  categories?: InputMaybe<HouseholdCategoryBoolExp>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  genreType?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  iocomeType?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  validFlag?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "household.genre" */
export enum HouseholdGenreConstraint {
  /** unique or primary key constraint on columns "id" */
  GenrePkey = "genre_pkey",
}

/** input type for incrementing numeric columns in table "household.genre" */
export type HouseholdGenreIncInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "household.genre" */
export type HouseholdGenreInsertInput = {
  categories?: InputMaybe<HouseholdCategoryArrRelInsertInput>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailArrRelInsertInput>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreType?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by max() on columns of table "household.genre" */
export type HouseholdGenreMaxOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
  genreType?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.genre" */
export type HouseholdGenreMinOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
  genreType?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "household.genre" */
export type HouseholdGenreObjRelInsertInput = {
  data: HouseholdGenreInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdGenreOnConflict>;
};

/** on_conflict condition type for table "household.genre" */
export type HouseholdGenreOnConflict = {
  constraint: HouseholdGenreConstraint;
  updateColumns?: Array<HouseholdGenreUpdateColumn>;
  where?: InputMaybe<HouseholdGenreBoolExp>;
};

/** Ordering options when selecting data from "household.genre". */
export type HouseholdGenreOrderBy = {
  categoriesAggregate?: InputMaybe<HouseholdCategoryAggregateOrderBy>;
  creditCardDetailsAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateOrderBy>;
  dailyDetailsAggregate?: InputMaybe<HouseholdDailyDetailAggregateOrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  genreType?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  validFlag?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: household.genre */
export type HouseholdGenrePkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "household.genre" */
export enum HouseholdGenreSelectColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GenreType = "genreType",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Name = "name",
  /** column name */
  ValidFlag = "validFlag",
}

/** select "householdGenreAggregateBoolExpBool_andArgumentsColumns" columns of table "household.genre" */
export enum HouseholdGenreSelectColumnHouseholdGenreAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  ValidFlag = "validFlag",
}

/** select "householdGenreAggregateBoolExpBool_orArgumentsColumns" columns of table "household.genre" */
export enum HouseholdGenreSelectColumnHouseholdGenreAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  ValidFlag = "validFlag",
}

/** input type for updating data in table "household.genre" */
export type HouseholdGenreSetInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreType?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by stddev() on columns of table "household.genre" */
export type HouseholdGenreStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.genre" */
export type HouseholdGenreStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.genre" */
export type HouseholdGenreStddevSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_genre" */
export type HouseholdGenreStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdGenreStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdGenreStreamCursorValueInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreType?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by sum() on columns of table "household.genre" */
export type HouseholdGenreSumOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** update columns of table "household.genre" */
export enum HouseholdGenreUpdateColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GenreType = "genreType",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Name = "name",
  /** column name */
  ValidFlag = "validFlag",
}

export type HouseholdGenreUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HouseholdGenreIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdGenreSetInput>;
  /** filter the rows which have to be updated */
  where: HouseholdGenreBoolExp;
};

/** order by varPop() on columns of table "household.genre" */
export type HouseholdGenreVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.genre" */
export type HouseholdGenreVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.genre" */
export type HouseholdGenreVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

export type HouseholdImportFileHistoryAggregateBoolExp = {
  count?: InputMaybe<HouseholdImportFileHistoryAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.import_file_history" */
export type HouseholdImportFileHistoryAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdImportFileHistoryMaxOrderBy>;
  min?: InputMaybe<HouseholdImportFileHistoryMinOrderBy>;
};

/** Boolean expression to filter rows from the table "household.import_file_history". All fields are combined with a logical 'AND'. */
export type HouseholdImportFileHistoryBoolExp = {
  _and?: InputMaybe<Array<HouseholdImportFileHistoryBoolExp>>;
  _not?: InputMaybe<HouseholdImportFileHistoryBoolExp>;
  _or?: InputMaybe<Array<HouseholdImportFileHistoryBoolExp>>;
  fileName?: InputMaybe<StringComparisonExp>;
  fileType?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  importDatetime?: InputMaybe<TimestampComparisonExp>;
  importUserId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "household.import_file_history" */
export enum HouseholdImportFileHistoryConstraint {
  /** unique or primary key constraint on columns "id" */
  ImportFileHistoryPkey = "import_file_history_pkey",
}

/** input type for inserting data into table "household.import_file_history" */
export type HouseholdImportFileHistoryInsertInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  fileType?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  importDatetime?: InputMaybe<Scalars["timestamp"]>;
  importUserId?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.import_file_history" */
export type HouseholdImportFileHistoryMaxOrderBy = {
  fileName?: InputMaybe<OrderBy>;
  fileType?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  importDatetime?: InputMaybe<OrderBy>;
  importUserId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.import_file_history" */
export type HouseholdImportFileHistoryMinOrderBy = {
  fileName?: InputMaybe<OrderBy>;
  fileType?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  importDatetime?: InputMaybe<OrderBy>;
  importUserId?: InputMaybe<OrderBy>;
};

/** on_conflict condition type for table "household.import_file_history" */
export type HouseholdImportFileHistoryOnConflict = {
  constraint: HouseholdImportFileHistoryConstraint;
  updateColumns?: Array<HouseholdImportFileHistoryUpdateColumn>;
  where?: InputMaybe<HouseholdImportFileHistoryBoolExp>;
};

/** Ordering options when selecting data from "household.import_file_history". */
export type HouseholdImportFileHistoryOrderBy = {
  fileName?: InputMaybe<OrderBy>;
  fileType?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  importDatetime?: InputMaybe<OrderBy>;
  importUserId?: InputMaybe<OrderBy>;
};

/** select columns of table "household.import_file_history" */
export enum HouseholdImportFileHistorySelectColumn {
  /** column name */
  FileName = "fileName",
  /** column name */
  FileType = "fileType",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  ImportDatetime = "importDatetime",
  /** column name */
  ImportUserId = "importUserId",
}

/** Streaming cursor of the table "household_import_file_history" */
export type HouseholdImportFileHistoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdImportFileHistoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdImportFileHistoryStreamCursorValueInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  fileType?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  importDatetime?: InputMaybe<Scalars["timestamp"]>;
  importUserId?: InputMaybe<Scalars["String"]>;
};

/** placeholder for update columns of table "household.import_file_history" (current role has no relevant permissions) */
export enum HouseholdImportFileHistoryUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** order by aggregate values of table "household.tag" */
export type HouseholdTagAggregateOrderBy = {
  avg?: InputMaybe<HouseholdTagAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdTagMaxOrderBy>;
  min?: InputMaybe<HouseholdTagMinOrderBy>;
  stddev?: InputMaybe<HouseholdTagStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdTagStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdTagStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdTagSumOrderBy>;
  varPop?: InputMaybe<HouseholdTagVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdTagVarSampOrderBy>;
  variance?: InputMaybe<HouseholdTagVarianceOrderBy>;
};

/** order by avg() on columns of table "household.tag" */
export type HouseholdTagAvgOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.tag". All fields are combined with a logical 'AND'. */
export type HouseholdTagBoolExp = {
  _and?: InputMaybe<Array<HouseholdTagBoolExp>>;
  _not?: InputMaybe<HouseholdTagBoolExp>;
  _or?: InputMaybe<Array<HouseholdTagBoolExp>>;
  colorCode?: InputMaybe<BpcharComparisonExp>;
  detailTags?: InputMaybe<HouseholdDetailTagBoolExp>;
  detailTagsAggregate?: InputMaybe<HouseholdDetailTagAggregateBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "household.tag" */
export enum HouseholdTagConstraint {
  /** unique or primary key constraint on columns "id" */
  MTagPkey = "m_tag_pkey",
}

/** input type for incrementing numeric columns in table "household.tag" */
export type HouseholdTagIncInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "household.tag" */
export type HouseholdTagInsertInput = {
  colorCode?: InputMaybe<Scalars["bpchar"]>;
  detailTags?: InputMaybe<HouseholdDetailTagArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.tag" */
export type HouseholdTagMaxOrderBy = {
  colorCode?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.tag" */
export type HouseholdTagMinOrderBy = {
  colorCode?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "household.tag" */
export type HouseholdTagObjRelInsertInput = {
  data: HouseholdTagInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdTagOnConflict>;
};

/** on_conflict condition type for table "household.tag" */
export type HouseholdTagOnConflict = {
  constraint: HouseholdTagConstraint;
  updateColumns?: Array<HouseholdTagUpdateColumn>;
  where?: InputMaybe<HouseholdTagBoolExp>;
};

/** Ordering options when selecting data from "household.tag". */
export type HouseholdTagOrderBy = {
  colorCode?: InputMaybe<OrderBy>;
  detailTagsAggregate?: InputMaybe<HouseholdDetailTagAggregateOrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: household.tag */
export type HouseholdTagPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "household.tag" */
export enum HouseholdTagSelectColumn {
  /** column name */
  ColorCode = "colorCode",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "household.tag" */
export type HouseholdTagSetInput = {
  colorCode?: InputMaybe<Scalars["bpchar"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** order by stddev() on columns of table "household.tag" */
export type HouseholdTagStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.tag" */
export type HouseholdTagStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.tag" */
export type HouseholdTagStddevSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_tag" */
export type HouseholdTagStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdTagStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdTagStreamCursorValueInput = {
  colorCode?: InputMaybe<Scalars["bpchar"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** order by sum() on columns of table "household.tag" */
export type HouseholdTagSumOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** update columns of table "household.tag" */
export enum HouseholdTagUpdateColumn {
  /** column name */
  ColorCode = "colorCode",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  Name = "name",
}

export type HouseholdTagUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HouseholdTagIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdTagSetInput>;
  /** filter the rows which have to be updated */
  where: HouseholdTagBoolExp;
};

/** order by varPop() on columns of table "household.tag" */
export type HouseholdTagVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.tag" */
export type HouseholdTagVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.tag" */
export type HouseholdTagVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

export type HouseholdTotalByCategoryViewAggregateBoolExp = {
  count?: InputMaybe<HouseholdTotalByCategoryViewAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewAggregateOrderBy = {
  avg?: InputMaybe<HouseholdTotalByCategoryViewAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdTotalByCategoryViewMaxOrderBy>;
  min?: InputMaybe<HouseholdTotalByCategoryViewMinOrderBy>;
  stddev?: InputMaybe<HouseholdTotalByCategoryViewStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdTotalByCategoryViewStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdTotalByCategoryViewStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdTotalByCategoryViewSumOrderBy>;
  varPop?: InputMaybe<HouseholdTotalByCategoryViewVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdTotalByCategoryViewVarSampOrderBy>;
  variance?: InputMaybe<HouseholdTotalByCategoryViewVarianceOrderBy>;
};

/** order by avg() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewAvgOrderBy = {
  total?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.total_by_category_view". All fields are combined with a logical 'AND'. */
export type HouseholdTotalByCategoryViewBoolExp = {
  _and?: InputMaybe<Array<HouseholdTotalByCategoryViewBoolExp>>;
  _not?: InputMaybe<HouseholdTotalByCategoryViewBoolExp>;
  _or?: InputMaybe<Array<HouseholdTotalByCategoryViewBoolExp>>;
  categoryId?: InputMaybe<StringComparisonExp>;
  categoryName?: InputMaybe<StringComparisonExp>;
  date?: InputMaybe<DateComparisonExp>;
  genreId?: InputMaybe<StringComparisonExp>;
  genreName?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  iocomeType?: InputMaybe<StringComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** order by max() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewMaxOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  categoryName?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  genreName?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewMinOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  categoryName?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  genreName?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "household.total_by_category_view". */
export type HouseholdTotalByCategoryViewOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  categoryName?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  genreName?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** select columns of table "household.total_by_category_view" */
export enum HouseholdTotalByCategoryViewSelectColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  CategoryName = "categoryName",
  /** column name */
  Date = "date",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GenreName = "genreName",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Total = "total",
}

/** order by stddev() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewStddevOrderBy = {
  total?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewStddevPopOrderBy = {
  total?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewStddevSampOrderBy = {
  total?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_total_by_category_view" */
export type HouseholdTotalByCategoryViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdTotalByCategoryViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdTotalByCategoryViewStreamCursorValueInput = {
  categoryId?: InputMaybe<Scalars["String"]>;
  categoryName?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  genreName?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  total?: InputMaybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewSumOrderBy = {
  total?: InputMaybe<OrderBy>;
};

/** order by varPop() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewVarPopOrderBy = {
  total?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewVarSampOrderBy = {
  total?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewVarianceOrderBy = {
  total?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.total_by_genre_view". All fields are combined with a logical 'AND'. */
export type HouseholdTotalByGenreViewBoolExp = {
  _and?: InputMaybe<Array<HouseholdTotalByGenreViewBoolExp>>;
  _not?: InputMaybe<HouseholdTotalByGenreViewBoolExp>;
  _or?: InputMaybe<Array<HouseholdTotalByGenreViewBoolExp>>;
  date?: InputMaybe<DateComparisonExp>;
  genreId?: InputMaybe<StringComparisonExp>;
  genreName?: InputMaybe<StringComparisonExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  iocomeType?: InputMaybe<StringComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "household.total_by_genre_view". */
export type HouseholdTotalByGenreViewOrderBy = {
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  genreName?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** select columns of table "household.total_by_genre_view" */
export enum HouseholdTotalByGenreViewSelectColumn {
  /** column name */
  Date = "date",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GenreName = "genreName",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Total = "total",
}

/** Streaming cursor of the table "household_total_by_genre_view" */
export type HouseholdTotalByGenreViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdTotalByGenreViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdTotalByGenreViewStreamCursorValueInput = {
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  genreName?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  total?: InputMaybe<Scalars["numeric"]>;
};

export type HouseholdTransferCategoryAggregateBoolExp = {
  count?: InputMaybe<HouseholdTransferCategoryAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.transfer_category" */
export type HouseholdTransferCategoryAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdTransferCategoryMaxOrderBy>;
  min?: InputMaybe<HouseholdTransferCategoryMinOrderBy>;
};

/** Boolean expression to filter rows from the table "household.transfer_category". All fields are combined with a logical 'AND'. */
export type HouseholdTransferCategoryBoolExp = {
  _and?: InputMaybe<Array<HouseholdTransferCategoryBoolExp>>;
  _not?: InputMaybe<HouseholdTransferCategoryBoolExp>;
  _or?: InputMaybe<Array<HouseholdTransferCategoryBoolExp>>;
  categoryByIncomeCategoryId?: InputMaybe<HouseholdCategoryBoolExp>;
  categoryByOutcomeCategoryId?: InputMaybe<HouseholdCategoryBoolExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  incomeCategoryId?: InputMaybe<StringComparisonExp>;
  outcomeCategoryId?: InputMaybe<StringComparisonExp>;
};

/** order by max() on columns of table "household.transfer_category" */
export type HouseholdTransferCategoryMaxOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  incomeCategoryId?: InputMaybe<OrderBy>;
  outcomeCategoryId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.transfer_category" */
export type HouseholdTransferCategoryMinOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  incomeCategoryId?: InputMaybe<OrderBy>;
  outcomeCategoryId?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "household.transfer_category". */
export type HouseholdTransferCategoryOrderBy = {
  categoryByIncomeCategoryId?: InputMaybe<HouseholdCategoryOrderBy>;
  categoryByOutcomeCategoryId?: InputMaybe<HouseholdCategoryOrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  incomeCategoryId?: InputMaybe<OrderBy>;
  outcomeCategoryId?: InputMaybe<OrderBy>;
};

/** select columns of table "household.transfer_category" */
export enum HouseholdTransferCategorySelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  IncomeCategoryId = "incomeCategoryId",
  /** column name */
  OutcomeCategoryId = "outcomeCategoryId",
}

/** Streaming cursor of the table "household_transfer_category" */
export type HouseholdTransferCategoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdTransferCategoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdTransferCategoryStreamCursorValueInput = {
  groupId?: InputMaybe<Scalars["String"]>;
  incomeCategoryId?: InputMaybe<Scalars["String"]>;
  outcomeCategoryId?: InputMaybe<Scalars["String"]>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars["Int"]>;
  _gt?: InputMaybe<Scalars["Int"]>;
  _gte?: InputMaybe<Scalars["Int"]>;
  _in?: InputMaybe<Array<Scalars["Int"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Int"]>;
  _lte?: InputMaybe<Scalars["Int"]>;
  _neq?: InputMaybe<Scalars["Int"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: InputMaybe<Scalars["numeric"]>;
  _gt?: InputMaybe<Scalars["numeric"]>;
  _gte?: InputMaybe<Scalars["numeric"]>;
  _in?: InputMaybe<Array<Scalars["numeric"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["numeric"]>;
  _lte?: InputMaybe<Scalars["numeric"]>;
  _neq?: InputMaybe<Scalars["numeric"]>;
  _nin?: InputMaybe<Array<Scalars["numeric"]>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = "ASC",
  /** in ascending order, nulls first */
  AscNullsFirst = "ASC_NULLS_FIRST",
  /** in ascending order, nulls last */
  AscNullsLast = "ASC_NULLS_LAST",
  /** in descending order, nulls first */
  Desc = "DESC",
  /** in descending order, nulls first */
  DescNullsFirst = "DESC_NULLS_FIRST",
  /** in descending order, nulls last */
  DescNullsLast = "DESC_NULLS_LAST",
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
  _eq?: InputMaybe<Scalars["timestamp"]>;
  _gt?: InputMaybe<Scalars["timestamp"]>;
  _gte?: InputMaybe<Scalars["timestamp"]>;
  _in?: InputMaybe<Array<Scalars["timestamp"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamp"]>;
  _lte?: InputMaybe<Scalars["timestamp"]>;
  _neq?: InputMaybe<Scalars["timestamp"]>;
  _nin?: InputMaybe<Array<Scalars["timestamp"]>>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<Array<UserBoolExp>>;
  _not?: InputMaybe<UserBoolExp>;
  _or?: InputMaybe<Array<UserBoolExp>>;
  affiliations?: InputMaybe<AffiliationBoolExp>;
  affiliationsAggregate?: InputMaybe<AffiliationAggregateBoolExp>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = "user_email_key",
  /** unique or primary key constraint on columns "id" */
  UserPkey = "user_pkey",
}

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  affiliations?: InputMaybe<AffiliationArrRelInsertInput>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailArrRelInsertInput>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** input type for inserting object relation for remote table "user" */
export type UserObjRelInsertInput = {
  data: UserInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UserOnConflict>;
};

/** on_conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint;
  updateColumns?: Array<UserUpdateColumn>;
  where?: InputMaybe<UserBoolExp>;
};

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  affiliationsAggregate?: InputMaybe<AffiliationAggregateOrderBy>;
  creditCardDetailsAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateOrderBy>;
  dailyDetailsAggregate?: InputMaybe<HouseholdDailyDetailAggregateOrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** Streaming cursor of the table "user" */
export type UserStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserStreamCursorValueInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** placeholder for update columns of table "user" (current role has no relevant permissions) */
export enum UserUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

export type AffiliationAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<AffiliationSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<AffiliationBoolExp>;
  predicate: IntComparisonExp;
};

export type CategoryTotalByMonthArgs = {
  from_date?: InputMaybe<Scalars["date"]>;
  group_id?: InputMaybe<Scalars["String"]>;
  to_date?: InputMaybe<Scalars["date"]>;
};

export type DailyDetailByDateArgs = {
  from_date?: InputMaybe<Scalars["date"]>;
  group_id?: InputMaybe<Scalars["String"]>;
  to_date?: InputMaybe<Scalars["date"]>;
};

export type GenreTotalByMonthArgs = {
  from_date?: InputMaybe<Scalars["date"]>;
  group_id?: InputMaybe<Scalars["String"]>;
  to_date?: InputMaybe<Scalars["date"]>;
};

export type GroupApplicationAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<GroupApplicationSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<GroupApplicationBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdAccountAggregateBoolExpBool_And = {
  arguments: HouseholdAccountSelectColumnHouseholdAccountAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdAccountBoolExp>;
  predicate: BooleanComparisonExp;
};

export type HouseholdAccountAggregateBoolExpBool_Or = {
  arguments: HouseholdAccountSelectColumnHouseholdAccountAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdAccountBoolExp>;
  predicate: BooleanComparisonExp;
};

export type HouseholdAccountAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdAccountSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdAccountBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdAllDetailViewAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdAllDetailViewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdAllDetailViewBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdCreditCardSummaryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdCreditCardSummarySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdDepositCategoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdDepositCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdDepositCategoryBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdDetailTagAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdDetailTagSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdDetailTagBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdFavoriteFilterAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdFavoriteFilterSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdFavoriteFilterBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdFavoriteFilterArgsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdFavoriteFilterArgsSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdFavoriteFilterArgsBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdGenreAggregateBoolExpBool_And = {
  arguments: HouseholdGenreSelectColumnHouseholdGenreAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdGenreBoolExp>;
  predicate: BooleanComparisonExp;
};

export type HouseholdGenreAggregateBoolExpBool_Or = {
  arguments: HouseholdGenreSelectColumnHouseholdGenreAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdGenreBoolExp>;
  predicate: BooleanComparisonExp;
};

export type HouseholdGenreAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdGenreSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdGenreBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdImportFileHistoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdImportFileHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdImportFileHistoryBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdTotalByCategoryViewAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdTotalByCategoryViewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdTotalByCategoryViewBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdTransferCategoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdTransferCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdTransferCategoryBoolExp>;
  predicate: IntComparisonExp;
};

export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars["String"];
}>;

export type GetUserByEmailQuery = {
  __typename?: "query_root";
  userByEmail: Array<{
    __typename?: "User";
    email: string;
    id: string;
    name?: string | null;
    affiliation: Array<{
      __typename?: "Affiliation";
      id: string;
      groupRole: string;
      group: { __typename?: "Group"; id: string; name: string };
    }>;
  }>;
};

export type GetApplicationsQueryVariables = Exact<{
  groupId: Scalars["String"];
}>;

export type GetApplicationsQuery = {
  __typename?: "query_root";
  group?: {
    __typename?: "Group";
    id: string;
    groupApplications: Array<{
      __typename?: "GroupApplication";
      id: string;
      application: {
        __typename?: "Application";
        id: string;
        name: string;
        topUrl: string;
      };
    }>;
    apps: Array<{ __typename?: "App"; id: string; name: string }>;
  } | null;
};

export const GetUserByEmailDocument = gql`
  query GetUserByEmail($email: String!) {
    userByEmail: user(where: { email: { _eq: $email } }) {
      email
      id
      name
      affiliation: affiliations {
        id
        group: group {
          id
          name
        }
        groupRole
      }
    }
  }
`;

export function useGetUserByEmailQuery(
  options: Omit<Urql.UseQueryArgs<GetUserByEmailQueryVariables>, "query">,
) {
  return Urql.useQuery<GetUserByEmailQuery, GetUserByEmailQueryVariables>({
    query: GetUserByEmailDocument,
    ...options,
  });
}
export const GetApplicationsDocument = gql`
  query getApplications($groupId: String!) {
    group: groupByPk(id: $groupId) {
      id
      groupApplications {
        id
        application {
          id
          name
          topUrl
        }
      }
      apps {
        id
        name
      }
    }
  }
`;

export function useGetApplicationsQuery(
  options: Omit<Urql.UseQueryArgs<GetApplicationsQueryVariables>, "query">,
) {
  return Urql.useQuery<GetApplicationsQuery, GetApplicationsQueryVariables>({
    query: GetApplicationsDocument,
    ...options,
  });
}
