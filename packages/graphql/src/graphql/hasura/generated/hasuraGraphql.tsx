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
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  numeric: any;
  timestamp: any;
}

/** columns and relationships of "affiliation" */
export interface IAffiliation {
  /** An object relationship */
  group: IGroup;
  groupId: Scalars["String"];
  groupRole: Scalars["String"];
  id: Scalars["String"];
  /** An object relationship */
  user: IUser;
  userId: Scalars["String"];
}

/** aggregated selection of "affiliation" */
export interface IAffiliationAggregate {
  aggregate?: Maybe<IAffiliationAggregateFields>;
  nodes: Array<IAffiliation>;
}

export interface IAffiliationAggregateBoolExp {
  count?: InputMaybe<IAffiliationAggregateBoolExpCount>;
}

/** aggregate fields of "affiliation" */
export interface IAffiliationAggregateFields {
  count: Scalars["Int"];
  max?: Maybe<IAffiliationMaxFields>;
  min?: Maybe<IAffiliationMinFields>;
}

/** aggregate fields of "affiliation" */
export interface IAffiliationAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<IAffiliationSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
}

/** order by aggregate values of table "affiliation" */
export interface IAffiliationAggregateOrderBy {
  count?: InputMaybe<IOrderBy>;
  max?: InputMaybe<IAffiliationMaxOrderBy>;
  min?: InputMaybe<IAffiliationMinOrderBy>;
}

/** input type for inserting array relation for remote table "affiliation" */
export interface IAffiliationArrRelInsertInput {
  data: Array<IAffiliationInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<IAffiliationOnConflict>;
}

/** Boolean expression to filter rows from the table "affiliation". All fields are combined with a logical 'AND'. */
export interface IAffiliationBoolExp {
  _and?: InputMaybe<Array<IAffiliationBoolExp>>;
  _not?: InputMaybe<IAffiliationBoolExp>;
  _or?: InputMaybe<Array<IAffiliationBoolExp>>;
  group?: InputMaybe<IGroupBoolExp>;
  groupId?: InputMaybe<IStringComparisonExp>;
  groupRole?: InputMaybe<IStringComparisonExp>;
  id?: InputMaybe<IStringComparisonExp>;
  user?: InputMaybe<IUserBoolExp>;
  userId?: InputMaybe<IStringComparisonExp>;
}

/** unique or primary key constraints on table "affiliation" */
export enum IAffiliationConstraint {
  /** unique or primary key constraint on columns "id" */
  AffiliationPkey = "affiliation_pkey",
}

/** input type for inserting data into table "affiliation" */
export interface IAffiliationInsertInput {
  groupId?: InputMaybe<Scalars["String"]>;
  groupRole?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<IUserObjRelInsertInput>;
  userId?: InputMaybe<Scalars["String"]>;
}

/** aggregate max on columns */
export interface IAffiliationMaxFields {
  groupId?: Maybe<Scalars["String"]>;
  groupRole?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
}

/** order by max() on columns of table "affiliation" */
export interface IAffiliationMaxOrderBy {
  groupId?: InputMaybe<IOrderBy>;
  groupRole?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  userId?: InputMaybe<IOrderBy>;
}

/** aggregate min on columns */
export interface IAffiliationMinFields {
  groupId?: Maybe<Scalars["String"]>;
  groupRole?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
}

/** order by min() on columns of table "affiliation" */
export interface IAffiliationMinOrderBy {
  groupId?: InputMaybe<IOrderBy>;
  groupRole?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  userId?: InputMaybe<IOrderBy>;
}

/** response of any mutation on the table "affiliation" */
export interface IAffiliationMutationResponse {
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<IAffiliation>;
}

/** on_conflict condition type for table "affiliation" */
export interface IAffiliationOnConflict {
  constraint: IAffiliationConstraint;
  updateColumns?: Array<IAffiliationUpdateColumn>;
  where?: InputMaybe<IAffiliationBoolExp>;
}

/** Ordering options when selecting data from "affiliation". */
export interface IAffiliationOrderBy {
  group?: InputMaybe<IGroupOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  groupRole?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  user?: InputMaybe<IUserOrderBy>;
  userId?: InputMaybe<IOrderBy>;
}

/** select columns of table "affiliation" */
export enum IAffiliationSelectColumn {
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
export interface IAffiliationStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IAffiliationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IAffiliationStreamCursorValueInput {
  groupId?: InputMaybe<Scalars["String"]>;
  groupRole?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
}

/** placeholder for update columns of table "affiliation" (current role has no relevant permissions) */
export enum IAffiliationUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** columns and relationships of "application" */
export interface IApplication {
  /** An array relationship */
  groupApplications: Array<IGroupApplication>;
  /** An aggregate relationship */
  groupApplicationsAggregate: IGroupApplicationAggregate;
  id: Scalars["String"];
  name: Scalars["String"];
  topUrl: Scalars["String"];
  validFlag?: Maybe<Scalars["Boolean"]>;
}

/** columns and relationships of "application" */
export interface IApplicationGroupApplicationsArgs {
  distinctOn?: InputMaybe<Array<IGroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IGroupApplicationOrderBy>>;
  where?: InputMaybe<IGroupApplicationBoolExp>;
}

/** columns and relationships of "application" */
export interface IApplicationGroupApplicationsAggregateArgs {
  distinctOn?: InputMaybe<Array<IGroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IGroupApplicationOrderBy>>;
  where?: InputMaybe<IGroupApplicationBoolExp>;
}

/** aggregated selection of "application" */
export interface IApplicationAggregate {
  aggregate?: Maybe<IApplicationAggregateFields>;
  nodes: Array<IApplication>;
}

/** aggregate fields of "application" */
export interface IApplicationAggregateFields {
  count: Scalars["Int"];
  max?: Maybe<IApplicationMaxFields>;
  min?: Maybe<IApplicationMinFields>;
}

/** aggregate fields of "application" */
export interface IApplicationAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<IApplicationSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
}

/** Boolean expression to filter rows from the table "application". All fields are combined with a logical 'AND'. */
export interface IApplicationBoolExp {
  _and?: InputMaybe<Array<IApplicationBoolExp>>;
  _not?: InputMaybe<IApplicationBoolExp>;
  _or?: InputMaybe<Array<IApplicationBoolExp>>;
  groupApplications?: InputMaybe<IGroupApplicationBoolExp>;
  groupApplicationsAggregate?: InputMaybe<IGroupApplicationAggregateBoolExp>;
  id?: InputMaybe<IStringComparisonExp>;
  name?: InputMaybe<IStringComparisonExp>;
  topUrl?: InputMaybe<IStringComparisonExp>;
  validFlag?: InputMaybe<IBooleanComparisonExp>;
}

/** aggregate max on columns */
export interface IApplicationMaxFields {
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  topUrl?: Maybe<Scalars["String"]>;
}

/** aggregate min on columns */
export interface IApplicationMinFields {
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  topUrl?: Maybe<Scalars["String"]>;
}

/** Ordering options when selecting data from "application". */
export interface IApplicationOrderBy {
  groupApplicationsAggregate?: InputMaybe<IGroupApplicationAggregateOrderBy>;
  id?: InputMaybe<IOrderBy>;
  name?: InputMaybe<IOrderBy>;
  topUrl?: InputMaybe<IOrderBy>;
  validFlag?: InputMaybe<IOrderBy>;
}

/** select columns of table "application" */
export enum IApplicationSelectColumn {
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
export interface IApplicationStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IApplicationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IApplicationStreamCursorValueInput {
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  topUrl?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface IBooleanComparisonExp {
  _eq?: InputMaybe<Scalars["Boolean"]>;
  _gt?: InputMaybe<Scalars["Boolean"]>;
  _gte?: InputMaybe<Scalars["Boolean"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Boolean"]>;
  _lte?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<Scalars["Boolean"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]>>;
}

/** ordering argument of a cursor */
export enum ICursorOrdering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export interface IDateComparisonExp {
  _eq?: InputMaybe<Scalars["date"]>;
  _gt?: InputMaybe<Scalars["date"]>;
  _gte?: InputMaybe<Scalars["date"]>;
  _in?: InputMaybe<Array<Scalars["date"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["date"]>;
  _lte?: InputMaybe<Scalars["date"]>;
  _neq?: InputMaybe<Scalars["date"]>;
  _nin?: InputMaybe<Array<Scalars["date"]>>;
}

/** columns and relationships of "group" */
export interface IGroup {
  /** An array relationship */
  accounts: Array<IHouseholdAccount>;
  /** An aggregate relationship */
  accountsAggregate: IHouseholdAccountAggregate;
  /** An array relationship */
  affiliations: Array<IAffiliation>;
  /** An aggregate relationship */
  affiliationsAggregate: IAffiliationAggregate;
  /** An array relationship */
  categories: Array<IHouseholdCategory>;
  /** An array relationship */
  creditCardDetails: Array<IHouseholdCreditCardDetail>;
  /** An aggregate relationship */
  creditCardDetailsAggregate: IHouseholdCreditCardDetailAggregate;
  /** An array relationship */
  creditCardSummaries: Array<IHouseholdCreditCardSummary>;
  /** An aggregate relationship */
  creditCardSummariesAggregate: IHouseholdCreditCardSummaryAggregate;
  /** An array relationship */
  dailyDetails: Array<IHouseholdDailyDetail>;
  /** An aggregate relationship */
  dailyDetailsAggregate: IHouseholdDailyDetailAggregate;
  /** An array relationship */
  depositCategories: Array<IHouseholdDepositCategory>;
  /** An aggregate relationship */
  depositCategoriesAggregate: IHouseholdDepositCategoryAggregate;
  /** An array relationship */
  genres: Array<IHouseholdGenre>;
  /** An aggregate relationship */
  genresAggregate: IHouseholdGenreAggregate;
  /** An array relationship */
  groupApplications: Array<IGroupApplication>;
  /** An aggregate relationship */
  groupApplicationsAggregate: IGroupApplicationAggregate;
  id: Scalars["String"];
  /** An array relationship */
  importFileHistories: Array<IHouseholdImportFileHistory>;
  /** An aggregate relationship */
  importFileHistoriesAggregate: IHouseholdImportFileHistoryAggregate;
  name: Scalars["String"];
  /** An array relationship */
  summaryCategories: Array<IHouseholdSummaryCategory>;
  /** An aggregate relationship */
  summaryCategoriesAggregate: IHouseholdSummaryCategoryAggregate;
  /** An object relationship */
  transferCategory?: Maybe<IHouseholdTransferCategory>;
}

/** columns and relationships of "group" */
export interface IGroupAccountsArgs {
  distinctOn?: InputMaybe<Array<IHouseholdAccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdAccountOrderBy>>;
  where?: InputMaybe<IHouseholdAccountBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupAccountsAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdAccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdAccountOrderBy>>;
  where?: InputMaybe<IHouseholdAccountBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupAffiliationsArgs {
  distinctOn?: InputMaybe<Array<IAffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IAffiliationOrderBy>>;
  where?: InputMaybe<IAffiliationBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupAffiliationsAggregateArgs {
  distinctOn?: InputMaybe<Array<IAffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IAffiliationOrderBy>>;
  where?: InputMaybe<IAffiliationBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupCategoriesArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdCategoryBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupCreditCardDetailsArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupCreditCardDetailsAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupCreditCardSummariesArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardSummaryOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardSummaryBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupCreditCardSummariesAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardSummaryOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardSummaryBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupDailyDetailsArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupDailyDetailsAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupDepositCategoriesArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDepositCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDepositCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdDepositCategoryBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupDepositCategoriesAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDepositCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDepositCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdDepositCategoryBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupGenresArgs {
  distinctOn?: InputMaybe<Array<IHouseholdGenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdGenreOrderBy>>;
  where?: InputMaybe<IHouseholdGenreBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupGenresAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdGenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdGenreOrderBy>>;
  where?: InputMaybe<IHouseholdGenreBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupGroupApplicationsArgs {
  distinctOn?: InputMaybe<Array<IGroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IGroupApplicationOrderBy>>;
  where?: InputMaybe<IGroupApplicationBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupGroupApplicationsAggregateArgs {
  distinctOn?: InputMaybe<Array<IGroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IGroupApplicationOrderBy>>;
  where?: InputMaybe<IGroupApplicationBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupImportFileHistoriesArgs {
  distinctOn?: InputMaybe<Array<IHouseholdImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdImportFileHistoryOrderBy>>;
  where?: InputMaybe<IHouseholdImportFileHistoryBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupImportFileHistoriesAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdImportFileHistoryOrderBy>>;
  where?: InputMaybe<IHouseholdImportFileHistoryBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupSummaryCategoriesArgs {
  distinctOn?: InputMaybe<Array<IHouseholdSummaryCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdSummaryCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdSummaryCategoryBoolExp>;
}

/** columns and relationships of "group" */
export interface IGroupSummaryCategoriesAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdSummaryCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdSummaryCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdSummaryCategoryBoolExp>;
}

/** aggregated selection of "group" */
export interface IGroupAggregate {
  aggregate?: Maybe<IGroupAggregateFields>;
  nodes: Array<IGroup>;
}

/** aggregate fields of "group" */
export interface IGroupAggregateFields {
  count: Scalars["Int"];
  max?: Maybe<IGroupMaxFields>;
  min?: Maybe<IGroupMinFields>;
}

/** aggregate fields of "group" */
export interface IGroupAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<IGroupSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
}

/** columns and relationships of "group_application" */
export interface IGroupApplication {
  /** An object relationship */
  application: IApplication;
  applicationId: Scalars["String"];
  /** An object relationship */
  group: IGroup;
  groupId: Scalars["String"];
  id: Scalars["String"];
}

/** aggregated selection of "group_application" */
export interface IGroupApplicationAggregate {
  aggregate?: Maybe<IGroupApplicationAggregateFields>;
  nodes: Array<IGroupApplication>;
}

export interface IGroupApplicationAggregateBoolExp {
  count?: InputMaybe<IGroupApplicationAggregateBoolExpCount>;
}

/** aggregate fields of "group_application" */
export interface IGroupApplicationAggregateFields {
  count: Scalars["Int"];
  max?: Maybe<IGroupApplicationMaxFields>;
  min?: Maybe<IGroupApplicationMinFields>;
}

/** aggregate fields of "group_application" */
export interface IGroupApplicationAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<IGroupApplicationSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
}

/** order by aggregate values of table "group_application" */
export interface IGroupApplicationAggregateOrderBy {
  count?: InputMaybe<IOrderBy>;
  max?: InputMaybe<IGroupApplicationMaxOrderBy>;
  min?: InputMaybe<IGroupApplicationMinOrderBy>;
}

/** Boolean expression to filter rows from the table "group_application". All fields are combined with a logical 'AND'. */
export interface IGroupApplicationBoolExp {
  _and?: InputMaybe<Array<IGroupApplicationBoolExp>>;
  _not?: InputMaybe<IGroupApplicationBoolExp>;
  _or?: InputMaybe<Array<IGroupApplicationBoolExp>>;
  application?: InputMaybe<IApplicationBoolExp>;
  applicationId?: InputMaybe<IStringComparisonExp>;
  group?: InputMaybe<IGroupBoolExp>;
  groupId?: InputMaybe<IStringComparisonExp>;
  id?: InputMaybe<IStringComparisonExp>;
}

/** aggregate max on columns */
export interface IGroupApplicationMaxFields {
  applicationId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
}

/** order by max() on columns of table "group_application" */
export interface IGroupApplicationMaxOrderBy {
  applicationId?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
}

/** aggregate min on columns */
export interface IGroupApplicationMinFields {
  applicationId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
}

/** order by min() on columns of table "group_application" */
export interface IGroupApplicationMinOrderBy {
  applicationId?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
}

/** Ordering options when selecting data from "group_application". */
export interface IGroupApplicationOrderBy {
  application?: InputMaybe<IApplicationOrderBy>;
  applicationId?: InputMaybe<IOrderBy>;
  group?: InputMaybe<IGroupOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
}

/** select columns of table "group_application" */
export enum IGroupApplicationSelectColumn {
  /** column name */
  ApplicationId = "applicationId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
}

/** Streaming cursor of the table "group_application" */
export interface IGroupApplicationStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IGroupApplicationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IGroupApplicationStreamCursorValueInput {
  applicationId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
}

/** Boolean expression to filter rows from the table "group". All fields are combined with a logical 'AND'. */
export interface IGroupBoolExp {
  _and?: InputMaybe<Array<IGroupBoolExp>>;
  _not?: InputMaybe<IGroupBoolExp>;
  _or?: InputMaybe<Array<IGroupBoolExp>>;
  accounts?: InputMaybe<IHouseholdAccountBoolExp>;
  accountsAggregate?: InputMaybe<IHouseholdAccountAggregateBoolExp>;
  affiliations?: InputMaybe<IAffiliationBoolExp>;
  affiliationsAggregate?: InputMaybe<IAffiliationAggregateBoolExp>;
  categories?: InputMaybe<IHouseholdCategoryBoolExp>;
  creditCardDetails?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
  creditCardDetailsAggregate?: InputMaybe<IHouseholdCreditCardDetailAggregateBoolExp>;
  creditCardSummaries?: InputMaybe<IHouseholdCreditCardSummaryBoolExp>;
  creditCardSummariesAggregate?: InputMaybe<IHouseholdCreditCardSummaryAggregateBoolExp>;
  dailyDetails?: InputMaybe<IHouseholdDailyDetailBoolExp>;
  dailyDetailsAggregate?: InputMaybe<IHouseholdDailyDetailAggregateBoolExp>;
  depositCategories?: InputMaybe<IHouseholdDepositCategoryBoolExp>;
  depositCategoriesAggregate?: InputMaybe<IHouseholdDepositCategoryAggregateBoolExp>;
  genres?: InputMaybe<IHouseholdGenreBoolExp>;
  genresAggregate?: InputMaybe<IHouseholdGenreAggregateBoolExp>;
  groupApplications?: InputMaybe<IGroupApplicationBoolExp>;
  groupApplicationsAggregate?: InputMaybe<IGroupApplicationAggregateBoolExp>;
  id?: InputMaybe<IStringComparisonExp>;
  importFileHistories?: InputMaybe<IHouseholdImportFileHistoryBoolExp>;
  importFileHistoriesAggregate?: InputMaybe<IHouseholdImportFileHistoryAggregateBoolExp>;
  name?: InputMaybe<IStringComparisonExp>;
  summaryCategories?: InputMaybe<IHouseholdSummaryCategoryBoolExp>;
  summaryCategoriesAggregate?: InputMaybe<IHouseholdSummaryCategoryAggregateBoolExp>;
  transferCategory?: InputMaybe<IHouseholdTransferCategoryBoolExp>;
}

/** aggregate max on columns */
export interface IGroupMaxFields {
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
}

/** aggregate min on columns */
export interface IGroupMinFields {
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
}

/** Ordering options when selecting data from "group". */
export interface IGroupOrderBy {
  accountsAggregate?: InputMaybe<IHouseholdAccountAggregateOrderBy>;
  affiliationsAggregate?: InputMaybe<IAffiliationAggregateOrderBy>;
  categoriesAggregate?: InputMaybe<IHouseholdCategoryAggregateOrderBy>;
  creditCardDetailsAggregate?: InputMaybe<IHouseholdCreditCardDetailAggregateOrderBy>;
  creditCardSummariesAggregate?: InputMaybe<IHouseholdCreditCardSummaryAggregateOrderBy>;
  dailyDetailsAggregate?: InputMaybe<IHouseholdDailyDetailAggregateOrderBy>;
  depositCategoriesAggregate?: InputMaybe<IHouseholdDepositCategoryAggregateOrderBy>;
  genresAggregate?: InputMaybe<IHouseholdGenreAggregateOrderBy>;
  groupApplicationsAggregate?: InputMaybe<IGroupApplicationAggregateOrderBy>;
  id?: InputMaybe<IOrderBy>;
  importFileHistoriesAggregate?: InputMaybe<IHouseholdImportFileHistoryAggregateOrderBy>;
  name?: InputMaybe<IOrderBy>;
  summaryCategoriesAggregate?: InputMaybe<IHouseholdSummaryCategoryAggregateOrderBy>;
  transferCategory?: InputMaybe<IHouseholdTransferCategoryOrderBy>;
}

/** select columns of table "group" */
export enum IGroupSelectColumn {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** Streaming cursor of the table "group" */
export interface IGroupStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IGroupStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IGroupStreamCursorValueInput {
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
}

/** columns and relationships of "household.account" */
export interface IHouseholdAccount {
  /** An array relationship */
  allDetailViews: Array<IHouseholdAllDetailView>;
  /** An aggregate relationship */
  allDetailViewsAggregate: IHouseholdAllDetailViewAggregate;
  /** An array relationship */
  creditCardSummaries: Array<IHouseholdCreditCardSummary>;
  /** An aggregate relationship */
  creditCardSummariesAggregate: IHouseholdCreditCardSummaryAggregate;
  /** An array relationship */
  dailyDetails: Array<IHouseholdDailyDetail>;
  /** An aggregate relationship */
  dailyDetailsAggregate: IHouseholdDailyDetailAggregate;
  displayOrder: Scalars["Int"];
  /** An object relationship */
  group: IGroup;
  groupId: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
  validFlag?: Maybe<Scalars["Boolean"]>;
}

/** columns and relationships of "household.account" */
export interface IHouseholdAccountAllDetailViewsArgs {
  distinctOn?: InputMaybe<Array<IHouseholdAllDetailViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdAllDetailViewOrderBy>>;
  where?: InputMaybe<IHouseholdAllDetailViewBoolExp>;
}

/** columns and relationships of "household.account" */
export interface IHouseholdAccountAllDetailViewsAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdAllDetailViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdAllDetailViewOrderBy>>;
  where?: InputMaybe<IHouseholdAllDetailViewBoolExp>;
}

/** columns and relationships of "household.account" */
export interface IHouseholdAccountCreditCardSummariesArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardSummaryOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardSummaryBoolExp>;
}

/** columns and relationships of "household.account" */
export interface IHouseholdAccountCreditCardSummariesAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardSummaryOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardSummaryBoolExp>;
}

/** columns and relationships of "household.account" */
export interface IHouseholdAccountDailyDetailsArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

/** columns and relationships of "household.account" */
export interface IHouseholdAccountDailyDetailsAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

/** aggregated selection of "household.account" */
export interface IHouseholdAccountAggregate {
  aggregate?: Maybe<IHouseholdAccountAggregateFields>;
  nodes: Array<IHouseholdAccount>;
}

export interface IHouseholdAccountAggregateBoolExp {
  bool_and?: InputMaybe<IHouseholdAccountAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<IHouseholdAccountAggregateBoolExpBool_Or>;
  count?: InputMaybe<IHouseholdAccountAggregateBoolExpCount>;
}

/** aggregate fields of "household.account" */
export interface IHouseholdAccountAggregateFields {
  avg?: Maybe<IHouseholdAccountAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<IHouseholdAccountMaxFields>;
  min?: Maybe<IHouseholdAccountMinFields>;
  stddev?: Maybe<IHouseholdAccountStddevFields>;
  stddevPop?: Maybe<IHouseholdAccountStddevPopFields>;
  stddevSamp?: Maybe<IHouseholdAccountStddevSampFields>;
  sum?: Maybe<IHouseholdAccountSumFields>;
  varPop?: Maybe<IHouseholdAccountVarPopFields>;
  varSamp?: Maybe<IHouseholdAccountVarSampFields>;
  variance?: Maybe<IHouseholdAccountVarianceFields>;
}

/** aggregate fields of "household.account" */
export interface IHouseholdAccountAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<IHouseholdAccountSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
}

/** order by aggregate values of table "household.account" */
export interface IHouseholdAccountAggregateOrderBy {
  avg?: InputMaybe<IHouseholdAccountAvgOrderBy>;
  count?: InputMaybe<IOrderBy>;
  max?: InputMaybe<IHouseholdAccountMaxOrderBy>;
  min?: InputMaybe<IHouseholdAccountMinOrderBy>;
  stddev?: InputMaybe<IHouseholdAccountStddevOrderBy>;
  stddevPop?: InputMaybe<IHouseholdAccountStddevPopOrderBy>;
  stddevSamp?: InputMaybe<IHouseholdAccountStddevSampOrderBy>;
  sum?: InputMaybe<IHouseholdAccountSumOrderBy>;
  varPop?: InputMaybe<IHouseholdAccountVarPopOrderBy>;
  varSamp?: InputMaybe<IHouseholdAccountVarSampOrderBy>;
  variance?: InputMaybe<IHouseholdAccountVarianceOrderBy>;
}

/** aggregate avg on columns */
export interface IHouseholdAccountAvgFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by avg() on columns of table "household.account" */
export interface IHouseholdAccountAvgOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** Boolean expression to filter rows from the table "household.account". All fields are combined with a logical 'AND'. */
export interface IHouseholdAccountBoolExp {
  _and?: InputMaybe<Array<IHouseholdAccountBoolExp>>;
  _not?: InputMaybe<IHouseholdAccountBoolExp>;
  _or?: InputMaybe<Array<IHouseholdAccountBoolExp>>;
  allDetailViews?: InputMaybe<IHouseholdAllDetailViewBoolExp>;
  allDetailViewsAggregate?: InputMaybe<IHouseholdAllDetailViewAggregateBoolExp>;
  creditCardSummaries?: InputMaybe<IHouseholdCreditCardSummaryBoolExp>;
  creditCardSummariesAggregate?: InputMaybe<IHouseholdCreditCardSummaryAggregateBoolExp>;
  dailyDetails?: InputMaybe<IHouseholdDailyDetailBoolExp>;
  dailyDetailsAggregate?: InputMaybe<IHouseholdDailyDetailAggregateBoolExp>;
  displayOrder?: InputMaybe<IIntComparisonExp>;
  group?: InputMaybe<IGroupBoolExp>;
  groupId?: InputMaybe<IStringComparisonExp>;
  id?: InputMaybe<IStringComparisonExp>;
  name?: InputMaybe<IStringComparisonExp>;
  validFlag?: InputMaybe<IBooleanComparisonExp>;
}

/** unique or primary key constraints on table "household.account" */
export enum IHouseholdAccountConstraint {
  /** unique or primary key constraint on columns "id" */
  AccountPkey = "account_pkey",
}

/** input type for inserting data into table "household.account" */
export interface IHouseholdAccountInsertInput {
  creditCardSummaries?: InputMaybe<IHouseholdCreditCardSummaryArrRelInsertInput>;
  dailyDetails?: InputMaybe<IHouseholdDailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
}

/** aggregate max on columns */
export interface IHouseholdAccountMaxFields {
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
}

/** order by max() on columns of table "household.account" */
export interface IHouseholdAccountMaxOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  name?: InputMaybe<IOrderBy>;
}

/** aggregate min on columns */
export interface IHouseholdAccountMinFields {
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
}

/** order by min() on columns of table "household.account" */
export interface IHouseholdAccountMinOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  name?: InputMaybe<IOrderBy>;
}

/** response of any mutation on the table "household.account" */
export interface IHouseholdAccountMutationResponse {
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<IHouseholdAccount>;
}

/** input type for inserting object relation for remote table "household.account" */
export interface IHouseholdAccountObjRelInsertInput {
  data: IHouseholdAccountInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<IHouseholdAccountOnConflict>;
}

/** on_conflict condition type for table "household.account" */
export interface IHouseholdAccountOnConflict {
  constraint: IHouseholdAccountConstraint;
  updateColumns?: Array<IHouseholdAccountUpdateColumn>;
  where?: InputMaybe<IHouseholdAccountBoolExp>;
}

/** Ordering options when selecting data from "household.account". */
export interface IHouseholdAccountOrderBy {
  allDetailViewsAggregate?: InputMaybe<IHouseholdAllDetailViewAggregateOrderBy>;
  creditCardSummariesAggregate?: InputMaybe<IHouseholdCreditCardSummaryAggregateOrderBy>;
  dailyDetailsAggregate?: InputMaybe<IHouseholdDailyDetailAggregateOrderBy>;
  displayOrder?: InputMaybe<IOrderBy>;
  group?: InputMaybe<IGroupOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  name?: InputMaybe<IOrderBy>;
  validFlag?: InputMaybe<IOrderBy>;
}

/** select columns of table "household.account" */
export enum IHouseholdAccountSelectColumn {
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
export enum IHouseholdAccountSelectColumnHouseholdAccountAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  ValidFlag = "validFlag",
}

/** select "householdAccountAggregateBoolExpBool_orArgumentsColumns" columns of table "household.account" */
export enum IHouseholdAccountSelectColumnHouseholdAccountAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  ValidFlag = "validFlag",
}

/** aggregate stddev on columns */
export interface IHouseholdAccountStddevFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by stddev() on columns of table "household.account" */
export interface IHouseholdAccountStddevOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** aggregate stddevPop on columns */
export interface IHouseholdAccountStddevPopFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by stddevPop() on columns of table "household.account" */
export interface IHouseholdAccountStddevPopOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** aggregate stddevSamp on columns */
export interface IHouseholdAccountStddevSampFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by stddevSamp() on columns of table "household.account" */
export interface IHouseholdAccountStddevSampOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** Streaming cursor of the table "household_account" */
export interface IHouseholdAccountStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IHouseholdAccountStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IHouseholdAccountStreamCursorValueInput {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
}

/** aggregate sum on columns */
export interface IHouseholdAccountSumFields {
  displayOrder?: Maybe<Scalars["Int"]>;
}

/** order by sum() on columns of table "household.account" */
export interface IHouseholdAccountSumOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** placeholder for update columns of table "household.account" (current role has no relevant permissions) */
export enum IHouseholdAccountUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** aggregate varPop on columns */
export interface IHouseholdAccountVarPopFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by varPop() on columns of table "household.account" */
export interface IHouseholdAccountVarPopOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** aggregate varSamp on columns */
export interface IHouseholdAccountVarSampFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by varSamp() on columns of table "household.account" */
export interface IHouseholdAccountVarSampOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** aggregate variance on columns */
export interface IHouseholdAccountVarianceFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by variance() on columns of table "household.account" */
export interface IHouseholdAccountVarianceOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** columns and relationships of "household.all_detail_view" */
export interface IHouseholdAllDetailView {
  accountId?: Maybe<Scalars["String"]>;
  categoryId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  memo?: Maybe<Scalars["String"]>;
  originalAmount?: Maybe<Scalars["numeric"]>;
  signedAmount?: Maybe<Scalars["numeric"]>;
  type?: Maybe<Scalars["String"]>;
}

/** aggregated selection of "household.all_detail_view" */
export interface IHouseholdAllDetailViewAggregate {
  aggregate?: Maybe<IHouseholdAllDetailViewAggregateFields>;
  nodes: Array<IHouseholdAllDetailView>;
}

export interface IHouseholdAllDetailViewAggregateBoolExp {
  count?: InputMaybe<IHouseholdAllDetailViewAggregateBoolExpCount>;
}

/** aggregate fields of "household.all_detail_view" */
export interface IHouseholdAllDetailViewAggregateFields {
  avg?: Maybe<IHouseholdAllDetailViewAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<IHouseholdAllDetailViewMaxFields>;
  min?: Maybe<IHouseholdAllDetailViewMinFields>;
  stddev?: Maybe<IHouseholdAllDetailViewStddevFields>;
  stddevPop?: Maybe<IHouseholdAllDetailViewStddevPopFields>;
  stddevSamp?: Maybe<IHouseholdAllDetailViewStddevSampFields>;
  sum?: Maybe<IHouseholdAllDetailViewSumFields>;
  varPop?: Maybe<IHouseholdAllDetailViewVarPopFields>;
  varSamp?: Maybe<IHouseholdAllDetailViewVarSampFields>;
  variance?: Maybe<IHouseholdAllDetailViewVarianceFields>;
}

/** aggregate fields of "household.all_detail_view" */
export interface IHouseholdAllDetailViewAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<IHouseholdAllDetailViewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
}

/** order by aggregate values of table "household.all_detail_view" */
export interface IHouseholdAllDetailViewAggregateOrderBy {
  avg?: InputMaybe<IHouseholdAllDetailViewAvgOrderBy>;
  count?: InputMaybe<IOrderBy>;
  max?: InputMaybe<IHouseholdAllDetailViewMaxOrderBy>;
  min?: InputMaybe<IHouseholdAllDetailViewMinOrderBy>;
  stddev?: InputMaybe<IHouseholdAllDetailViewStddevOrderBy>;
  stddevPop?: InputMaybe<IHouseholdAllDetailViewStddevPopOrderBy>;
  stddevSamp?: InputMaybe<IHouseholdAllDetailViewStddevSampOrderBy>;
  sum?: InputMaybe<IHouseholdAllDetailViewSumOrderBy>;
  varPop?: InputMaybe<IHouseholdAllDetailViewVarPopOrderBy>;
  varSamp?: InputMaybe<IHouseholdAllDetailViewVarSampOrderBy>;
  variance?: InputMaybe<IHouseholdAllDetailViewVarianceOrderBy>;
}

/** aggregate avg on columns */
export interface IHouseholdAllDetailViewAvgFields {
  originalAmount?: Maybe<Scalars["Float"]>;
  signedAmount?: Maybe<Scalars["Float"]>;
}

/** order by avg() on columns of table "household.all_detail_view" */
export interface IHouseholdAllDetailViewAvgOrderBy {
  originalAmount?: InputMaybe<IOrderBy>;
  signedAmount?: InputMaybe<IOrderBy>;
}

/** Boolean expression to filter rows from the table "household.all_detail_view". All fields are combined with a logical 'AND'. */
export interface IHouseholdAllDetailViewBoolExp {
  _and?: InputMaybe<Array<IHouseholdAllDetailViewBoolExp>>;
  _not?: InputMaybe<IHouseholdAllDetailViewBoolExp>;
  _or?: InputMaybe<Array<IHouseholdAllDetailViewBoolExp>>;
  accountId?: InputMaybe<IStringComparisonExp>;
  categoryId?: InputMaybe<IStringComparisonExp>;
  date?: InputMaybe<IDateComparisonExp>;
  genreId?: InputMaybe<IStringComparisonExp>;
  groupId?: InputMaybe<IStringComparisonExp>;
  id?: InputMaybe<IStringComparisonExp>;
  iocomeType?: InputMaybe<IStringComparisonExp>;
  memo?: InputMaybe<IStringComparisonExp>;
  originalAmount?: InputMaybe<INumericComparisonExp>;
  signedAmount?: InputMaybe<INumericComparisonExp>;
  type?: InputMaybe<IStringComparisonExp>;
}

/** aggregate max on columns */
export interface IHouseholdAllDetailViewMaxFields {
  accountId?: Maybe<Scalars["String"]>;
  categoryId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  memo?: Maybe<Scalars["String"]>;
  originalAmount?: Maybe<Scalars["numeric"]>;
  signedAmount?: Maybe<Scalars["numeric"]>;
  type?: Maybe<Scalars["String"]>;
}

/** order by max() on columns of table "household.all_detail_view" */
export interface IHouseholdAllDetailViewMaxOrderBy {
  accountId?: InputMaybe<IOrderBy>;
  categoryId?: InputMaybe<IOrderBy>;
  date?: InputMaybe<IOrderBy>;
  genreId?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  iocomeType?: InputMaybe<IOrderBy>;
  memo?: InputMaybe<IOrderBy>;
  originalAmount?: InputMaybe<IOrderBy>;
  signedAmount?: InputMaybe<IOrderBy>;
  type?: InputMaybe<IOrderBy>;
}

/** aggregate min on columns */
export interface IHouseholdAllDetailViewMinFields {
  accountId?: Maybe<Scalars["String"]>;
  categoryId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  memo?: Maybe<Scalars["String"]>;
  originalAmount?: Maybe<Scalars["numeric"]>;
  signedAmount?: Maybe<Scalars["numeric"]>;
  type?: Maybe<Scalars["String"]>;
}

/** order by min() on columns of table "household.all_detail_view" */
export interface IHouseholdAllDetailViewMinOrderBy {
  accountId?: InputMaybe<IOrderBy>;
  categoryId?: InputMaybe<IOrderBy>;
  date?: InputMaybe<IOrderBy>;
  genreId?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  iocomeType?: InputMaybe<IOrderBy>;
  memo?: InputMaybe<IOrderBy>;
  originalAmount?: InputMaybe<IOrderBy>;
  signedAmount?: InputMaybe<IOrderBy>;
  type?: InputMaybe<IOrderBy>;
}

/** Ordering options when selecting data from "household.all_detail_view". */
export interface IHouseholdAllDetailViewOrderBy {
  accountId?: InputMaybe<IOrderBy>;
  categoryId?: InputMaybe<IOrderBy>;
  date?: InputMaybe<IOrderBy>;
  genreId?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  iocomeType?: InputMaybe<IOrderBy>;
  memo?: InputMaybe<IOrderBy>;
  originalAmount?: InputMaybe<IOrderBy>;
  signedAmount?: InputMaybe<IOrderBy>;
  type?: InputMaybe<IOrderBy>;
}

/** select columns of table "household.all_detail_view" */
export enum IHouseholdAllDetailViewSelectColumn {
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
  SignedAmount = "signedAmount",
  /** column name */
  Type = "type",
}

/** aggregate stddev on columns */
export interface IHouseholdAllDetailViewStddevFields {
  originalAmount?: Maybe<Scalars["Float"]>;
  signedAmount?: Maybe<Scalars["Float"]>;
}

/** order by stddev() on columns of table "household.all_detail_view" */
export interface IHouseholdAllDetailViewStddevOrderBy {
  originalAmount?: InputMaybe<IOrderBy>;
  signedAmount?: InputMaybe<IOrderBy>;
}

/** aggregate stddevPop on columns */
export interface IHouseholdAllDetailViewStddevPopFields {
  originalAmount?: Maybe<Scalars["Float"]>;
  signedAmount?: Maybe<Scalars["Float"]>;
}

/** order by stddevPop() on columns of table "household.all_detail_view" */
export interface IHouseholdAllDetailViewStddevPopOrderBy {
  originalAmount?: InputMaybe<IOrderBy>;
  signedAmount?: InputMaybe<IOrderBy>;
}

/** aggregate stddevSamp on columns */
export interface IHouseholdAllDetailViewStddevSampFields {
  originalAmount?: Maybe<Scalars["Float"]>;
  signedAmount?: Maybe<Scalars["Float"]>;
}

/** order by stddevSamp() on columns of table "household.all_detail_view" */
export interface IHouseholdAllDetailViewStddevSampOrderBy {
  originalAmount?: InputMaybe<IOrderBy>;
  signedAmount?: InputMaybe<IOrderBy>;
}

/** Streaming cursor of the table "household_all_detail_view" */
export interface IHouseholdAllDetailViewStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IHouseholdAllDetailViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IHouseholdAllDetailViewStreamCursorValueInput {
  accountId?: InputMaybe<Scalars["String"]>;
  categoryId?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  memo?: InputMaybe<Scalars["String"]>;
  originalAmount?: InputMaybe<Scalars["numeric"]>;
  signedAmount?: InputMaybe<Scalars["numeric"]>;
  type?: InputMaybe<Scalars["String"]>;
}

/** aggregate sum on columns */
export interface IHouseholdAllDetailViewSumFields {
  originalAmount?: Maybe<Scalars["numeric"]>;
  signedAmount?: Maybe<Scalars["numeric"]>;
}

/** order by sum() on columns of table "household.all_detail_view" */
export interface IHouseholdAllDetailViewSumOrderBy {
  originalAmount?: InputMaybe<IOrderBy>;
  signedAmount?: InputMaybe<IOrderBy>;
}

/** aggregate varPop on columns */
export interface IHouseholdAllDetailViewVarPopFields {
  originalAmount?: Maybe<Scalars["Float"]>;
  signedAmount?: Maybe<Scalars["Float"]>;
}

/** order by varPop() on columns of table "household.all_detail_view" */
export interface IHouseholdAllDetailViewVarPopOrderBy {
  originalAmount?: InputMaybe<IOrderBy>;
  signedAmount?: InputMaybe<IOrderBy>;
}

/** aggregate varSamp on columns */
export interface IHouseholdAllDetailViewVarSampFields {
  originalAmount?: Maybe<Scalars["Float"]>;
  signedAmount?: Maybe<Scalars["Float"]>;
}

/** order by varSamp() on columns of table "household.all_detail_view" */
export interface IHouseholdAllDetailViewVarSampOrderBy {
  originalAmount?: InputMaybe<IOrderBy>;
  signedAmount?: InputMaybe<IOrderBy>;
}

/** aggregate variance on columns */
export interface IHouseholdAllDetailViewVarianceFields {
  originalAmount?: Maybe<Scalars["Float"]>;
  signedAmount?: Maybe<Scalars["Float"]>;
}

/** order by variance() on columns of table "household.all_detail_view" */
export interface IHouseholdAllDetailViewVarianceOrderBy {
  originalAmount?: InputMaybe<IOrderBy>;
  signedAmount?: InputMaybe<IOrderBy>;
}

/** columns and relationships of "household.category" */
export interface IHouseholdCategory {
  /** An array relationship */
  creditCardDetails: Array<IHouseholdCreditCardDetail>;
  /** An aggregate relationship */
  creditCardDetailsAggregate: IHouseholdCreditCardDetailAggregate;
  /** An array relationship */
  dailyDetails: Array<IHouseholdDailyDetail>;
  /** An aggregate relationship */
  dailyDetailsAggregate: IHouseholdDailyDetailAggregate;
  /** An object relationship */
  depositCategory?: Maybe<IHouseholdDepositCategory>;
  displayOrder: Scalars["Int"];
  /** An object relationship */
  genre: IHouseholdGenre;
  genreId: Scalars["String"];
  /** An object relationship */
  group: IGroup;
  groupId: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
  /** An array relationship */
  summaryCategories: Array<IHouseholdSummaryCategory>;
  /** An aggregate relationship */
  summaryCategoriesAggregate: IHouseholdSummaryCategoryAggregate;
  /** An array relationship */
  transferCategories: Array<IHouseholdTransferCategory>;
  /** An aggregate relationship */
  transferCategoriesAggregate: IHouseholdTransferCategoryAggregate;
  validFlag?: Maybe<Scalars["Boolean"]>;
}

/** columns and relationships of "household.category" */
export interface IHouseholdCategoryCreditCardDetailsArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
}

/** columns and relationships of "household.category" */
export interface IHouseholdCategoryCreditCardDetailsAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
}

/** columns and relationships of "household.category" */
export interface IHouseholdCategoryDailyDetailsArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

/** columns and relationships of "household.category" */
export interface IHouseholdCategoryDailyDetailsAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

/** columns and relationships of "household.category" */
export interface IHouseholdCategorySummaryCategoriesArgs {
  distinctOn?: InputMaybe<Array<IHouseholdSummaryCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdSummaryCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdSummaryCategoryBoolExp>;
}

/** columns and relationships of "household.category" */
export interface IHouseholdCategorySummaryCategoriesAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdSummaryCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdSummaryCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdSummaryCategoryBoolExp>;
}

/** columns and relationships of "household.category" */
export interface IHouseholdCategoryTransferCategoriesArgs {
  distinctOn?: InputMaybe<Array<IHouseholdTransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTransferCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdTransferCategoryBoolExp>;
}

/** columns and relationships of "household.category" */
export interface IHouseholdCategoryTransferCategoriesAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdTransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTransferCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdTransferCategoryBoolExp>;
}

/** order by aggregate values of table "household.category" */
export interface IHouseholdCategoryAggregateOrderBy {
  avg?: InputMaybe<IHouseholdCategoryAvgOrderBy>;
  count?: InputMaybe<IOrderBy>;
  max?: InputMaybe<IHouseholdCategoryMaxOrderBy>;
  min?: InputMaybe<IHouseholdCategoryMinOrderBy>;
  stddev?: InputMaybe<IHouseholdCategoryStddevOrderBy>;
  stddevPop?: InputMaybe<IHouseholdCategoryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<IHouseholdCategoryStddevSampOrderBy>;
  sum?: InputMaybe<IHouseholdCategorySumOrderBy>;
  varPop?: InputMaybe<IHouseholdCategoryVarPopOrderBy>;
  varSamp?: InputMaybe<IHouseholdCategoryVarSampOrderBy>;
  variance?: InputMaybe<IHouseholdCategoryVarianceOrderBy>;
}

/** input type for inserting array relation for remote table "household.category" */
export interface IHouseholdCategoryArrRelInsertInput {
  data: Array<IHouseholdCategoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<IHouseholdCategoryOnConflict>;
}

/** order by avg() on columns of table "household.category" */
export interface IHouseholdCategoryAvgOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** Boolean expression to filter rows from the table "household.category". All fields are combined with a logical 'AND'. */
export interface IHouseholdCategoryBoolExp {
  _and?: InputMaybe<Array<IHouseholdCategoryBoolExp>>;
  _not?: InputMaybe<IHouseholdCategoryBoolExp>;
  _or?: InputMaybe<Array<IHouseholdCategoryBoolExp>>;
  creditCardDetails?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
  creditCardDetailsAggregate?: InputMaybe<IHouseholdCreditCardDetailAggregateBoolExp>;
  dailyDetails?: InputMaybe<IHouseholdDailyDetailBoolExp>;
  dailyDetailsAggregate?: InputMaybe<IHouseholdDailyDetailAggregateBoolExp>;
  depositCategory?: InputMaybe<IHouseholdDepositCategoryBoolExp>;
  displayOrder?: InputMaybe<IIntComparisonExp>;
  genre?: InputMaybe<IHouseholdGenreBoolExp>;
  genreId?: InputMaybe<IStringComparisonExp>;
  group?: InputMaybe<IGroupBoolExp>;
  groupId?: InputMaybe<IStringComparisonExp>;
  id?: InputMaybe<IStringComparisonExp>;
  name?: InputMaybe<IStringComparisonExp>;
  summaryCategories?: InputMaybe<IHouseholdSummaryCategoryBoolExp>;
  summaryCategoriesAggregate?: InputMaybe<IHouseholdSummaryCategoryAggregateBoolExp>;
  transferCategories?: InputMaybe<IHouseholdTransferCategoryBoolExp>;
  transferCategoriesAggregate?: InputMaybe<IHouseholdTransferCategoryAggregateBoolExp>;
  validFlag?: InputMaybe<IBooleanComparisonExp>;
}

/** unique or primary key constraints on table "household.category" */
export enum IHouseholdCategoryConstraint {
  /** unique or primary key constraint on columns "id" */
  CategoryPkey = "category_pkey",
}

/** input type for incrementing numeric columns in table "household.category" */
export interface IHouseholdCategoryIncInput {
  displayOrder?: InputMaybe<Scalars["Int"]>;
}

/** input type for inserting data into table "household.category" */
export interface IHouseholdCategoryInsertInput {
  creditCardDetails?: InputMaybe<IHouseholdCreditCardDetailArrRelInsertInput>;
  dailyDetails?: InputMaybe<IHouseholdDailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genre?: InputMaybe<IHouseholdGenreObjRelInsertInput>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  summaryCategories?: InputMaybe<IHouseholdSummaryCategoryArrRelInsertInput>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
}

/** order by max() on columns of table "household.category" */
export interface IHouseholdCategoryMaxOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
  genreId?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  name?: InputMaybe<IOrderBy>;
}

/** order by min() on columns of table "household.category" */
export interface IHouseholdCategoryMinOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
  genreId?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  name?: InputMaybe<IOrderBy>;
}

/** response of any mutation on the table "household.category" */
export interface IHouseholdCategoryMutationResponse {
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<IHouseholdCategory>;
}

/** input type for inserting object relation for remote table "household.category" */
export interface IHouseholdCategoryObjRelInsertInput {
  data: IHouseholdCategoryInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<IHouseholdCategoryOnConflict>;
}

/** on_conflict condition type for table "household.category" */
export interface IHouseholdCategoryOnConflict {
  constraint: IHouseholdCategoryConstraint;
  updateColumns?: Array<IHouseholdCategoryUpdateColumn>;
  where?: InputMaybe<IHouseholdCategoryBoolExp>;
}

/** Ordering options when selecting data from "household.category". */
export interface IHouseholdCategoryOrderBy {
  creditCardDetailsAggregate?: InputMaybe<IHouseholdCreditCardDetailAggregateOrderBy>;
  dailyDetailsAggregate?: InputMaybe<IHouseholdDailyDetailAggregateOrderBy>;
  depositCategory?: InputMaybe<IHouseholdDepositCategoryOrderBy>;
  displayOrder?: InputMaybe<IOrderBy>;
  genre?: InputMaybe<IHouseholdGenreOrderBy>;
  genreId?: InputMaybe<IOrderBy>;
  group?: InputMaybe<IGroupOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  name?: InputMaybe<IOrderBy>;
  summaryCategoriesAggregate?: InputMaybe<IHouseholdSummaryCategoryAggregateOrderBy>;
  transferCategoriesAggregate?: InputMaybe<IHouseholdTransferCategoryAggregateOrderBy>;
  validFlag?: InputMaybe<IOrderBy>;
}

/** primary key columns input for table: household.category */
export interface IHouseholdCategoryPkColumnsInput {
  id: Scalars["String"];
}

/** select columns of table "household.category" */
export enum IHouseholdCategorySelectColumn {
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
export interface IHouseholdCategorySetInput {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
}

/** order by stddev() on columns of table "household.category" */
export interface IHouseholdCategoryStddevOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** order by stddevPop() on columns of table "household.category" */
export interface IHouseholdCategoryStddevPopOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** order by stddevSamp() on columns of table "household.category" */
export interface IHouseholdCategoryStddevSampOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** Streaming cursor of the table "household_category" */
export interface IHouseholdCategoryStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IHouseholdCategoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IHouseholdCategoryStreamCursorValueInput {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
}

/** order by sum() on columns of table "household.category" */
export interface IHouseholdCategorySumOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** update columns of table "household.category" */
export enum IHouseholdCategoryUpdateColumn {
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

export interface IHouseholdCategoryUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<IHouseholdCategoryIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<IHouseholdCategorySetInput>;
  /** filter the rows which have to be updated */
  where: IHouseholdCategoryBoolExp;
}

/** order by varPop() on columns of table "household.category" */
export interface IHouseholdCategoryVarPopOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** order by varSamp() on columns of table "household.category" */
export interface IHouseholdCategoryVarSampOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** order by variance() on columns of table "household.category" */
export interface IHouseholdCategoryVarianceOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** columns and relationships of "household.credit_card_detail" */
export interface IHouseholdCreditCardDetail {
  amount: Scalars["numeric"];
  /** An object relationship */
  category: IHouseholdCategory;
  categoryId: Scalars["String"];
  /** An object relationship */
  creditCardSummary: IHouseholdCreditCardSummary;
  date: Scalars["date"];
  /** An object relationship */
  genre: IHouseholdGenre;
  genreId: Scalars["String"];
  /** An object relationship */
  group: IGroup;
  groupId: Scalars["String"];
  id: Scalars["String"];
  iocomeType: Scalars["String"];
  memo?: Maybe<Scalars["String"]>;
  summaryId: Scalars["String"];
  /** An object relationship */
  user: IUser;
  userId: Scalars["String"];
}

/** aggregated selection of "household.credit_card_detail" */
export interface IHouseholdCreditCardDetailAggregate {
  aggregate?: Maybe<IHouseholdCreditCardDetailAggregateFields>;
  nodes: Array<IHouseholdCreditCardDetail>;
}

export interface IHouseholdCreditCardDetailAggregateBoolExp {
  count?: InputMaybe<IHouseholdCreditCardDetailAggregateBoolExpCount>;
}

/** aggregate fields of "household.credit_card_detail" */
export interface IHouseholdCreditCardDetailAggregateFields {
  avg?: Maybe<IHouseholdCreditCardDetailAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<IHouseholdCreditCardDetailMaxFields>;
  min?: Maybe<IHouseholdCreditCardDetailMinFields>;
  stddev?: Maybe<IHouseholdCreditCardDetailStddevFields>;
  stddevPop?: Maybe<IHouseholdCreditCardDetailStddevPopFields>;
  stddevSamp?: Maybe<IHouseholdCreditCardDetailStddevSampFields>;
  sum?: Maybe<IHouseholdCreditCardDetailSumFields>;
  varPop?: Maybe<IHouseholdCreditCardDetailVarPopFields>;
  varSamp?: Maybe<IHouseholdCreditCardDetailVarSampFields>;
  variance?: Maybe<IHouseholdCreditCardDetailVarianceFields>;
}

/** aggregate fields of "household.credit_card_detail" */
export interface IHouseholdCreditCardDetailAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<IHouseholdCreditCardDetailSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
}

/** order by aggregate values of table "household.credit_card_detail" */
export interface IHouseholdCreditCardDetailAggregateOrderBy {
  avg?: InputMaybe<IHouseholdCreditCardDetailAvgOrderBy>;
  count?: InputMaybe<IOrderBy>;
  max?: InputMaybe<IHouseholdCreditCardDetailMaxOrderBy>;
  min?: InputMaybe<IHouseholdCreditCardDetailMinOrderBy>;
  stddev?: InputMaybe<IHouseholdCreditCardDetailStddevOrderBy>;
  stddevPop?: InputMaybe<IHouseholdCreditCardDetailStddevPopOrderBy>;
  stddevSamp?: InputMaybe<IHouseholdCreditCardDetailStddevSampOrderBy>;
  sum?: InputMaybe<IHouseholdCreditCardDetailSumOrderBy>;
  varPop?: InputMaybe<IHouseholdCreditCardDetailVarPopOrderBy>;
  varSamp?: InputMaybe<IHouseholdCreditCardDetailVarSampOrderBy>;
  variance?: InputMaybe<IHouseholdCreditCardDetailVarianceOrderBy>;
}

/** input type for inserting array relation for remote table "household.credit_card_detail" */
export interface IHouseholdCreditCardDetailArrRelInsertInput {
  data: Array<IHouseholdCreditCardDetailInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<IHouseholdCreditCardDetailOnConflict>;
}

/** aggregate avg on columns */
export interface IHouseholdCreditCardDetailAvgFields {
  amount?: Maybe<Scalars["Float"]>;
}

/** order by avg() on columns of table "household.credit_card_detail" */
export interface IHouseholdCreditCardDetailAvgOrderBy {
  amount?: InputMaybe<IOrderBy>;
}

/** Boolean expression to filter rows from the table "household.credit_card_detail". All fields are combined with a logical 'AND'. */
export interface IHouseholdCreditCardDetailBoolExp {
  _and?: InputMaybe<Array<IHouseholdCreditCardDetailBoolExp>>;
  _not?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
  _or?: InputMaybe<Array<IHouseholdCreditCardDetailBoolExp>>;
  amount?: InputMaybe<INumericComparisonExp>;
  category?: InputMaybe<IHouseholdCategoryBoolExp>;
  categoryId?: InputMaybe<IStringComparisonExp>;
  creditCardSummary?: InputMaybe<IHouseholdCreditCardSummaryBoolExp>;
  date?: InputMaybe<IDateComparisonExp>;
  genre?: InputMaybe<IHouseholdGenreBoolExp>;
  genreId?: InputMaybe<IStringComparisonExp>;
  group?: InputMaybe<IGroupBoolExp>;
  groupId?: InputMaybe<IStringComparisonExp>;
  id?: InputMaybe<IStringComparisonExp>;
  iocomeType?: InputMaybe<IStringComparisonExp>;
  memo?: InputMaybe<IStringComparisonExp>;
  summaryId?: InputMaybe<IStringComparisonExp>;
  user?: InputMaybe<IUserBoolExp>;
  userId?: InputMaybe<IStringComparisonExp>;
}

/** unique or primary key constraints on table "household.credit_card_detail" */
export enum IHouseholdCreditCardDetailConstraint {
  /** unique or primary key constraint on columns "id" */
  CreditCardDetailPkey = "credit_card_detail_pkey",
}

/** input type for incrementing numeric columns in table "household.credit_card_detail" */
export interface IHouseholdCreditCardDetailIncInput {
  amount?: InputMaybe<Scalars["numeric"]>;
}

/** input type for inserting data into table "household.credit_card_detail" */
export interface IHouseholdCreditCardDetailInsertInput {
  amount?: InputMaybe<Scalars["numeric"]>;
  category?: InputMaybe<IHouseholdCategoryObjRelInsertInput>;
  categoryId?: InputMaybe<Scalars["String"]>;
  creditCardSummary?: InputMaybe<IHouseholdCreditCardSummaryObjRelInsertInput>;
  date?: InputMaybe<Scalars["date"]>;
  genre?: InputMaybe<IHouseholdGenreObjRelInsertInput>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  memo?: InputMaybe<Scalars["String"]>;
  summaryId?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<IUserObjRelInsertInput>;
  userId?: InputMaybe<Scalars["String"]>;
}

/** aggregate max on columns */
export interface IHouseholdCreditCardDetailMaxFields {
  amount?: Maybe<Scalars["numeric"]>;
  categoryId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  memo?: Maybe<Scalars["String"]>;
  summaryId?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
}

/** order by max() on columns of table "household.credit_card_detail" */
export interface IHouseholdCreditCardDetailMaxOrderBy {
  amount?: InputMaybe<IOrderBy>;
  categoryId?: InputMaybe<IOrderBy>;
  date?: InputMaybe<IOrderBy>;
  genreId?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  iocomeType?: InputMaybe<IOrderBy>;
  memo?: InputMaybe<IOrderBy>;
  summaryId?: InputMaybe<IOrderBy>;
  userId?: InputMaybe<IOrderBy>;
}

/** aggregate min on columns */
export interface IHouseholdCreditCardDetailMinFields {
  amount?: Maybe<Scalars["numeric"]>;
  categoryId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  memo?: Maybe<Scalars["String"]>;
  summaryId?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
}

/** order by min() on columns of table "household.credit_card_detail" */
export interface IHouseholdCreditCardDetailMinOrderBy {
  amount?: InputMaybe<IOrderBy>;
  categoryId?: InputMaybe<IOrderBy>;
  date?: InputMaybe<IOrderBy>;
  genreId?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  iocomeType?: InputMaybe<IOrderBy>;
  memo?: InputMaybe<IOrderBy>;
  summaryId?: InputMaybe<IOrderBy>;
  userId?: InputMaybe<IOrderBy>;
}

/** response of any mutation on the table "household.credit_card_detail" */
export interface IHouseholdCreditCardDetailMutationResponse {
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<IHouseholdCreditCardDetail>;
}

/** on_conflict condition type for table "household.credit_card_detail" */
export interface IHouseholdCreditCardDetailOnConflict {
  constraint: IHouseholdCreditCardDetailConstraint;
  updateColumns?: Array<IHouseholdCreditCardDetailUpdateColumn>;
  where?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
}

/** Ordering options when selecting data from "household.credit_card_detail". */
export interface IHouseholdCreditCardDetailOrderBy {
  amount?: InputMaybe<IOrderBy>;
  category?: InputMaybe<IHouseholdCategoryOrderBy>;
  categoryId?: InputMaybe<IOrderBy>;
  creditCardSummary?: InputMaybe<IHouseholdCreditCardSummaryOrderBy>;
  date?: InputMaybe<IOrderBy>;
  genre?: InputMaybe<IHouseholdGenreOrderBy>;
  genreId?: InputMaybe<IOrderBy>;
  group?: InputMaybe<IGroupOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  iocomeType?: InputMaybe<IOrderBy>;
  memo?: InputMaybe<IOrderBy>;
  summaryId?: InputMaybe<IOrderBy>;
  user?: InputMaybe<IUserOrderBy>;
  userId?: InputMaybe<IOrderBy>;
}

/** primary key columns input for table: household.credit_card_detail */
export interface IHouseholdCreditCardDetailPkColumnsInput {
  id: Scalars["String"];
}

/** select columns of table "household.credit_card_detail" */
export enum IHouseholdCreditCardDetailSelectColumn {
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
export interface IHouseholdCreditCardDetailSetInput {
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
}

/** aggregate stddev on columns */
export interface IHouseholdCreditCardDetailStddevFields {
  amount?: Maybe<Scalars["Float"]>;
}

/** order by stddev() on columns of table "household.credit_card_detail" */
export interface IHouseholdCreditCardDetailStddevOrderBy {
  amount?: InputMaybe<IOrderBy>;
}

/** aggregate stddevPop on columns */
export interface IHouseholdCreditCardDetailStddevPopFields {
  amount?: Maybe<Scalars["Float"]>;
}

/** order by stddevPop() on columns of table "household.credit_card_detail" */
export interface IHouseholdCreditCardDetailStddevPopOrderBy {
  amount?: InputMaybe<IOrderBy>;
}

/** aggregate stddevSamp on columns */
export interface IHouseholdCreditCardDetailStddevSampFields {
  amount?: Maybe<Scalars["Float"]>;
}

/** order by stddevSamp() on columns of table "household.credit_card_detail" */
export interface IHouseholdCreditCardDetailStddevSampOrderBy {
  amount?: InputMaybe<IOrderBy>;
}

/** Streaming cursor of the table "household_credit_card_detail" */
export interface IHouseholdCreditCardDetailStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IHouseholdCreditCardDetailStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IHouseholdCreditCardDetailStreamCursorValueInput {
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
}

/** aggregate sum on columns */
export interface IHouseholdCreditCardDetailSumFields {
  amount?: Maybe<Scalars["numeric"]>;
}

/** order by sum() on columns of table "household.credit_card_detail" */
export interface IHouseholdCreditCardDetailSumOrderBy {
  amount?: InputMaybe<IOrderBy>;
}

/** update columns of table "household.credit_card_detail" */
export enum IHouseholdCreditCardDetailUpdateColumn {
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

export interface IHouseholdCreditCardDetailUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<IHouseholdCreditCardDetailIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<IHouseholdCreditCardDetailSetInput>;
  /** filter the rows which have to be updated */
  where: IHouseholdCreditCardDetailBoolExp;
}

/** aggregate varPop on columns */
export interface IHouseholdCreditCardDetailVarPopFields {
  amount?: Maybe<Scalars["Float"]>;
}

/** order by varPop() on columns of table "household.credit_card_detail" */
export interface IHouseholdCreditCardDetailVarPopOrderBy {
  amount?: InputMaybe<IOrderBy>;
}

/** aggregate varSamp on columns */
export interface IHouseholdCreditCardDetailVarSampFields {
  amount?: Maybe<Scalars["Float"]>;
}

/** order by varSamp() on columns of table "household.credit_card_detail" */
export interface IHouseholdCreditCardDetailVarSampOrderBy {
  amount?: InputMaybe<IOrderBy>;
}

/** aggregate variance on columns */
export interface IHouseholdCreditCardDetailVarianceFields {
  amount?: Maybe<Scalars["Float"]>;
}

/** order by variance() on columns of table "household.credit_card_detail" */
export interface IHouseholdCreditCardDetailVarianceOrderBy {
  amount?: InputMaybe<IOrderBy>;
}

/** columns and relationships of "household.credit_card_summary" */
export interface IHouseholdCreditCardSummary {
  /** An object relationship */
  account: IHouseholdAccount;
  accountId: Scalars["String"];
  count: Scalars["Int"];
  creditCard: Scalars["String"];
  /** An array relationship */
  creditCardDetails: Array<IHouseholdCreditCardDetail>;
  /** An aggregate relationship */
  creditCardDetailsAggregate: IHouseholdCreditCardDetailAggregate;
  /** An object relationship */
  group: IGroup;
  groupId: Scalars["String"];
  id: Scalars["String"];
  totalAmount: Scalars["numeric"];
  withdrawalDate: Scalars["date"];
}

/** columns and relationships of "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryCreditCardDetailsArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
}

/** columns and relationships of "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryCreditCardDetailsAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
}

/** aggregated selection of "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryAggregate {
  aggregate?: Maybe<IHouseholdCreditCardSummaryAggregateFields>;
  nodes: Array<IHouseholdCreditCardSummary>;
}

export interface IHouseholdCreditCardSummaryAggregateBoolExp {
  count?: InputMaybe<IHouseholdCreditCardSummaryAggregateBoolExpCount>;
}

/** aggregate fields of "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryAggregateFields {
  avg?: Maybe<IHouseholdCreditCardSummaryAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<IHouseholdCreditCardSummaryMaxFields>;
  min?: Maybe<IHouseholdCreditCardSummaryMinFields>;
  stddev?: Maybe<IHouseholdCreditCardSummaryStddevFields>;
  stddevPop?: Maybe<IHouseholdCreditCardSummaryStddevPopFields>;
  stddevSamp?: Maybe<IHouseholdCreditCardSummaryStddevSampFields>;
  sum?: Maybe<IHouseholdCreditCardSummarySumFields>;
  varPop?: Maybe<IHouseholdCreditCardSummaryVarPopFields>;
  varSamp?: Maybe<IHouseholdCreditCardSummaryVarSampFields>;
  variance?: Maybe<IHouseholdCreditCardSummaryVarianceFields>;
}

/** aggregate fields of "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<IHouseholdCreditCardSummarySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
}

/** order by aggregate values of table "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryAggregateOrderBy {
  avg?: InputMaybe<IHouseholdCreditCardSummaryAvgOrderBy>;
  count?: InputMaybe<IOrderBy>;
  max?: InputMaybe<IHouseholdCreditCardSummaryMaxOrderBy>;
  min?: InputMaybe<IHouseholdCreditCardSummaryMinOrderBy>;
  stddev?: InputMaybe<IHouseholdCreditCardSummaryStddevOrderBy>;
  stddevPop?: InputMaybe<IHouseholdCreditCardSummaryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<IHouseholdCreditCardSummaryStddevSampOrderBy>;
  sum?: InputMaybe<IHouseholdCreditCardSummarySumOrderBy>;
  varPop?: InputMaybe<IHouseholdCreditCardSummaryVarPopOrderBy>;
  varSamp?: InputMaybe<IHouseholdCreditCardSummaryVarSampOrderBy>;
  variance?: InputMaybe<IHouseholdCreditCardSummaryVarianceOrderBy>;
}

/** input type for inserting array relation for remote table "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryArrRelInsertInput {
  data: Array<IHouseholdCreditCardSummaryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<IHouseholdCreditCardSummaryOnConflict>;
}

/** aggregate avg on columns */
export interface IHouseholdCreditCardSummaryAvgFields {
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
}

/** order by avg() on columns of table "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryAvgOrderBy {
  count?: InputMaybe<IOrderBy>;
  totalAmount?: InputMaybe<IOrderBy>;
}

/** Boolean expression to filter rows from the table "household.credit_card_summary". All fields are combined with a logical 'AND'. */
export interface IHouseholdCreditCardSummaryBoolExp {
  _and?: InputMaybe<Array<IHouseholdCreditCardSummaryBoolExp>>;
  _not?: InputMaybe<IHouseholdCreditCardSummaryBoolExp>;
  _or?: InputMaybe<Array<IHouseholdCreditCardSummaryBoolExp>>;
  account?: InputMaybe<IHouseholdAccountBoolExp>;
  accountId?: InputMaybe<IStringComparisonExp>;
  count?: InputMaybe<IIntComparisonExp>;
  creditCard?: InputMaybe<IStringComparisonExp>;
  creditCardDetails?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
  creditCardDetailsAggregate?: InputMaybe<IHouseholdCreditCardDetailAggregateBoolExp>;
  group?: InputMaybe<IGroupBoolExp>;
  groupId?: InputMaybe<IStringComparisonExp>;
  id?: InputMaybe<IStringComparisonExp>;
  totalAmount?: InputMaybe<INumericComparisonExp>;
  withdrawalDate?: InputMaybe<IDateComparisonExp>;
}

/** unique or primary key constraints on table "household.credit_card_summary" */
export enum IHouseholdCreditCardSummaryConstraint {
  /** unique or primary key constraint on columns "id" */
  CreditCardSummaryPkey = "credit_card_summary_pkey",
}

/** input type for incrementing numeric columns in table "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryIncInput {
  count?: InputMaybe<Scalars["Int"]>;
  totalAmount?: InputMaybe<Scalars["numeric"]>;
}

/** input type for inserting data into table "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryInsertInput {
  account?: InputMaybe<IHouseholdAccountObjRelInsertInput>;
  accountId?: InputMaybe<Scalars["String"]>;
  count?: InputMaybe<Scalars["Int"]>;
  creditCard?: InputMaybe<Scalars["String"]>;
  creditCardDetails?: InputMaybe<IHouseholdCreditCardDetailArrRelInsertInput>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  totalAmount?: InputMaybe<Scalars["numeric"]>;
  withdrawalDate?: InputMaybe<Scalars["date"]>;
}

/** aggregate max on columns */
export interface IHouseholdCreditCardSummaryMaxFields {
  accountId?: Maybe<Scalars["String"]>;
  count?: Maybe<Scalars["Int"]>;
  creditCard?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  totalAmount?: Maybe<Scalars["numeric"]>;
  withdrawalDate?: Maybe<Scalars["date"]>;
}

/** order by max() on columns of table "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryMaxOrderBy {
  accountId?: InputMaybe<IOrderBy>;
  count?: InputMaybe<IOrderBy>;
  creditCard?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  totalAmount?: InputMaybe<IOrderBy>;
  withdrawalDate?: InputMaybe<IOrderBy>;
}

/** aggregate min on columns */
export interface IHouseholdCreditCardSummaryMinFields {
  accountId?: Maybe<Scalars["String"]>;
  count?: Maybe<Scalars["Int"]>;
  creditCard?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  totalAmount?: Maybe<Scalars["numeric"]>;
  withdrawalDate?: Maybe<Scalars["date"]>;
}

/** order by min() on columns of table "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryMinOrderBy {
  accountId?: InputMaybe<IOrderBy>;
  count?: InputMaybe<IOrderBy>;
  creditCard?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  totalAmount?: InputMaybe<IOrderBy>;
  withdrawalDate?: InputMaybe<IOrderBy>;
}

/** response of any mutation on the table "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryMutationResponse {
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<IHouseholdCreditCardSummary>;
}

/** input type for inserting object relation for remote table "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryObjRelInsertInput {
  data: IHouseholdCreditCardSummaryInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<IHouseholdCreditCardSummaryOnConflict>;
}

/** on_conflict condition type for table "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryOnConflict {
  constraint: IHouseholdCreditCardSummaryConstraint;
  updateColumns?: Array<IHouseholdCreditCardSummaryUpdateColumn>;
  where?: InputMaybe<IHouseholdCreditCardSummaryBoolExp>;
}

/** Ordering options when selecting data from "household.credit_card_summary". */
export interface IHouseholdCreditCardSummaryOrderBy {
  account?: InputMaybe<IHouseholdAccountOrderBy>;
  accountId?: InputMaybe<IOrderBy>;
  count?: InputMaybe<IOrderBy>;
  creditCard?: InputMaybe<IOrderBy>;
  creditCardDetailsAggregate?: InputMaybe<IHouseholdCreditCardDetailAggregateOrderBy>;
  group?: InputMaybe<IGroupOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  totalAmount?: InputMaybe<IOrderBy>;
  withdrawalDate?: InputMaybe<IOrderBy>;
}

/** primary key columns input for table: household.credit_card_summary */
export interface IHouseholdCreditCardSummaryPkColumnsInput {
  id: Scalars["String"];
}

/** select columns of table "household.credit_card_summary" */
export enum IHouseholdCreditCardSummarySelectColumn {
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
export interface IHouseholdCreditCardSummarySetInput {
  accountId?: InputMaybe<Scalars["String"]>;
  count?: InputMaybe<Scalars["Int"]>;
  creditCard?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  totalAmount?: InputMaybe<Scalars["numeric"]>;
  withdrawalDate?: InputMaybe<Scalars["date"]>;
}

/** aggregate stddev on columns */
export interface IHouseholdCreditCardSummaryStddevFields {
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
}

/** order by stddev() on columns of table "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryStddevOrderBy {
  count?: InputMaybe<IOrderBy>;
  totalAmount?: InputMaybe<IOrderBy>;
}

/** aggregate stddevPop on columns */
export interface IHouseholdCreditCardSummaryStddevPopFields {
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
}

/** order by stddevPop() on columns of table "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryStddevPopOrderBy {
  count?: InputMaybe<IOrderBy>;
  totalAmount?: InputMaybe<IOrderBy>;
}

/** aggregate stddevSamp on columns */
export interface IHouseholdCreditCardSummaryStddevSampFields {
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
}

/** order by stddevSamp() on columns of table "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryStddevSampOrderBy {
  count?: InputMaybe<IOrderBy>;
  totalAmount?: InputMaybe<IOrderBy>;
}

/** Streaming cursor of the table "household_credit_card_summary" */
export interface IHouseholdCreditCardSummaryStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IHouseholdCreditCardSummaryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IHouseholdCreditCardSummaryStreamCursorValueInput {
  accountId?: InputMaybe<Scalars["String"]>;
  count?: InputMaybe<Scalars["Int"]>;
  creditCard?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  totalAmount?: InputMaybe<Scalars["numeric"]>;
  withdrawalDate?: InputMaybe<Scalars["date"]>;
}

/** aggregate sum on columns */
export interface IHouseholdCreditCardSummarySumFields {
  count?: Maybe<Scalars["Int"]>;
  totalAmount?: Maybe<Scalars["numeric"]>;
}

/** order by sum() on columns of table "household.credit_card_summary" */
export interface IHouseholdCreditCardSummarySumOrderBy {
  count?: InputMaybe<IOrderBy>;
  totalAmount?: InputMaybe<IOrderBy>;
}

/** columns and relationships of "household.credit_card_summary_total_by_account_view" */
export interface IHouseholdCreditCardSummaryTotalByAccountView {
  accountId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
}

/** aggregated selection of "household.credit_card_summary_total_by_account_view" */
export interface IHouseholdCreditCardSummaryTotalByAccountViewAggregate {
  aggregate?: Maybe<IHouseholdCreditCardSummaryTotalByAccountViewAggregateFields>;
  nodes: Array<IHouseholdCreditCardSummaryTotalByAccountView>;
}

/** aggregate fields of "household.credit_card_summary_total_by_account_view" */
export interface IHouseholdCreditCardSummaryTotalByAccountViewAggregateFields {
  avg?: Maybe<IHouseholdCreditCardSummaryTotalByAccountViewAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<IHouseholdCreditCardSummaryTotalByAccountViewMaxFields>;
  min?: Maybe<IHouseholdCreditCardSummaryTotalByAccountViewMinFields>;
  stddev?: Maybe<IHouseholdCreditCardSummaryTotalByAccountViewStddevFields>;
  stddevPop?: Maybe<IHouseholdCreditCardSummaryTotalByAccountViewStddevPopFields>;
  stddevSamp?: Maybe<IHouseholdCreditCardSummaryTotalByAccountViewStddevSampFields>;
  sum?: Maybe<IHouseholdCreditCardSummaryTotalByAccountViewSumFields>;
  varPop?: Maybe<IHouseholdCreditCardSummaryTotalByAccountViewVarPopFields>;
  varSamp?: Maybe<IHouseholdCreditCardSummaryTotalByAccountViewVarSampFields>;
  variance?: Maybe<IHouseholdCreditCardSummaryTotalByAccountViewVarianceFields>;
}

/** aggregate fields of "household.credit_card_summary_total_by_account_view" */
export interface IHouseholdCreditCardSummaryTotalByAccountViewAggregateFieldsCountArgs {
  columns?: InputMaybe<
    Array<IHouseholdCreditCardSummaryTotalByAccountViewSelectColumn>
  >;
  distinct?: InputMaybe<Scalars["Boolean"]>;
}

/** aggregate avg on columns */
export interface IHouseholdCreditCardSummaryTotalByAccountViewAvgFields {
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
}

/** Boolean expression to filter rows from the table "household.credit_card_summary_total_by_account_view". All fields are combined with a logical 'AND'. */
export interface IHouseholdCreditCardSummaryTotalByAccountViewBoolExp {
  _and?: InputMaybe<
    Array<IHouseholdCreditCardSummaryTotalByAccountViewBoolExp>
  >;
  _not?: InputMaybe<IHouseholdCreditCardSummaryTotalByAccountViewBoolExp>;
  _or?: InputMaybe<Array<IHouseholdCreditCardSummaryTotalByAccountViewBoolExp>>;
  accountId?: InputMaybe<IStringComparisonExp>;
  date?: InputMaybe<IDateComparisonExp>;
  displayOrder?: InputMaybe<IIntComparisonExp>;
  groupId?: InputMaybe<IStringComparisonExp>;
  iocomeType?: InputMaybe<IStringComparisonExp>;
  name?: InputMaybe<IStringComparisonExp>;
  total?: InputMaybe<INumericComparisonExp>;
}

/** aggregate max on columns */
export interface IHouseholdCreditCardSummaryTotalByAccountViewMaxFields {
  accountId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
}

/** aggregate min on columns */
export interface IHouseholdCreditCardSummaryTotalByAccountViewMinFields {
  accountId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
}

/** Ordering options when selecting data from "household.credit_card_summary_total_by_account_view". */
export interface IHouseholdCreditCardSummaryTotalByAccountViewOrderBy {
  accountId?: InputMaybe<IOrderBy>;
  date?: InputMaybe<IOrderBy>;
  displayOrder?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  iocomeType?: InputMaybe<IOrderBy>;
  name?: InputMaybe<IOrderBy>;
  total?: InputMaybe<IOrderBy>;
}

/** select columns of table "household.credit_card_summary_total_by_account_view" */
export enum IHouseholdCreditCardSummaryTotalByAccountViewSelectColumn {
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

/** aggregate stddev on columns */
export interface IHouseholdCreditCardSummaryTotalByAccountViewStddevFields {
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
}

/** aggregate stddevPop on columns */
export interface IHouseholdCreditCardSummaryTotalByAccountViewStddevPopFields {
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
}

/** aggregate stddevSamp on columns */
export interface IHouseholdCreditCardSummaryTotalByAccountViewStddevSampFields {
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
}

/** Streaming cursor of the table "household_credit_card_summary_total_by_account_view" */
export interface IHouseholdCreditCardSummaryTotalByAccountViewStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IHouseholdCreditCardSummaryTotalByAccountViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IHouseholdCreditCardSummaryTotalByAccountViewStreamCursorValueInput {
  accountId?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  total?: InputMaybe<Scalars["numeric"]>;
}

/** aggregate sum on columns */
export interface IHouseholdCreditCardSummaryTotalByAccountViewSumFields {
  displayOrder?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["numeric"]>;
}

/** aggregate varPop on columns */
export interface IHouseholdCreditCardSummaryTotalByAccountViewVarPopFields {
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
}

/** aggregate varSamp on columns */
export interface IHouseholdCreditCardSummaryTotalByAccountViewVarSampFields {
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
}

/** aggregate variance on columns */
export interface IHouseholdCreditCardSummaryTotalByAccountViewVarianceFields {
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
}

/** update columns of table "household.credit_card_summary" */
export enum IHouseholdCreditCardSummaryUpdateColumn {
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

export interface IHouseholdCreditCardSummaryUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<IHouseholdCreditCardSummaryIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<IHouseholdCreditCardSummarySetInput>;
  /** filter the rows which have to be updated */
  where: IHouseholdCreditCardSummaryBoolExp;
}

/** aggregate varPop on columns */
export interface IHouseholdCreditCardSummaryVarPopFields {
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
}

/** order by varPop() on columns of table "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryVarPopOrderBy {
  count?: InputMaybe<IOrderBy>;
  totalAmount?: InputMaybe<IOrderBy>;
}

/** aggregate varSamp on columns */
export interface IHouseholdCreditCardSummaryVarSampFields {
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
}

/** order by varSamp() on columns of table "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryVarSampOrderBy {
  count?: InputMaybe<IOrderBy>;
  totalAmount?: InputMaybe<IOrderBy>;
}

/** aggregate variance on columns */
export interface IHouseholdCreditCardSummaryVarianceFields {
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
}

/** order by variance() on columns of table "household.credit_card_summary" */
export interface IHouseholdCreditCardSummaryVarianceOrderBy {
  count?: InputMaybe<IOrderBy>;
  totalAmount?: InputMaybe<IOrderBy>;
}

/** columns and relationships of "household.daily_detail" */
export interface IHouseholdDailyDetail {
  /** An object relationship */
  account: IHouseholdAccount;
  accountId: Scalars["String"];
  amount: Scalars["numeric"];
  /** An object relationship */
  category: IHouseholdCategory;
  categoryId: Scalars["String"];
  date: Scalars["date"];
  /** An object relationship */
  genre: IHouseholdGenre;
  genreId: Scalars["String"];
  /** An object relationship */
  group: IGroup;
  groupId: Scalars["String"];
  id: Scalars["String"];
  iocomeType: Scalars["String"];
  memo?: Maybe<Scalars["String"]>;
  /** An object relationship */
  user: IUser;
  userId: Scalars["String"];
}

/** aggregated selection of "household.daily_detail" */
export interface IHouseholdDailyDetailAggregate {
  aggregate?: Maybe<IHouseholdDailyDetailAggregateFields>;
  nodes: Array<IHouseholdDailyDetail>;
}

export interface IHouseholdDailyDetailAggregateBoolExp {
  count?: InputMaybe<IHouseholdDailyDetailAggregateBoolExpCount>;
}

/** aggregate fields of "household.daily_detail" */
export interface IHouseholdDailyDetailAggregateFields {
  avg?: Maybe<IHouseholdDailyDetailAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<IHouseholdDailyDetailMaxFields>;
  min?: Maybe<IHouseholdDailyDetailMinFields>;
  stddev?: Maybe<IHouseholdDailyDetailStddevFields>;
  stddevPop?: Maybe<IHouseholdDailyDetailStddevPopFields>;
  stddevSamp?: Maybe<IHouseholdDailyDetailStddevSampFields>;
  sum?: Maybe<IHouseholdDailyDetailSumFields>;
  varPop?: Maybe<IHouseholdDailyDetailVarPopFields>;
  varSamp?: Maybe<IHouseholdDailyDetailVarSampFields>;
  variance?: Maybe<IHouseholdDailyDetailVarianceFields>;
}

/** aggregate fields of "household.daily_detail" */
export interface IHouseholdDailyDetailAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
}

/** order by aggregate values of table "household.daily_detail" */
export interface IHouseholdDailyDetailAggregateOrderBy {
  avg?: InputMaybe<IHouseholdDailyDetailAvgOrderBy>;
  count?: InputMaybe<IOrderBy>;
  max?: InputMaybe<IHouseholdDailyDetailMaxOrderBy>;
  min?: InputMaybe<IHouseholdDailyDetailMinOrderBy>;
  stddev?: InputMaybe<IHouseholdDailyDetailStddevOrderBy>;
  stddevPop?: InputMaybe<IHouseholdDailyDetailStddevPopOrderBy>;
  stddevSamp?: InputMaybe<IHouseholdDailyDetailStddevSampOrderBy>;
  sum?: InputMaybe<IHouseholdDailyDetailSumOrderBy>;
  varPop?: InputMaybe<IHouseholdDailyDetailVarPopOrderBy>;
  varSamp?: InputMaybe<IHouseholdDailyDetailVarSampOrderBy>;
  variance?: InputMaybe<IHouseholdDailyDetailVarianceOrderBy>;
}

/** input type for inserting array relation for remote table "household.daily_detail" */
export interface IHouseholdDailyDetailArrRelInsertInput {
  data: Array<IHouseholdDailyDetailInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<IHouseholdDailyDetailOnConflict>;
}

/** aggregate avg on columns */
export interface IHouseholdDailyDetailAvgFields {
  amount?: Maybe<Scalars["Float"]>;
}

/** order by avg() on columns of table "household.daily_detail" */
export interface IHouseholdDailyDetailAvgOrderBy {
  amount?: InputMaybe<IOrderBy>;
}

/** Boolean expression to filter rows from the table "household.daily_detail". All fields are combined with a logical 'AND'. */
export interface IHouseholdDailyDetailBoolExp {
  _and?: InputMaybe<Array<IHouseholdDailyDetailBoolExp>>;
  _not?: InputMaybe<IHouseholdDailyDetailBoolExp>;
  _or?: InputMaybe<Array<IHouseholdDailyDetailBoolExp>>;
  account?: InputMaybe<IHouseholdAccountBoolExp>;
  accountId?: InputMaybe<IStringComparisonExp>;
  amount?: InputMaybe<INumericComparisonExp>;
  category?: InputMaybe<IHouseholdCategoryBoolExp>;
  categoryId?: InputMaybe<IStringComparisonExp>;
  date?: InputMaybe<IDateComparisonExp>;
  genre?: InputMaybe<IHouseholdGenreBoolExp>;
  genreId?: InputMaybe<IStringComparisonExp>;
  group?: InputMaybe<IGroupBoolExp>;
  groupId?: InputMaybe<IStringComparisonExp>;
  id?: InputMaybe<IStringComparisonExp>;
  iocomeType?: InputMaybe<IStringComparisonExp>;
  memo?: InputMaybe<IStringComparisonExp>;
  user?: InputMaybe<IUserBoolExp>;
  userId?: InputMaybe<IStringComparisonExp>;
}

/** unique or primary key constraints on table "household.daily_detail" */
export enum IHouseholdDailyDetailConstraint {
  /** unique or primary key constraint on columns "id" */
  DailyDetailPkey = "daily_detail_pkey",
}

/** input type for incrementing numeric columns in table "household.daily_detail" */
export interface IHouseholdDailyDetailIncInput {
  amount?: InputMaybe<Scalars["numeric"]>;
}

/** input type for inserting data into table "household.daily_detail" */
export interface IHouseholdDailyDetailInsertInput {
  account?: InputMaybe<IHouseholdAccountObjRelInsertInput>;
  accountId?: InputMaybe<Scalars["String"]>;
  amount?: InputMaybe<Scalars["numeric"]>;
  category?: InputMaybe<IHouseholdCategoryObjRelInsertInput>;
  categoryId?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  genre?: InputMaybe<IHouseholdGenreObjRelInsertInput>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  memo?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<IUserObjRelInsertInput>;
  userId?: InputMaybe<Scalars["String"]>;
}

/** aggregate max on columns */
export interface IHouseholdDailyDetailMaxFields {
  accountId?: Maybe<Scalars["String"]>;
  amount?: Maybe<Scalars["numeric"]>;
  categoryId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  memo?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
}

/** order by max() on columns of table "household.daily_detail" */
export interface IHouseholdDailyDetailMaxOrderBy {
  accountId?: InputMaybe<IOrderBy>;
  amount?: InputMaybe<IOrderBy>;
  categoryId?: InputMaybe<IOrderBy>;
  date?: InputMaybe<IOrderBy>;
  genreId?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  iocomeType?: InputMaybe<IOrderBy>;
  memo?: InputMaybe<IOrderBy>;
  userId?: InputMaybe<IOrderBy>;
}

/** aggregate min on columns */
export interface IHouseholdDailyDetailMinFields {
  accountId?: Maybe<Scalars["String"]>;
  amount?: Maybe<Scalars["numeric"]>;
  categoryId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  memo?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
}

/** order by min() on columns of table "household.daily_detail" */
export interface IHouseholdDailyDetailMinOrderBy {
  accountId?: InputMaybe<IOrderBy>;
  amount?: InputMaybe<IOrderBy>;
  categoryId?: InputMaybe<IOrderBy>;
  date?: InputMaybe<IOrderBy>;
  genreId?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  iocomeType?: InputMaybe<IOrderBy>;
  memo?: InputMaybe<IOrderBy>;
  userId?: InputMaybe<IOrderBy>;
}

/** response of any mutation on the table "household.daily_detail" */
export interface IHouseholdDailyDetailMutationResponse {
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<IHouseholdDailyDetail>;
}

/** on_conflict condition type for table "household.daily_detail" */
export interface IHouseholdDailyDetailOnConflict {
  constraint: IHouseholdDailyDetailConstraint;
  updateColumns?: Array<IHouseholdDailyDetailUpdateColumn>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

/** Ordering options when selecting data from "household.daily_detail". */
export interface IHouseholdDailyDetailOrderBy {
  account?: InputMaybe<IHouseholdAccountOrderBy>;
  accountId?: InputMaybe<IOrderBy>;
  amount?: InputMaybe<IOrderBy>;
  category?: InputMaybe<IHouseholdCategoryOrderBy>;
  categoryId?: InputMaybe<IOrderBy>;
  date?: InputMaybe<IOrderBy>;
  genre?: InputMaybe<IHouseholdGenreOrderBy>;
  genreId?: InputMaybe<IOrderBy>;
  group?: InputMaybe<IGroupOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  iocomeType?: InputMaybe<IOrderBy>;
  memo?: InputMaybe<IOrderBy>;
  user?: InputMaybe<IUserOrderBy>;
  userId?: InputMaybe<IOrderBy>;
}

/** primary key columns input for table: household.daily_detail */
export interface IHouseholdDailyDetailPkColumnsInput {
  id: Scalars["String"];
}

/** select columns of table "household.daily_detail" */
export enum IHouseholdDailyDetailSelectColumn {
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
export interface IHouseholdDailyDetailSetInput {
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
}

/** aggregate stddev on columns */
export interface IHouseholdDailyDetailStddevFields {
  amount?: Maybe<Scalars["Float"]>;
}

/** order by stddev() on columns of table "household.daily_detail" */
export interface IHouseholdDailyDetailStddevOrderBy {
  amount?: InputMaybe<IOrderBy>;
}

/** aggregate stddevPop on columns */
export interface IHouseholdDailyDetailStddevPopFields {
  amount?: Maybe<Scalars["Float"]>;
}

/** order by stddevPop() on columns of table "household.daily_detail" */
export interface IHouseholdDailyDetailStddevPopOrderBy {
  amount?: InputMaybe<IOrderBy>;
}

/** aggregate stddevSamp on columns */
export interface IHouseholdDailyDetailStddevSampFields {
  amount?: Maybe<Scalars["Float"]>;
}

/** order by stddevSamp() on columns of table "household.daily_detail" */
export interface IHouseholdDailyDetailStddevSampOrderBy {
  amount?: InputMaybe<IOrderBy>;
}

/** Streaming cursor of the table "household_daily_detail" */
export interface IHouseholdDailyDetailStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IHouseholdDailyDetailStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IHouseholdDailyDetailStreamCursorValueInput {
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
}

/** aggregate sum on columns */
export interface IHouseholdDailyDetailSumFields {
  amount?: Maybe<Scalars["numeric"]>;
}

/** order by sum() on columns of table "household.daily_detail" */
export interface IHouseholdDailyDetailSumOrderBy {
  amount?: InputMaybe<IOrderBy>;
}

/** update columns of table "household.daily_detail" */
export enum IHouseholdDailyDetailUpdateColumn {
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

export interface IHouseholdDailyDetailUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<IHouseholdDailyDetailIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<IHouseholdDailyDetailSetInput>;
  /** filter the rows which have to be updated */
  where: IHouseholdDailyDetailBoolExp;
}

/** aggregate varPop on columns */
export interface IHouseholdDailyDetailVarPopFields {
  amount?: Maybe<Scalars["Float"]>;
}

/** order by varPop() on columns of table "household.daily_detail" */
export interface IHouseholdDailyDetailVarPopOrderBy {
  amount?: InputMaybe<IOrderBy>;
}

/** aggregate varSamp on columns */
export interface IHouseholdDailyDetailVarSampFields {
  amount?: Maybe<Scalars["Float"]>;
}

/** order by varSamp() on columns of table "household.daily_detail" */
export interface IHouseholdDailyDetailVarSampOrderBy {
  amount?: InputMaybe<IOrderBy>;
}

/** aggregate variance on columns */
export interface IHouseholdDailyDetailVarianceFields {
  amount?: Maybe<Scalars["Float"]>;
}

/** order by variance() on columns of table "household.daily_detail" */
export interface IHouseholdDailyDetailVarianceOrderBy {
  amount?: InputMaybe<IOrderBy>;
}

/** columns and relationships of "household.daily_total_view" */
export interface IHouseholdDailyTotalView {
  date?: Maybe<Scalars["date"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
}

/** aggregated selection of "household.daily_total_view" */
export interface IHouseholdDailyTotalViewAggregate {
  aggregate?: Maybe<IHouseholdDailyTotalViewAggregateFields>;
  nodes: Array<IHouseholdDailyTotalView>;
}

/** aggregate fields of "household.daily_total_view" */
export interface IHouseholdDailyTotalViewAggregateFields {
  avg?: Maybe<IHouseholdDailyTotalViewAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<IHouseholdDailyTotalViewMaxFields>;
  min?: Maybe<IHouseholdDailyTotalViewMinFields>;
  stddev?: Maybe<IHouseholdDailyTotalViewStddevFields>;
  stddevPop?: Maybe<IHouseholdDailyTotalViewStddevPopFields>;
  stddevSamp?: Maybe<IHouseholdDailyTotalViewStddevSampFields>;
  sum?: Maybe<IHouseholdDailyTotalViewSumFields>;
  varPop?: Maybe<IHouseholdDailyTotalViewVarPopFields>;
  varSamp?: Maybe<IHouseholdDailyTotalViewVarSampFields>;
  variance?: Maybe<IHouseholdDailyTotalViewVarianceFields>;
}

/** aggregate fields of "household.daily_total_view" */
export interface IHouseholdDailyTotalViewAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<IHouseholdDailyTotalViewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
}

/** aggregate avg on columns */
export interface IHouseholdDailyTotalViewAvgFields {
  total?: Maybe<Scalars["Float"]>;
}

/** Boolean expression to filter rows from the table "household.daily_total_view". All fields are combined with a logical 'AND'. */
export interface IHouseholdDailyTotalViewBoolExp {
  _and?: InputMaybe<Array<IHouseholdDailyTotalViewBoolExp>>;
  _not?: InputMaybe<IHouseholdDailyTotalViewBoolExp>;
  _or?: InputMaybe<Array<IHouseholdDailyTotalViewBoolExp>>;
  date?: InputMaybe<IDateComparisonExp>;
  groupId?: InputMaybe<IStringComparisonExp>;
  iocomeType?: InputMaybe<IStringComparisonExp>;
  total?: InputMaybe<INumericComparisonExp>;
}

/** aggregate max on columns */
export interface IHouseholdDailyTotalViewMaxFields {
  date?: Maybe<Scalars["date"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
}

/** aggregate min on columns */
export interface IHouseholdDailyTotalViewMinFields {
  date?: Maybe<Scalars["date"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
}

/** Ordering options when selecting data from "household.daily_total_view". */
export interface IHouseholdDailyTotalViewOrderBy {
  date?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  iocomeType?: InputMaybe<IOrderBy>;
  total?: InputMaybe<IOrderBy>;
}

/** select columns of table "household.daily_total_view" */
export enum IHouseholdDailyTotalViewSelectColumn {
  /** column name */
  Date = "date",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Total = "total",
}

/** aggregate stddev on columns */
export interface IHouseholdDailyTotalViewStddevFields {
  total?: Maybe<Scalars["Float"]>;
}

/** aggregate stddevPop on columns */
export interface IHouseholdDailyTotalViewStddevPopFields {
  total?: Maybe<Scalars["Float"]>;
}

/** aggregate stddevSamp on columns */
export interface IHouseholdDailyTotalViewStddevSampFields {
  total?: Maybe<Scalars["Float"]>;
}

/** Streaming cursor of the table "household_daily_total_view" */
export interface IHouseholdDailyTotalViewStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IHouseholdDailyTotalViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IHouseholdDailyTotalViewStreamCursorValueInput {
  date?: InputMaybe<Scalars["date"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  total?: InputMaybe<Scalars["numeric"]>;
}

/** aggregate sum on columns */
export interface IHouseholdDailyTotalViewSumFields {
  total?: Maybe<Scalars["numeric"]>;
}

/** aggregate varPop on columns */
export interface IHouseholdDailyTotalViewVarPopFields {
  total?: Maybe<Scalars["Float"]>;
}

/** aggregate varSamp on columns */
export interface IHouseholdDailyTotalViewVarSampFields {
  total?: Maybe<Scalars["Float"]>;
}

/** aggregate variance on columns */
export interface IHouseholdDailyTotalViewVarianceFields {
  total?: Maybe<Scalars["Float"]>;
}

/** columns and relationships of "household.deposit_category" */
export interface IHouseholdDepositCategory {
  /** An object relationship */
  category: IHouseholdCategory;
  categoryId: Scalars["String"];
  /** An object relationship */
  group: IGroup;
  groupId: Scalars["String"];
}

/** aggregated selection of "household.deposit_category" */
export interface IHouseholdDepositCategoryAggregate {
  aggregate?: Maybe<IHouseholdDepositCategoryAggregateFields>;
  nodes: Array<IHouseholdDepositCategory>;
}

export interface IHouseholdDepositCategoryAggregateBoolExp {
  count?: InputMaybe<IHouseholdDepositCategoryAggregateBoolExpCount>;
}

/** aggregate fields of "household.deposit_category" */
export interface IHouseholdDepositCategoryAggregateFields {
  count: Scalars["Int"];
  max?: Maybe<IHouseholdDepositCategoryMaxFields>;
  min?: Maybe<IHouseholdDepositCategoryMinFields>;
}

/** aggregate fields of "household.deposit_category" */
export interface IHouseholdDepositCategoryAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<IHouseholdDepositCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
}

/** order by aggregate values of table "household.deposit_category" */
export interface IHouseholdDepositCategoryAggregateOrderBy {
  count?: InputMaybe<IOrderBy>;
  max?: InputMaybe<IHouseholdDepositCategoryMaxOrderBy>;
  min?: InputMaybe<IHouseholdDepositCategoryMinOrderBy>;
}

/** Boolean expression to filter rows from the table "household.deposit_category". All fields are combined with a logical 'AND'. */
export interface IHouseholdDepositCategoryBoolExp {
  _and?: InputMaybe<Array<IHouseholdDepositCategoryBoolExp>>;
  _not?: InputMaybe<IHouseholdDepositCategoryBoolExp>;
  _or?: InputMaybe<Array<IHouseholdDepositCategoryBoolExp>>;
  category?: InputMaybe<IHouseholdCategoryBoolExp>;
  categoryId?: InputMaybe<IStringComparisonExp>;
  group?: InputMaybe<IGroupBoolExp>;
  groupId?: InputMaybe<IStringComparisonExp>;
}

/** aggregate max on columns */
export interface IHouseholdDepositCategoryMaxFields {
  categoryId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
}

/** order by max() on columns of table "household.deposit_category" */
export interface IHouseholdDepositCategoryMaxOrderBy {
  categoryId?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
}

/** aggregate min on columns */
export interface IHouseholdDepositCategoryMinFields {
  categoryId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
}

/** order by min() on columns of table "household.deposit_category" */
export interface IHouseholdDepositCategoryMinOrderBy {
  categoryId?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
}

/** Ordering options when selecting data from "household.deposit_category". */
export interface IHouseholdDepositCategoryOrderBy {
  category?: InputMaybe<IHouseholdCategoryOrderBy>;
  categoryId?: InputMaybe<IOrderBy>;
  group?: InputMaybe<IGroupOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
}

/** select columns of table "household.deposit_category" */
export enum IHouseholdDepositCategorySelectColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  GroupId = "groupId",
}

/** Streaming cursor of the table "household_deposit_category" */
export interface IHouseholdDepositCategoryStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IHouseholdDepositCategoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IHouseholdDepositCategoryStreamCursorValueInput {
  categoryId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
}

/** columns and relationships of "household.genre" */
export interface IHouseholdGenre {
  /** An array relationship */
  categories: Array<IHouseholdCategory>;
  /** An array relationship */
  creditCardDetails: Array<IHouseholdCreditCardDetail>;
  /** An aggregate relationship */
  creditCardDetailsAggregate: IHouseholdCreditCardDetailAggregate;
  /** An array relationship */
  dailyDetails: Array<IHouseholdDailyDetail>;
  /** An aggregate relationship */
  dailyDetailsAggregate: IHouseholdDailyDetailAggregate;
  displayOrder: Scalars["Int"];
  genreType: Scalars["String"];
  /** An object relationship */
  group: IGroup;
  groupId: Scalars["String"];
  id: Scalars["String"];
  iocomeType: Scalars["String"];
  name: Scalars["String"];
  validFlag?: Maybe<Scalars["Boolean"]>;
}

/** columns and relationships of "household.genre" */
export interface IHouseholdGenreCategoriesArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdCategoryBoolExp>;
}

/** columns and relationships of "household.genre" */
export interface IHouseholdGenreCreditCardDetailsArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
}

/** columns and relationships of "household.genre" */
export interface IHouseholdGenreCreditCardDetailsAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
}

/** columns and relationships of "household.genre" */
export interface IHouseholdGenreDailyDetailsArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

/** columns and relationships of "household.genre" */
export interface IHouseholdGenreDailyDetailsAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

/** aggregated selection of "household.genre" */
export interface IHouseholdGenreAggregate {
  aggregate?: Maybe<IHouseholdGenreAggregateFields>;
  nodes: Array<IHouseholdGenre>;
}

export interface IHouseholdGenreAggregateBoolExp {
  bool_and?: InputMaybe<IHouseholdGenreAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<IHouseholdGenreAggregateBoolExpBool_Or>;
  count?: InputMaybe<IHouseholdGenreAggregateBoolExpCount>;
}

/** aggregate fields of "household.genre" */
export interface IHouseholdGenreAggregateFields {
  avg?: Maybe<IHouseholdGenreAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<IHouseholdGenreMaxFields>;
  min?: Maybe<IHouseholdGenreMinFields>;
  stddev?: Maybe<IHouseholdGenreStddevFields>;
  stddevPop?: Maybe<IHouseholdGenreStddevPopFields>;
  stddevSamp?: Maybe<IHouseholdGenreStddevSampFields>;
  sum?: Maybe<IHouseholdGenreSumFields>;
  varPop?: Maybe<IHouseholdGenreVarPopFields>;
  varSamp?: Maybe<IHouseholdGenreVarSampFields>;
  variance?: Maybe<IHouseholdGenreVarianceFields>;
}

/** aggregate fields of "household.genre" */
export interface IHouseholdGenreAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<IHouseholdGenreSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
}

/** order by aggregate values of table "household.genre" */
export interface IHouseholdGenreAggregateOrderBy {
  avg?: InputMaybe<IHouseholdGenreAvgOrderBy>;
  count?: InputMaybe<IOrderBy>;
  max?: InputMaybe<IHouseholdGenreMaxOrderBy>;
  min?: InputMaybe<IHouseholdGenreMinOrderBy>;
  stddev?: InputMaybe<IHouseholdGenreStddevOrderBy>;
  stddevPop?: InputMaybe<IHouseholdGenreStddevPopOrderBy>;
  stddevSamp?: InputMaybe<IHouseholdGenreStddevSampOrderBy>;
  sum?: InputMaybe<IHouseholdGenreSumOrderBy>;
  varPop?: InputMaybe<IHouseholdGenreVarPopOrderBy>;
  varSamp?: InputMaybe<IHouseholdGenreVarSampOrderBy>;
  variance?: InputMaybe<IHouseholdGenreVarianceOrderBy>;
}

/** aggregate avg on columns */
export interface IHouseholdGenreAvgFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by avg() on columns of table "household.genre" */
export interface IHouseholdGenreAvgOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** Boolean expression to filter rows from the table "household.genre". All fields are combined with a logical 'AND'. */
export interface IHouseholdGenreBoolExp {
  _and?: InputMaybe<Array<IHouseholdGenreBoolExp>>;
  _not?: InputMaybe<IHouseholdGenreBoolExp>;
  _or?: InputMaybe<Array<IHouseholdGenreBoolExp>>;
  categories?: InputMaybe<IHouseholdCategoryBoolExp>;
  creditCardDetails?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
  creditCardDetailsAggregate?: InputMaybe<IHouseholdCreditCardDetailAggregateBoolExp>;
  dailyDetails?: InputMaybe<IHouseholdDailyDetailBoolExp>;
  dailyDetailsAggregate?: InputMaybe<IHouseholdDailyDetailAggregateBoolExp>;
  displayOrder?: InputMaybe<IIntComparisonExp>;
  genreType?: InputMaybe<IStringComparisonExp>;
  group?: InputMaybe<IGroupBoolExp>;
  groupId?: InputMaybe<IStringComparisonExp>;
  id?: InputMaybe<IStringComparisonExp>;
  iocomeType?: InputMaybe<IStringComparisonExp>;
  name?: InputMaybe<IStringComparisonExp>;
  validFlag?: InputMaybe<IBooleanComparisonExp>;
}

/** unique or primary key constraints on table "household.genre" */
export enum IHouseholdGenreConstraint {
  /** unique or primary key constraint on columns "id" */
  GenrePkey = "genre_pkey",
}

/** input type for incrementing numeric columns in table "household.genre" */
export interface IHouseholdGenreIncInput {
  displayOrder?: InputMaybe<Scalars["Int"]>;
}

/** input type for inserting data into table "household.genre" */
export interface IHouseholdGenreInsertInput {
  categories?: InputMaybe<IHouseholdCategoryArrRelInsertInput>;
  creditCardDetails?: InputMaybe<IHouseholdCreditCardDetailArrRelInsertInput>;
  dailyDetails?: InputMaybe<IHouseholdDailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreType?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
}

/** aggregate max on columns */
export interface IHouseholdGenreMaxFields {
  displayOrder?: Maybe<Scalars["Int"]>;
  genreType?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
}

/** order by max() on columns of table "household.genre" */
export interface IHouseholdGenreMaxOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
  genreType?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  iocomeType?: InputMaybe<IOrderBy>;
  name?: InputMaybe<IOrderBy>;
}

/** aggregate min on columns */
export interface IHouseholdGenreMinFields {
  displayOrder?: Maybe<Scalars["Int"]>;
  genreType?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
}

/** order by min() on columns of table "household.genre" */
export interface IHouseholdGenreMinOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
  genreType?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  iocomeType?: InputMaybe<IOrderBy>;
  name?: InputMaybe<IOrderBy>;
}

/** response of any mutation on the table "household.genre" */
export interface IHouseholdGenreMutationResponse {
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<IHouseholdGenre>;
}

/** input type for inserting object relation for remote table "household.genre" */
export interface IHouseholdGenreObjRelInsertInput {
  data: IHouseholdGenreInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<IHouseholdGenreOnConflict>;
}

/** on_conflict condition type for table "household.genre" */
export interface IHouseholdGenreOnConflict {
  constraint: IHouseholdGenreConstraint;
  updateColumns?: Array<IHouseholdGenreUpdateColumn>;
  where?: InputMaybe<IHouseholdGenreBoolExp>;
}

/** Ordering options when selecting data from "household.genre". */
export interface IHouseholdGenreOrderBy {
  categoriesAggregate?: InputMaybe<IHouseholdCategoryAggregateOrderBy>;
  creditCardDetailsAggregate?: InputMaybe<IHouseholdCreditCardDetailAggregateOrderBy>;
  dailyDetailsAggregate?: InputMaybe<IHouseholdDailyDetailAggregateOrderBy>;
  displayOrder?: InputMaybe<IOrderBy>;
  genreType?: InputMaybe<IOrderBy>;
  group?: InputMaybe<IGroupOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  iocomeType?: InputMaybe<IOrderBy>;
  name?: InputMaybe<IOrderBy>;
  validFlag?: InputMaybe<IOrderBy>;
}

/** primary key columns input for table: household.genre */
export interface IHouseholdGenrePkColumnsInput {
  id: Scalars["String"];
}

/** select columns of table "household.genre" */
export enum IHouseholdGenreSelectColumn {
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
export enum IHouseholdGenreSelectColumnHouseholdGenreAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  ValidFlag = "validFlag",
}

/** select "householdGenreAggregateBoolExpBool_orArgumentsColumns" columns of table "household.genre" */
export enum IHouseholdGenreSelectColumnHouseholdGenreAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  ValidFlag = "validFlag",
}

/** input type for updating data in table "household.genre" */
export interface IHouseholdGenreSetInput {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreType?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
}

/** aggregate stddev on columns */
export interface IHouseholdGenreStddevFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by stddev() on columns of table "household.genre" */
export interface IHouseholdGenreStddevOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** aggregate stddevPop on columns */
export interface IHouseholdGenreStddevPopFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by stddevPop() on columns of table "household.genre" */
export interface IHouseholdGenreStddevPopOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** aggregate stddevSamp on columns */
export interface IHouseholdGenreStddevSampFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by stddevSamp() on columns of table "household.genre" */
export interface IHouseholdGenreStddevSampOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** Streaming cursor of the table "household_genre" */
export interface IHouseholdGenreStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IHouseholdGenreStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IHouseholdGenreStreamCursorValueInput {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreType?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
}

/** aggregate sum on columns */
export interface IHouseholdGenreSumFields {
  displayOrder?: Maybe<Scalars["Int"]>;
}

/** order by sum() on columns of table "household.genre" */
export interface IHouseholdGenreSumOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** update columns of table "household.genre" */
export enum IHouseholdGenreUpdateColumn {
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

export interface IHouseholdGenreUpdates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<IHouseholdGenreIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<IHouseholdGenreSetInput>;
  /** filter the rows which have to be updated */
  where: IHouseholdGenreBoolExp;
}

/** aggregate varPop on columns */
export interface IHouseholdGenreVarPopFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by varPop() on columns of table "household.genre" */
export interface IHouseholdGenreVarPopOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** aggregate varSamp on columns */
export interface IHouseholdGenreVarSampFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by varSamp() on columns of table "household.genre" */
export interface IHouseholdGenreVarSampOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** aggregate variance on columns */
export interface IHouseholdGenreVarianceFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by variance() on columns of table "household.genre" */
export interface IHouseholdGenreVarianceOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** columns and relationships of "household.import_file_history" */
export interface IHouseholdImportFileHistory {
  fileName: Scalars["String"];
  fileType: Scalars["String"];
  /** An object relationship */
  group: IGroup;
  groupId: Scalars["String"];
  id: Scalars["String"];
  importDatetime: Scalars["timestamp"];
  importUserId: Scalars["String"];
}

/** aggregated selection of "household.import_file_history" */
export interface IHouseholdImportFileHistoryAggregate {
  aggregate?: Maybe<IHouseholdImportFileHistoryAggregateFields>;
  nodes: Array<IHouseholdImportFileHistory>;
}

export interface IHouseholdImportFileHistoryAggregateBoolExp {
  count?: InputMaybe<IHouseholdImportFileHistoryAggregateBoolExpCount>;
}

/** aggregate fields of "household.import_file_history" */
export interface IHouseholdImportFileHistoryAggregateFields {
  count: Scalars["Int"];
  max?: Maybe<IHouseholdImportFileHistoryMaxFields>;
  min?: Maybe<IHouseholdImportFileHistoryMinFields>;
}

/** aggregate fields of "household.import_file_history" */
export interface IHouseholdImportFileHistoryAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<IHouseholdImportFileHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
}

/** order by aggregate values of table "household.import_file_history" */
export interface IHouseholdImportFileHistoryAggregateOrderBy {
  count?: InputMaybe<IOrderBy>;
  max?: InputMaybe<IHouseholdImportFileHistoryMaxOrderBy>;
  min?: InputMaybe<IHouseholdImportFileHistoryMinOrderBy>;
}

/** Boolean expression to filter rows from the table "household.import_file_history". All fields are combined with a logical 'AND'. */
export interface IHouseholdImportFileHistoryBoolExp {
  _and?: InputMaybe<Array<IHouseholdImportFileHistoryBoolExp>>;
  _not?: InputMaybe<IHouseholdImportFileHistoryBoolExp>;
  _or?: InputMaybe<Array<IHouseholdImportFileHistoryBoolExp>>;
  fileName?: InputMaybe<IStringComparisonExp>;
  fileType?: InputMaybe<IStringComparisonExp>;
  group?: InputMaybe<IGroupBoolExp>;
  groupId?: InputMaybe<IStringComparisonExp>;
  id?: InputMaybe<IStringComparisonExp>;
  importDatetime?: InputMaybe<ITimestampComparisonExp>;
  importUserId?: InputMaybe<IStringComparisonExp>;
}

/** unique or primary key constraints on table "household.import_file_history" */
export enum IHouseholdImportFileHistoryConstraint {
  /** unique or primary key constraint on columns "id" */
  ImportFileHistoryPkey = "import_file_history_pkey",
}

/** input type for inserting data into table "household.import_file_history" */
export interface IHouseholdImportFileHistoryInsertInput {
  fileName?: InputMaybe<Scalars["String"]>;
  fileType?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  importDatetime?: InputMaybe<Scalars["timestamp"]>;
  importUserId?: InputMaybe<Scalars["String"]>;
}

/** aggregate max on columns */
export interface IHouseholdImportFileHistoryMaxFields {
  fileName?: Maybe<Scalars["String"]>;
  fileType?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  importDatetime?: Maybe<Scalars["timestamp"]>;
  importUserId?: Maybe<Scalars["String"]>;
}

/** order by max() on columns of table "household.import_file_history" */
export interface IHouseholdImportFileHistoryMaxOrderBy {
  fileName?: InputMaybe<IOrderBy>;
  fileType?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  importDatetime?: InputMaybe<IOrderBy>;
  importUserId?: InputMaybe<IOrderBy>;
}

/** aggregate min on columns */
export interface IHouseholdImportFileHistoryMinFields {
  fileName?: Maybe<Scalars["String"]>;
  fileType?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  importDatetime?: Maybe<Scalars["timestamp"]>;
  importUserId?: Maybe<Scalars["String"]>;
}

/** order by min() on columns of table "household.import_file_history" */
export interface IHouseholdImportFileHistoryMinOrderBy {
  fileName?: InputMaybe<IOrderBy>;
  fileType?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  importDatetime?: InputMaybe<IOrderBy>;
  importUserId?: InputMaybe<IOrderBy>;
}

/** response of any mutation on the table "household.import_file_history" */
export interface IHouseholdImportFileHistoryMutationResponse {
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<IHouseholdImportFileHistory>;
}

/** on_conflict condition type for table "household.import_file_history" */
export interface IHouseholdImportFileHistoryOnConflict {
  constraint: IHouseholdImportFileHistoryConstraint;
  updateColumns?: Array<IHouseholdImportFileHistoryUpdateColumn>;
  where?: InputMaybe<IHouseholdImportFileHistoryBoolExp>;
}

/** Ordering options when selecting data from "household.import_file_history". */
export interface IHouseholdImportFileHistoryOrderBy {
  fileName?: InputMaybe<IOrderBy>;
  fileType?: InputMaybe<IOrderBy>;
  group?: InputMaybe<IGroupOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  importDatetime?: InputMaybe<IOrderBy>;
  importUserId?: InputMaybe<IOrderBy>;
}

/** select columns of table "household.import_file_history" */
export enum IHouseholdImportFileHistorySelectColumn {
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
export interface IHouseholdImportFileHistoryStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IHouseholdImportFileHistoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IHouseholdImportFileHistoryStreamCursorValueInput {
  fileName?: InputMaybe<Scalars["String"]>;
  fileType?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  importDatetime?: InputMaybe<Scalars["timestamp"]>;
  importUserId?: InputMaybe<Scalars["String"]>;
}

/** placeholder for update columns of table "household.import_file_history" (current role has no relevant permissions) */
export enum IHouseholdImportFileHistoryUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** columns and relationships of "household.summary_category" */
export interface IHouseholdSummaryCategory {
  /** An object relationship */
  category: IHouseholdCategory;
  categoryId: Scalars["String"];
  displayOrder: Scalars["Int"];
  /** An object relationship */
  group: IGroup;
  groupId: Scalars["String"];
  id: Scalars["String"];
}

/** aggregated selection of "household.summary_category" */
export interface IHouseholdSummaryCategoryAggregate {
  aggregate?: Maybe<IHouseholdSummaryCategoryAggregateFields>;
  nodes: Array<IHouseholdSummaryCategory>;
}

export interface IHouseholdSummaryCategoryAggregateBoolExp {
  count?: InputMaybe<IHouseholdSummaryCategoryAggregateBoolExpCount>;
}

/** aggregate fields of "household.summary_category" */
export interface IHouseholdSummaryCategoryAggregateFields {
  avg?: Maybe<IHouseholdSummaryCategoryAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<IHouseholdSummaryCategoryMaxFields>;
  min?: Maybe<IHouseholdSummaryCategoryMinFields>;
  stddev?: Maybe<IHouseholdSummaryCategoryStddevFields>;
  stddevPop?: Maybe<IHouseholdSummaryCategoryStddevPopFields>;
  stddevSamp?: Maybe<IHouseholdSummaryCategoryStddevSampFields>;
  sum?: Maybe<IHouseholdSummaryCategorySumFields>;
  varPop?: Maybe<IHouseholdSummaryCategoryVarPopFields>;
  varSamp?: Maybe<IHouseholdSummaryCategoryVarSampFields>;
  variance?: Maybe<IHouseholdSummaryCategoryVarianceFields>;
}

/** aggregate fields of "household.summary_category" */
export interface IHouseholdSummaryCategoryAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<IHouseholdSummaryCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
}

/** order by aggregate values of table "household.summary_category" */
export interface IHouseholdSummaryCategoryAggregateOrderBy {
  avg?: InputMaybe<IHouseholdSummaryCategoryAvgOrderBy>;
  count?: InputMaybe<IOrderBy>;
  max?: InputMaybe<IHouseholdSummaryCategoryMaxOrderBy>;
  min?: InputMaybe<IHouseholdSummaryCategoryMinOrderBy>;
  stddev?: InputMaybe<IHouseholdSummaryCategoryStddevOrderBy>;
  stddevPop?: InputMaybe<IHouseholdSummaryCategoryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<IHouseholdSummaryCategoryStddevSampOrderBy>;
  sum?: InputMaybe<IHouseholdSummaryCategorySumOrderBy>;
  varPop?: InputMaybe<IHouseholdSummaryCategoryVarPopOrderBy>;
  varSamp?: InputMaybe<IHouseholdSummaryCategoryVarSampOrderBy>;
  variance?: InputMaybe<IHouseholdSummaryCategoryVarianceOrderBy>;
}

/** input type for inserting array relation for remote table "household.summary_category" */
export interface IHouseholdSummaryCategoryArrRelInsertInput {
  data: Array<IHouseholdSummaryCategoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<IHouseholdSummaryCategoryOnConflict>;
}

/** aggregate avg on columns */
export interface IHouseholdSummaryCategoryAvgFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by avg() on columns of table "household.summary_category" */
export interface IHouseholdSummaryCategoryAvgOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** Boolean expression to filter rows from the table "household.summary_category". All fields are combined with a logical 'AND'. */
export interface IHouseholdSummaryCategoryBoolExp {
  _and?: InputMaybe<Array<IHouseholdSummaryCategoryBoolExp>>;
  _not?: InputMaybe<IHouseholdSummaryCategoryBoolExp>;
  _or?: InputMaybe<Array<IHouseholdSummaryCategoryBoolExp>>;
  category?: InputMaybe<IHouseholdCategoryBoolExp>;
  categoryId?: InputMaybe<IStringComparisonExp>;
  displayOrder?: InputMaybe<IIntComparisonExp>;
  group?: InputMaybe<IGroupBoolExp>;
  groupId?: InputMaybe<IStringComparisonExp>;
  id?: InputMaybe<IStringComparisonExp>;
}

/** unique or primary key constraints on table "household.summary_category" */
export enum IHouseholdSummaryCategoryConstraint {
  /** unique or primary key constraint on columns "id" */
  SummaryCategoryByGroupPkey = "summary_category_by_group_pkey",
}

/** input type for inserting data into table "household.summary_category" */
export interface IHouseholdSummaryCategoryInsertInput {
  category?: InputMaybe<IHouseholdCategoryObjRelInsertInput>;
  categoryId?: InputMaybe<Scalars["String"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
}

/** aggregate max on columns */
export interface IHouseholdSummaryCategoryMaxFields {
  categoryId?: Maybe<Scalars["String"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
}

/** order by max() on columns of table "household.summary_category" */
export interface IHouseholdSummaryCategoryMaxOrderBy {
  categoryId?: InputMaybe<IOrderBy>;
  displayOrder?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
}

/** aggregate min on columns */
export interface IHouseholdSummaryCategoryMinFields {
  categoryId?: Maybe<Scalars["String"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
}

/** order by min() on columns of table "household.summary_category" */
export interface IHouseholdSummaryCategoryMinOrderBy {
  categoryId?: InputMaybe<IOrderBy>;
  displayOrder?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
}

/** response of any mutation on the table "household.summary_category" */
export interface IHouseholdSummaryCategoryMutationResponse {
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<IHouseholdSummaryCategory>;
}

/** on_conflict condition type for table "household.summary_category" */
export interface IHouseholdSummaryCategoryOnConflict {
  constraint: IHouseholdSummaryCategoryConstraint;
  updateColumns?: Array<IHouseholdSummaryCategoryUpdateColumn>;
  where?: InputMaybe<IHouseholdSummaryCategoryBoolExp>;
}

/** Ordering options when selecting data from "household.summary_category". */
export interface IHouseholdSummaryCategoryOrderBy {
  category?: InputMaybe<IHouseholdCategoryOrderBy>;
  categoryId?: InputMaybe<IOrderBy>;
  displayOrder?: InputMaybe<IOrderBy>;
  group?: InputMaybe<IGroupOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
}

/** select columns of table "household.summary_category" */
export enum IHouseholdSummaryCategorySelectColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
}

/** aggregate stddev on columns */
export interface IHouseholdSummaryCategoryStddevFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by stddev() on columns of table "household.summary_category" */
export interface IHouseholdSummaryCategoryStddevOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** aggregate stddevPop on columns */
export interface IHouseholdSummaryCategoryStddevPopFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by stddevPop() on columns of table "household.summary_category" */
export interface IHouseholdSummaryCategoryStddevPopOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** aggregate stddevSamp on columns */
export interface IHouseholdSummaryCategoryStddevSampFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by stddevSamp() on columns of table "household.summary_category" */
export interface IHouseholdSummaryCategoryStddevSampOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** Streaming cursor of the table "household_summary_category" */
export interface IHouseholdSummaryCategoryStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IHouseholdSummaryCategoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IHouseholdSummaryCategoryStreamCursorValueInput {
  categoryId?: InputMaybe<Scalars["String"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
}

/** aggregate sum on columns */
export interface IHouseholdSummaryCategorySumFields {
  displayOrder?: Maybe<Scalars["Int"]>;
}

/** order by sum() on columns of table "household.summary_category" */
export interface IHouseholdSummaryCategorySumOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** placeholder for update columns of table "household.summary_category" (current role has no relevant permissions) */
export enum IHouseholdSummaryCategoryUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** aggregate varPop on columns */
export interface IHouseholdSummaryCategoryVarPopFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by varPop() on columns of table "household.summary_category" */
export interface IHouseholdSummaryCategoryVarPopOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** aggregate varSamp on columns */
export interface IHouseholdSummaryCategoryVarSampFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by varSamp() on columns of table "household.summary_category" */
export interface IHouseholdSummaryCategoryVarSampOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** aggregate variance on columns */
export interface IHouseholdSummaryCategoryVarianceFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** order by variance() on columns of table "household.summary_category" */
export interface IHouseholdSummaryCategoryVarianceOrderBy {
  displayOrder?: InputMaybe<IOrderBy>;
}

/** columns and relationships of "household.total_by_category_view" */
export interface IHouseholdTotalByCategoryView {
  categoryId?: Maybe<Scalars["String"]>;
  categoryName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
}

export interface IHouseholdTotalByCategoryViewAggregate {
  aggregate?: Maybe<IHouseholdTotalByCategoryViewAggregateFields>;
  nodes: Array<IHouseholdTotalByCategoryView>;
}

/** aggregate fields of "household.total_by_category_view" */
export interface IHouseholdTotalByCategoryViewAggregateFields {
  avg?: Maybe<IHouseholdTotalByCategoryViewAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<IHouseholdTotalByCategoryViewMaxFields>;
  min?: Maybe<IHouseholdTotalByCategoryViewMinFields>;
  stddev?: Maybe<IHouseholdTotalByCategoryViewStddevFields>;
  stddevPop?: Maybe<IHouseholdTotalByCategoryViewStddevPopFields>;
  stddevSamp?: Maybe<IHouseholdTotalByCategoryViewStddevSampFields>;
  sum?: Maybe<IHouseholdTotalByCategoryViewSumFields>;
  varPop?: Maybe<IHouseholdTotalByCategoryViewVarPopFields>;
  varSamp?: Maybe<IHouseholdTotalByCategoryViewVarSampFields>;
  variance?: Maybe<IHouseholdTotalByCategoryViewVarianceFields>;
}

/** aggregate fields of "household.total_by_category_view" */
export interface IHouseholdTotalByCategoryViewAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<IHouseholdTotalByCategoryViewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
}

/** aggregate avg on columns */
export interface IHouseholdTotalByCategoryViewAvgFields {
  total?: Maybe<Scalars["Float"]>;
}

/** Boolean expression to filter rows from the table "household.total_by_category_view". All fields are combined with a logical 'AND'. */
export interface IHouseholdTotalByCategoryViewBoolExp {
  _and?: InputMaybe<Array<IHouseholdTotalByCategoryViewBoolExp>>;
  _not?: InputMaybe<IHouseholdTotalByCategoryViewBoolExp>;
  _or?: InputMaybe<Array<IHouseholdTotalByCategoryViewBoolExp>>;
  categoryId?: InputMaybe<IStringComparisonExp>;
  categoryName?: InputMaybe<IStringComparisonExp>;
  date?: InputMaybe<IDateComparisonExp>;
  genreId?: InputMaybe<IStringComparisonExp>;
  genreName?: InputMaybe<IStringComparisonExp>;
  groupId?: InputMaybe<IStringComparisonExp>;
  iocomeType?: InputMaybe<IStringComparisonExp>;
  total?: InputMaybe<INumericComparisonExp>;
}

/** aggregate max on columns */
export interface IHouseholdTotalByCategoryViewMaxFields {
  categoryId?: Maybe<Scalars["String"]>;
  categoryName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
}

/** aggregate min on columns */
export interface IHouseholdTotalByCategoryViewMinFields {
  categoryId?: Maybe<Scalars["String"]>;
  categoryName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
}

/** Ordering options when selecting data from "household.total_by_category_view". */
export interface IHouseholdTotalByCategoryViewOrderBy {
  categoryId?: InputMaybe<IOrderBy>;
  categoryName?: InputMaybe<IOrderBy>;
  date?: InputMaybe<IOrderBy>;
  genreId?: InputMaybe<IOrderBy>;
  genreName?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  iocomeType?: InputMaybe<IOrderBy>;
  total?: InputMaybe<IOrderBy>;
}

/** select columns of table "household.total_by_category_view" */
export enum IHouseholdTotalByCategoryViewSelectColumn {
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

/** aggregate stddev on columns */
export interface IHouseholdTotalByCategoryViewStddevFields {
  total?: Maybe<Scalars["Float"]>;
}

/** aggregate stddevPop on columns */
export interface IHouseholdTotalByCategoryViewStddevPopFields {
  total?: Maybe<Scalars["Float"]>;
}

/** aggregate stddevSamp on columns */
export interface IHouseholdTotalByCategoryViewStddevSampFields {
  total?: Maybe<Scalars["Float"]>;
}

/** Streaming cursor of the table "household_total_by_category_view" */
export interface IHouseholdTotalByCategoryViewStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IHouseholdTotalByCategoryViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IHouseholdTotalByCategoryViewStreamCursorValueInput {
  categoryId?: InputMaybe<Scalars["String"]>;
  categoryName?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  genreName?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  total?: InputMaybe<Scalars["numeric"]>;
}

/** aggregate sum on columns */
export interface IHouseholdTotalByCategoryViewSumFields {
  total?: Maybe<Scalars["numeric"]>;
}

/** aggregate varPop on columns */
export interface IHouseholdTotalByCategoryViewVarPopFields {
  total?: Maybe<Scalars["Float"]>;
}

/** aggregate varSamp on columns */
export interface IHouseholdTotalByCategoryViewVarSampFields {
  total?: Maybe<Scalars["Float"]>;
}

/** aggregate variance on columns */
export interface IHouseholdTotalByCategoryViewVarianceFields {
  total?: Maybe<Scalars["Float"]>;
}

/** columns and relationships of "household.total_by_genre_view" */
export interface IHouseholdTotalByGenreView {
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
}

export interface IHouseholdTotalByGenreViewAggregate {
  aggregate?: Maybe<IHouseholdTotalByGenreViewAggregateFields>;
  nodes: Array<IHouseholdTotalByGenreView>;
}

/** aggregate fields of "household.total_by_genre_view" */
export interface IHouseholdTotalByGenreViewAggregateFields {
  avg?: Maybe<IHouseholdTotalByGenreViewAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<IHouseholdTotalByGenreViewMaxFields>;
  min?: Maybe<IHouseholdTotalByGenreViewMinFields>;
  stddev?: Maybe<IHouseholdTotalByGenreViewStddevFields>;
  stddevPop?: Maybe<IHouseholdTotalByGenreViewStddevPopFields>;
  stddevSamp?: Maybe<IHouseholdTotalByGenreViewStddevSampFields>;
  sum?: Maybe<IHouseholdTotalByGenreViewSumFields>;
  varPop?: Maybe<IHouseholdTotalByGenreViewVarPopFields>;
  varSamp?: Maybe<IHouseholdTotalByGenreViewVarSampFields>;
  variance?: Maybe<IHouseholdTotalByGenreViewVarianceFields>;
}

/** aggregate fields of "household.total_by_genre_view" */
export interface IHouseholdTotalByGenreViewAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<IHouseholdTotalByGenreViewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
}

/** aggregate avg on columns */
export interface IHouseholdTotalByGenreViewAvgFields {
  total?: Maybe<Scalars["Float"]>;
}

/** Boolean expression to filter rows from the table "household.total_by_genre_view". All fields are combined with a logical 'AND'. */
export interface IHouseholdTotalByGenreViewBoolExp {
  _and?: InputMaybe<Array<IHouseholdTotalByGenreViewBoolExp>>;
  _not?: InputMaybe<IHouseholdTotalByGenreViewBoolExp>;
  _or?: InputMaybe<Array<IHouseholdTotalByGenreViewBoolExp>>;
  date?: InputMaybe<IDateComparisonExp>;
  genreId?: InputMaybe<IStringComparisonExp>;
  genreName?: InputMaybe<IStringComparisonExp>;
  groupId?: InputMaybe<IStringComparisonExp>;
  iocomeType?: InputMaybe<IStringComparisonExp>;
  total?: InputMaybe<INumericComparisonExp>;
}

/** aggregate max on columns */
export interface IHouseholdTotalByGenreViewMaxFields {
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
}

/** aggregate min on columns */
export interface IHouseholdTotalByGenreViewMinFields {
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
}

/** Ordering options when selecting data from "household.total_by_genre_view". */
export interface IHouseholdTotalByGenreViewOrderBy {
  date?: InputMaybe<IOrderBy>;
  genreId?: InputMaybe<IOrderBy>;
  genreName?: InputMaybe<IOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  iocomeType?: InputMaybe<IOrderBy>;
  total?: InputMaybe<IOrderBy>;
}

/** select columns of table "household.total_by_genre_view" */
export enum IHouseholdTotalByGenreViewSelectColumn {
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

/** aggregate stddev on columns */
export interface IHouseholdTotalByGenreViewStddevFields {
  total?: Maybe<Scalars["Float"]>;
}

/** aggregate stddevPop on columns */
export interface IHouseholdTotalByGenreViewStddevPopFields {
  total?: Maybe<Scalars["Float"]>;
}

/** aggregate stddevSamp on columns */
export interface IHouseholdTotalByGenreViewStddevSampFields {
  total?: Maybe<Scalars["Float"]>;
}

/** Streaming cursor of the table "household_total_by_genre_view" */
export interface IHouseholdTotalByGenreViewStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IHouseholdTotalByGenreViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IHouseholdTotalByGenreViewStreamCursorValueInput {
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  genreName?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  total?: InputMaybe<Scalars["numeric"]>;
}

/** aggregate sum on columns */
export interface IHouseholdTotalByGenreViewSumFields {
  total?: Maybe<Scalars["numeric"]>;
}

/** aggregate varPop on columns */
export interface IHouseholdTotalByGenreViewVarPopFields {
  total?: Maybe<Scalars["Float"]>;
}

/** aggregate varSamp on columns */
export interface IHouseholdTotalByGenreViewVarSampFields {
  total?: Maybe<Scalars["Float"]>;
}

/** aggregate variance on columns */
export interface IHouseholdTotalByGenreViewVarianceFields {
  total?: Maybe<Scalars["Float"]>;
}

/** columns and relationships of "household.transfer_category" */
export interface IHouseholdTransferCategory {
  /** An object relationship */
  categoryByIncomeCategoryId: IHouseholdCategory;
  /** An object relationship */
  categoryByOutcomeCategoryId: IHouseholdCategory;
  /** An object relationship */
  group: IGroup;
  groupId: Scalars["String"];
  incomeCategoryId: Scalars["String"];
  outcomeCategoryId: Scalars["String"];
}

/** aggregated selection of "household.transfer_category" */
export interface IHouseholdTransferCategoryAggregate {
  aggregate?: Maybe<IHouseholdTransferCategoryAggregateFields>;
  nodes: Array<IHouseholdTransferCategory>;
}

export interface IHouseholdTransferCategoryAggregateBoolExp {
  count?: InputMaybe<IHouseholdTransferCategoryAggregateBoolExpCount>;
}

/** aggregate fields of "household.transfer_category" */
export interface IHouseholdTransferCategoryAggregateFields {
  count: Scalars["Int"];
  max?: Maybe<IHouseholdTransferCategoryMaxFields>;
  min?: Maybe<IHouseholdTransferCategoryMinFields>;
}

/** aggregate fields of "household.transfer_category" */
export interface IHouseholdTransferCategoryAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<IHouseholdTransferCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
}

/** order by aggregate values of table "household.transfer_category" */
export interface IHouseholdTransferCategoryAggregateOrderBy {
  count?: InputMaybe<IOrderBy>;
  max?: InputMaybe<IHouseholdTransferCategoryMaxOrderBy>;
  min?: InputMaybe<IHouseholdTransferCategoryMinOrderBy>;
}

/** Boolean expression to filter rows from the table "household.transfer_category". All fields are combined with a logical 'AND'. */
export interface IHouseholdTransferCategoryBoolExp {
  _and?: InputMaybe<Array<IHouseholdTransferCategoryBoolExp>>;
  _not?: InputMaybe<IHouseholdTransferCategoryBoolExp>;
  _or?: InputMaybe<Array<IHouseholdTransferCategoryBoolExp>>;
  categoryByIncomeCategoryId?: InputMaybe<IHouseholdCategoryBoolExp>;
  categoryByOutcomeCategoryId?: InputMaybe<IHouseholdCategoryBoolExp>;
  group?: InputMaybe<IGroupBoolExp>;
  groupId?: InputMaybe<IStringComparisonExp>;
  incomeCategoryId?: InputMaybe<IStringComparisonExp>;
  outcomeCategoryId?: InputMaybe<IStringComparisonExp>;
}

/** aggregate max on columns */
export interface IHouseholdTransferCategoryMaxFields {
  groupId?: Maybe<Scalars["String"]>;
  incomeCategoryId?: Maybe<Scalars["String"]>;
  outcomeCategoryId?: Maybe<Scalars["String"]>;
}

/** order by max() on columns of table "household.transfer_category" */
export interface IHouseholdTransferCategoryMaxOrderBy {
  groupId?: InputMaybe<IOrderBy>;
  incomeCategoryId?: InputMaybe<IOrderBy>;
  outcomeCategoryId?: InputMaybe<IOrderBy>;
}

/** aggregate min on columns */
export interface IHouseholdTransferCategoryMinFields {
  groupId?: Maybe<Scalars["String"]>;
  incomeCategoryId?: Maybe<Scalars["String"]>;
  outcomeCategoryId?: Maybe<Scalars["String"]>;
}

/** order by min() on columns of table "household.transfer_category" */
export interface IHouseholdTransferCategoryMinOrderBy {
  groupId?: InputMaybe<IOrderBy>;
  incomeCategoryId?: InputMaybe<IOrderBy>;
  outcomeCategoryId?: InputMaybe<IOrderBy>;
}

/** Ordering options when selecting data from "household.transfer_category". */
export interface IHouseholdTransferCategoryOrderBy {
  categoryByIncomeCategoryId?: InputMaybe<IHouseholdCategoryOrderBy>;
  categoryByOutcomeCategoryId?: InputMaybe<IHouseholdCategoryOrderBy>;
  group?: InputMaybe<IGroupOrderBy>;
  groupId?: InputMaybe<IOrderBy>;
  incomeCategoryId?: InputMaybe<IOrderBy>;
  outcomeCategoryId?: InputMaybe<IOrderBy>;
}

/** select columns of table "household.transfer_category" */
export enum IHouseholdTransferCategorySelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  IncomeCategoryId = "incomeCategoryId",
  /** column name */
  OutcomeCategoryId = "outcomeCategoryId",
}

/** Streaming cursor of the table "household_transfer_category" */
export interface IHouseholdTransferCategoryStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IHouseholdTransferCategoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IHouseholdTransferCategoryStreamCursorValueInput {
  groupId?: InputMaybe<Scalars["String"]>;
  incomeCategoryId?: InputMaybe<Scalars["String"]>;
  outcomeCategoryId?: InputMaybe<Scalars["String"]>;
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface IIntComparisonExp {
  _eq?: InputMaybe<Scalars["Int"]>;
  _gt?: InputMaybe<Scalars["Int"]>;
  _gte?: InputMaybe<Scalars["Int"]>;
  _in?: InputMaybe<Array<Scalars["Int"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Int"]>;
  _lte?: InputMaybe<Scalars["Int"]>;
  _neq?: InputMaybe<Scalars["Int"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]>>;
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface INumericComparisonExp {
  _eq?: InputMaybe<Scalars["numeric"]>;
  _gt?: InputMaybe<Scalars["numeric"]>;
  _gte?: InputMaybe<Scalars["numeric"]>;
  _in?: InputMaybe<Array<Scalars["numeric"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["numeric"]>;
  _lte?: InputMaybe<Scalars["numeric"]>;
  _neq?: InputMaybe<Scalars["numeric"]>;
  _nin?: InputMaybe<Array<Scalars["numeric"]>>;
}

/** column ordering options */
export enum IOrderBy {
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
export interface IStringComparisonExp {
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
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export interface ITimestampComparisonExp {
  _eq?: InputMaybe<Scalars["timestamp"]>;
  _gt?: InputMaybe<Scalars["timestamp"]>;
  _gte?: InputMaybe<Scalars["timestamp"]>;
  _in?: InputMaybe<Array<Scalars["timestamp"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamp"]>;
  _lte?: InputMaybe<Scalars["timestamp"]>;
  _neq?: InputMaybe<Scalars["timestamp"]>;
  _nin?: InputMaybe<Array<Scalars["timestamp"]>>;
}

/** columns and relationships of "user" */
export interface IUser {
  /** An array relationship */
  affiliations: Array<IAffiliation>;
  /** An aggregate relationship */
  affiliationsAggregate: IAffiliationAggregate;
  /** An array relationship */
  creditCardDetails: Array<IHouseholdCreditCardDetail>;
  /** An aggregate relationship */
  creditCardDetailsAggregate: IHouseholdCreditCardDetailAggregate;
  /** An array relationship */
  dailyDetails: Array<IHouseholdDailyDetail>;
  /** An aggregate relationship */
  dailyDetailsAggregate: IHouseholdDailyDetailAggregate;
  displayOrder?: Maybe<Scalars["Int"]>;
  email: Scalars["String"];
  id: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
}

/** columns and relationships of "user" */
export interface IUserAffiliationsArgs {
  distinctOn?: InputMaybe<Array<IAffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IAffiliationOrderBy>>;
  where?: InputMaybe<IAffiliationBoolExp>;
}

/** columns and relationships of "user" */
export interface IUserAffiliationsAggregateArgs {
  distinctOn?: InputMaybe<Array<IAffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IAffiliationOrderBy>>;
  where?: InputMaybe<IAffiliationBoolExp>;
}

/** columns and relationships of "user" */
export interface IUserCreditCardDetailsArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
}

/** columns and relationships of "user" */
export interface IUserCreditCardDetailsAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
}

/** columns and relationships of "user" */
export interface IUserDailyDetailsArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

/** columns and relationships of "user" */
export interface IUserDailyDetailsAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

/** aggregated selection of "user" */
export interface IUserAggregate {
  aggregate?: Maybe<IUserAggregateFields>;
  nodes: Array<IUser>;
}

/** aggregate fields of "user" */
export interface IUserAggregateFields {
  avg?: Maybe<IUserAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<IUserMaxFields>;
  min?: Maybe<IUserMinFields>;
  stddev?: Maybe<IUserStddevFields>;
  stddevPop?: Maybe<IUserStddevPopFields>;
  stddevSamp?: Maybe<IUserStddevSampFields>;
  sum?: Maybe<IUserSumFields>;
  varPop?: Maybe<IUserVarPopFields>;
  varSamp?: Maybe<IUserVarSampFields>;
  variance?: Maybe<IUserVarianceFields>;
}

/** aggregate fields of "user" */
export interface IUserAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<IUserSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
}

/** aggregate avg on columns */
export interface IUserAvgFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export interface IUserBoolExp {
  _and?: InputMaybe<Array<IUserBoolExp>>;
  _not?: InputMaybe<IUserBoolExp>;
  _or?: InputMaybe<Array<IUserBoolExp>>;
  affiliations?: InputMaybe<IAffiliationBoolExp>;
  affiliationsAggregate?: InputMaybe<IAffiliationAggregateBoolExp>;
  creditCardDetails?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
  creditCardDetailsAggregate?: InputMaybe<IHouseholdCreditCardDetailAggregateBoolExp>;
  dailyDetails?: InputMaybe<IHouseholdDailyDetailBoolExp>;
  dailyDetailsAggregate?: InputMaybe<IHouseholdDailyDetailAggregateBoolExp>;
  displayOrder?: InputMaybe<IIntComparisonExp>;
  email?: InputMaybe<IStringComparisonExp>;
  id?: InputMaybe<IStringComparisonExp>;
  name?: InputMaybe<IStringComparisonExp>;
}

/** unique or primary key constraints on table "user" */
export enum IUserConstraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = "user_email_key",
  /** unique or primary key constraint on columns "id" */
  UserPkey = "user_pkey",
}

/** input type for inserting data into table "user" */
export interface IUserInsertInput {
  affiliations?: InputMaybe<IAffiliationArrRelInsertInput>;
  creditCardDetails?: InputMaybe<IHouseholdCreditCardDetailArrRelInsertInput>;
  dailyDetails?: InputMaybe<IHouseholdDailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
}

/** aggregate max on columns */
export interface IUserMaxFields {
  displayOrder?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
}

/** aggregate min on columns */
export interface IUserMinFields {
  displayOrder?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
}

/** response of any mutation on the table "user" */
export interface IUserMutationResponse {
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<IUser>;
}

/** input type for inserting object relation for remote table "user" */
export interface IUserObjRelInsertInput {
  data: IUserInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<IUserOnConflict>;
}

/** on_conflict condition type for table "user" */
export interface IUserOnConflict {
  constraint: IUserConstraint;
  updateColumns?: Array<IUserUpdateColumn>;
  where?: InputMaybe<IUserBoolExp>;
}

/** Ordering options when selecting data from "user". */
export interface IUserOrderBy {
  affiliationsAggregate?: InputMaybe<IAffiliationAggregateOrderBy>;
  creditCardDetailsAggregate?: InputMaybe<IHouseholdCreditCardDetailAggregateOrderBy>;
  dailyDetailsAggregate?: InputMaybe<IHouseholdDailyDetailAggregateOrderBy>;
  displayOrder?: InputMaybe<IOrderBy>;
  email?: InputMaybe<IOrderBy>;
  id?: InputMaybe<IOrderBy>;
  name?: InputMaybe<IOrderBy>;
}

/** select columns of table "user" */
export enum IUserSelectColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** aggregate stddev on columns */
export interface IUserStddevFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** aggregate stddevPop on columns */
export interface IUserStddevPopFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** aggregate stddevSamp on columns */
export interface IUserStddevSampFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** Streaming cursor of the table "user" */
export interface IUserStreamCursorInput {
  /** Stream column input with initial value */
  initialValue: IUserStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<ICursorOrdering>;
}

/** Initial value of the column from where the streaming should start */
export interface IUserStreamCursorValueInput {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
}

/** aggregate sum on columns */
export interface IUserSumFields {
  displayOrder?: Maybe<Scalars["Int"]>;
}

/** placeholder for update columns of table "user" (current role has no relevant permissions) */
export enum IUserUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** aggregate varPop on columns */
export interface IUserVarPopFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** aggregate varSamp on columns */
export interface IUserVarSampFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

/** aggregate variance on columns */
export interface IUserVarianceFields {
  displayOrder?: Maybe<Scalars["Float"]>;
}

export interface IAffiliationAggregateBoolExpCount {
  arguments?: InputMaybe<Array<IAffiliationSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<IAffiliationBoolExp>;
  predicate: IIntComparisonExp;
}

export interface ICategoryTotalByMonthArgs {
  from_date?: InputMaybe<Scalars["date"]>;
  group_id?: InputMaybe<Scalars["String"]>;
  to_date?: InputMaybe<Scalars["date"]>;
}

export interface IDailyDetailByDateArgs {
  from_date?: InputMaybe<Scalars["date"]>;
  group_id?: InputMaybe<Scalars["String"]>;
  to_date?: InputMaybe<Scalars["date"]>;
}

export interface IGenreTotalByMonthArgs {
  from_date?: InputMaybe<Scalars["date"]>;
  group_id?: InputMaybe<Scalars["String"]>;
  to_date?: InputMaybe<Scalars["date"]>;
}

export interface IGroupApplicationAggregateBoolExpCount {
  arguments?: InputMaybe<Array<IGroupApplicationSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<IGroupApplicationBoolExp>;
  predicate: IIntComparisonExp;
}

export interface IHouseholdAccountAggregateBoolExpBool_And {
  arguments: IHouseholdAccountSelectColumnHouseholdAccountAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<IHouseholdAccountBoolExp>;
  predicate: IBooleanComparisonExp;
}

export interface IHouseholdAccountAggregateBoolExpBool_Or {
  arguments: IHouseholdAccountSelectColumnHouseholdAccountAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<IHouseholdAccountBoolExp>;
  predicate: IBooleanComparisonExp;
}

export interface IHouseholdAccountAggregateBoolExpCount {
  arguments?: InputMaybe<Array<IHouseholdAccountSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<IHouseholdAccountBoolExp>;
  predicate: IIntComparisonExp;
}

export interface IHouseholdAllDetailViewAggregateBoolExpCount {
  arguments?: InputMaybe<Array<IHouseholdAllDetailViewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<IHouseholdAllDetailViewBoolExp>;
  predicate: IIntComparisonExp;
}

export interface IHouseholdCreditCardDetailAggregateBoolExpCount {
  arguments?: InputMaybe<Array<IHouseholdCreditCardDetailSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
  predicate: IIntComparisonExp;
}

export interface IHouseholdCreditCardSummaryAggregateBoolExpCount {
  arguments?: InputMaybe<Array<IHouseholdCreditCardSummarySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<IHouseholdCreditCardSummaryBoolExp>;
  predicate: IIntComparisonExp;
}

export interface IHouseholdDailyDetailAggregateBoolExpCount {
  arguments?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<IHouseholdDailyDetailBoolExp>;
  predicate: IIntComparisonExp;
}

export interface IHouseholdDepositCategoryAggregateBoolExpCount {
  arguments?: InputMaybe<Array<IHouseholdDepositCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<IHouseholdDepositCategoryBoolExp>;
  predicate: IIntComparisonExp;
}

export interface IHouseholdGenreAggregateBoolExpBool_And {
  arguments: IHouseholdGenreSelectColumnHouseholdGenreAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<IHouseholdGenreBoolExp>;
  predicate: IBooleanComparisonExp;
}

export interface IHouseholdGenreAggregateBoolExpBool_Or {
  arguments: IHouseholdGenreSelectColumnHouseholdGenreAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<IHouseholdGenreBoolExp>;
  predicate: IBooleanComparisonExp;
}

export interface IHouseholdGenreAggregateBoolExpCount {
  arguments?: InputMaybe<Array<IHouseholdGenreSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<IHouseholdGenreBoolExp>;
  predicate: IIntComparisonExp;
}

export interface IHouseholdImportFileHistoryAggregateBoolExpCount {
  arguments?: InputMaybe<Array<IHouseholdImportFileHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<IHouseholdImportFileHistoryBoolExp>;
  predicate: IIntComparisonExp;
}

export interface IHouseholdSummaryCategoryAggregateBoolExpCount {
  arguments?: InputMaybe<Array<IHouseholdSummaryCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<IHouseholdSummaryCategoryBoolExp>;
  predicate: IIntComparisonExp;
}

export interface IHouseholdTransferCategoryAggregateBoolExpCount {
  arguments?: InputMaybe<Array<IHouseholdTransferCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<IHouseholdTransferCategoryBoolExp>;
  predicate: IIntComparisonExp;
}

/** mutation root */
export interface IMutation_Root {
  /** delete data from the table: "household.daily_detail" */
  deleteHouseholdDailyDetail?: Maybe<IHouseholdDailyDetailMutationResponse>;
  /** delete single row from the table: "household.daily_detail" */
  deleteHouseholdDailyDetailByPk?: Maybe<IHouseholdDailyDetail>;
  /** delete data from the table: "household.summary_category" */
  deleteHouseholdSummaryCategory?: Maybe<IHouseholdSummaryCategoryMutationResponse>;
  /** delete single row from the table: "household.summary_category" */
  deleteHouseholdSummaryCategoryByPk?: Maybe<IHouseholdSummaryCategory>;
  /** insert data into the table: "affiliation" */
  insertAffiliation?: Maybe<IAffiliationMutationResponse>;
  /** insert a single row into the table: "affiliation" */
  insertAffiliationOne?: Maybe<IAffiliation>;
  /** insert data into the table: "household.account" */
  insertHouseholdAccount?: Maybe<IHouseholdAccountMutationResponse>;
  /** insert a single row into the table: "household.account" */
  insertHouseholdAccountOne?: Maybe<IHouseholdAccount>;
  /** insert data into the table: "household.category" */
  insertHouseholdCategory?: Maybe<IHouseholdCategoryMutationResponse>;
  /** insert a single row into the table: "household.category" */
  insertHouseholdCategoryOne?: Maybe<IHouseholdCategory>;
  /** insert data into the table: "household.credit_card_detail" */
  insertHouseholdCreditCardDetail?: Maybe<IHouseholdCreditCardDetailMutationResponse>;
  /** insert a single row into the table: "household.credit_card_detail" */
  insertHouseholdCreditCardDetailOne?: Maybe<IHouseholdCreditCardDetail>;
  /** insert data into the table: "household.credit_card_summary" */
  insertHouseholdCreditCardSummary?: Maybe<IHouseholdCreditCardSummaryMutationResponse>;
  /** insert a single row into the table: "household.credit_card_summary" */
  insertHouseholdCreditCardSummaryOne?: Maybe<IHouseholdCreditCardSummary>;
  /** insert data into the table: "household.daily_detail" */
  insertHouseholdDailyDetail?: Maybe<IHouseholdDailyDetailMutationResponse>;
  /** insert a single row into the table: "household.daily_detail" */
  insertHouseholdDailyDetailOne?: Maybe<IHouseholdDailyDetail>;
  /** insert data into the table: "household.genre" */
  insertHouseholdGenre?: Maybe<IHouseholdGenreMutationResponse>;
  /** insert a single row into the table: "household.genre" */
  insertHouseholdGenreOne?: Maybe<IHouseholdGenre>;
  /** insert data into the table: "household.import_file_history" */
  insertHouseholdImportFileHistory?: Maybe<IHouseholdImportFileHistoryMutationResponse>;
  /** insert a single row into the table: "household.import_file_history" */
  insertHouseholdImportFileHistoryOne?: Maybe<IHouseholdImportFileHistory>;
  /** insert data into the table: "household.summary_category" */
  insertHouseholdSummaryCategory?: Maybe<IHouseholdSummaryCategoryMutationResponse>;
  /** insert a single row into the table: "household.summary_category" */
  insertHouseholdSummaryCategoryOne?: Maybe<IHouseholdSummaryCategory>;
  /** insert data into the table: "user" */
  insertUser?: Maybe<IUserMutationResponse>;
  /** insert a single row into the table: "user" */
  insertUserOne?: Maybe<IUser>;
  /** update data of the table: "household.category" */
  updateHouseholdCategory?: Maybe<IHouseholdCategoryMutationResponse>;
  /** update single row of the table: "household.category" */
  updateHouseholdCategoryByPk?: Maybe<IHouseholdCategory>;
  /** update multiples rows of table: "household.category" */
  updateHouseholdCategoryMany?: Maybe<
    Array<Maybe<IHouseholdCategoryMutationResponse>>
  >;
  /** update data of the table: "household.credit_card_detail" */
  updateHouseholdCreditCardDetail?: Maybe<IHouseholdCreditCardDetailMutationResponse>;
  /** update single row of the table: "household.credit_card_detail" */
  updateHouseholdCreditCardDetailByPk?: Maybe<IHouseholdCreditCardDetail>;
  /** update multiples rows of table: "household.credit_card_detail" */
  updateHouseholdCreditCardDetailMany?: Maybe<
    Array<Maybe<IHouseholdCreditCardDetailMutationResponse>>
  >;
  /** update data of the table: "household.credit_card_summary" */
  updateHouseholdCreditCardSummary?: Maybe<IHouseholdCreditCardSummaryMutationResponse>;
  /** update single row of the table: "household.credit_card_summary" */
  updateHouseholdCreditCardSummaryByPk?: Maybe<IHouseholdCreditCardSummary>;
  /** update multiples rows of table: "household.credit_card_summary" */
  updateHouseholdCreditCardSummaryMany?: Maybe<
    Array<Maybe<IHouseholdCreditCardSummaryMutationResponse>>
  >;
  /** update data of the table: "household.daily_detail" */
  updateHouseholdDailyDetail?: Maybe<IHouseholdDailyDetailMutationResponse>;
  /** update single row of the table: "household.daily_detail" */
  updateHouseholdDailyDetailByPk?: Maybe<IHouseholdDailyDetail>;
  /** update multiples rows of table: "household.daily_detail" */
  updateHouseholdDailyDetailMany?: Maybe<
    Array<Maybe<IHouseholdDailyDetailMutationResponse>>
  >;
  /** update data of the table: "household.genre" */
  updateHouseholdGenre?: Maybe<IHouseholdGenreMutationResponse>;
  /** update single row of the table: "household.genre" */
  updateHouseholdGenreByPk?: Maybe<IHouseholdGenre>;
  /** update multiples rows of table: "household.genre" */
  updateHouseholdGenreMany?: Maybe<
    Array<Maybe<IHouseholdGenreMutationResponse>>
  >;
}

/** mutation root */
export interface IMutation_RootDeleteHouseholdDailyDetailArgs {
  where: IHouseholdDailyDetailBoolExp;
}

/** mutation root */
export interface IMutation_RootDeleteHouseholdDailyDetailByPkArgs {
  id: Scalars["String"];
}

/** mutation root */
export interface IMutation_RootDeleteHouseholdSummaryCategoryArgs {
  where: IHouseholdSummaryCategoryBoolExp;
}

/** mutation root */
export interface IMutation_RootDeleteHouseholdSummaryCategoryByPkArgs {
  id: Scalars["String"];
}

/** mutation root */
export interface IMutation_RootInsertAffiliationArgs {
  objects: Array<IAffiliationInsertInput>;
  onConflict?: InputMaybe<IAffiliationOnConflict>;
}

/** mutation root */
export interface IMutation_RootInsertAffiliationOneArgs {
  object: IAffiliationInsertInput;
  onConflict?: InputMaybe<IAffiliationOnConflict>;
}

/** mutation root */
export interface IMutation_RootInsertHouseholdAccountArgs {
  objects: Array<IHouseholdAccountInsertInput>;
  onConflict?: InputMaybe<IHouseholdAccountOnConflict>;
}

/** mutation root */
export interface IMutation_RootInsertHouseholdAccountOneArgs {
  object: IHouseholdAccountInsertInput;
  onConflict?: InputMaybe<IHouseholdAccountOnConflict>;
}

/** mutation root */
export interface IMutation_RootInsertHouseholdCategoryArgs {
  objects: Array<IHouseholdCategoryInsertInput>;
  onConflict?: InputMaybe<IHouseholdCategoryOnConflict>;
}

/** mutation root */
export interface IMutation_RootInsertHouseholdCategoryOneArgs {
  object: IHouseholdCategoryInsertInput;
  onConflict?: InputMaybe<IHouseholdCategoryOnConflict>;
}

/** mutation root */
export interface IMutation_RootInsertHouseholdCreditCardDetailArgs {
  objects: Array<IHouseholdCreditCardDetailInsertInput>;
  onConflict?: InputMaybe<IHouseholdCreditCardDetailOnConflict>;
}

/** mutation root */
export interface IMutation_RootInsertHouseholdCreditCardDetailOneArgs {
  object: IHouseholdCreditCardDetailInsertInput;
  onConflict?: InputMaybe<IHouseholdCreditCardDetailOnConflict>;
}

/** mutation root */
export interface IMutation_RootInsertHouseholdCreditCardSummaryArgs {
  objects: Array<IHouseholdCreditCardSummaryInsertInput>;
  onConflict?: InputMaybe<IHouseholdCreditCardSummaryOnConflict>;
}

/** mutation root */
export interface IMutation_RootInsertHouseholdCreditCardSummaryOneArgs {
  object: IHouseholdCreditCardSummaryInsertInput;
  onConflict?: InputMaybe<IHouseholdCreditCardSummaryOnConflict>;
}

/** mutation root */
export interface IMutation_RootInsertHouseholdDailyDetailArgs {
  objects: Array<IHouseholdDailyDetailInsertInput>;
  onConflict?: InputMaybe<IHouseholdDailyDetailOnConflict>;
}

/** mutation root */
export interface IMutation_RootInsertHouseholdDailyDetailOneArgs {
  object: IHouseholdDailyDetailInsertInput;
  onConflict?: InputMaybe<IHouseholdDailyDetailOnConflict>;
}

/** mutation root */
export interface IMutation_RootInsertHouseholdGenreArgs {
  objects: Array<IHouseholdGenreInsertInput>;
  onConflict?: InputMaybe<IHouseholdGenreOnConflict>;
}

/** mutation root */
export interface IMutation_RootInsertHouseholdGenreOneArgs {
  object: IHouseholdGenreInsertInput;
  onConflict?: InputMaybe<IHouseholdGenreOnConflict>;
}

/** mutation root */
export interface IMutation_RootInsertHouseholdImportFileHistoryArgs {
  objects: Array<IHouseholdImportFileHistoryInsertInput>;
  onConflict?: InputMaybe<IHouseholdImportFileHistoryOnConflict>;
}

/** mutation root */
export interface IMutation_RootInsertHouseholdImportFileHistoryOneArgs {
  object: IHouseholdImportFileHistoryInsertInput;
  onConflict?: InputMaybe<IHouseholdImportFileHistoryOnConflict>;
}

/** mutation root */
export interface IMutation_RootInsertHouseholdSummaryCategoryArgs {
  objects: Array<IHouseholdSummaryCategoryInsertInput>;
  onConflict?: InputMaybe<IHouseholdSummaryCategoryOnConflict>;
}

/** mutation root */
export interface IMutation_RootInsertHouseholdSummaryCategoryOneArgs {
  object: IHouseholdSummaryCategoryInsertInput;
  onConflict?: InputMaybe<IHouseholdSummaryCategoryOnConflict>;
}

/** mutation root */
export interface IMutation_RootInsertUserArgs {
  objects: Array<IUserInsertInput>;
  onConflict?: InputMaybe<IUserOnConflict>;
}

/** mutation root */
export interface IMutation_RootInsertUserOneArgs {
  object: IUserInsertInput;
  onConflict?: InputMaybe<IUserOnConflict>;
}

/** mutation root */
export interface IMutation_RootUpdateHouseholdCategoryArgs {
  _inc?: InputMaybe<IHouseholdCategoryIncInput>;
  _set?: InputMaybe<IHouseholdCategorySetInput>;
  where: IHouseholdCategoryBoolExp;
}

/** mutation root */
export interface IMutation_RootUpdateHouseholdCategoryByPkArgs {
  _inc?: InputMaybe<IHouseholdCategoryIncInput>;
  _set?: InputMaybe<IHouseholdCategorySetInput>;
  pkColumns: IHouseholdCategoryPkColumnsInput;
}

/** mutation root */
export interface IMutation_RootUpdateHouseholdCategoryManyArgs {
  updates: Array<IHouseholdCategoryUpdates>;
}

/** mutation root */
export interface IMutation_RootUpdateHouseholdCreditCardDetailArgs {
  _inc?: InputMaybe<IHouseholdCreditCardDetailIncInput>;
  _set?: InputMaybe<IHouseholdCreditCardDetailSetInput>;
  where: IHouseholdCreditCardDetailBoolExp;
}

/** mutation root */
export interface IMutation_RootUpdateHouseholdCreditCardDetailByPkArgs {
  _inc?: InputMaybe<IHouseholdCreditCardDetailIncInput>;
  _set?: InputMaybe<IHouseholdCreditCardDetailSetInput>;
  pkColumns: IHouseholdCreditCardDetailPkColumnsInput;
}

/** mutation root */
export interface IMutation_RootUpdateHouseholdCreditCardDetailManyArgs {
  updates: Array<IHouseholdCreditCardDetailUpdates>;
}

/** mutation root */
export interface IMutation_RootUpdateHouseholdCreditCardSummaryArgs {
  _inc?: InputMaybe<IHouseholdCreditCardSummaryIncInput>;
  _set?: InputMaybe<IHouseholdCreditCardSummarySetInput>;
  where: IHouseholdCreditCardSummaryBoolExp;
}

/** mutation root */
export interface IMutation_RootUpdateHouseholdCreditCardSummaryByPkArgs {
  _inc?: InputMaybe<IHouseholdCreditCardSummaryIncInput>;
  _set?: InputMaybe<IHouseholdCreditCardSummarySetInput>;
  pkColumns: IHouseholdCreditCardSummaryPkColumnsInput;
}

/** mutation root */
export interface IMutation_RootUpdateHouseholdCreditCardSummaryManyArgs {
  updates: Array<IHouseholdCreditCardSummaryUpdates>;
}

/** mutation root */
export interface IMutation_RootUpdateHouseholdDailyDetailArgs {
  _inc?: InputMaybe<IHouseholdDailyDetailIncInput>;
  _set?: InputMaybe<IHouseholdDailyDetailSetInput>;
  where: IHouseholdDailyDetailBoolExp;
}

/** mutation root */
export interface IMutation_RootUpdateHouseholdDailyDetailByPkArgs {
  _inc?: InputMaybe<IHouseholdDailyDetailIncInput>;
  _set?: InputMaybe<IHouseholdDailyDetailSetInput>;
  pkColumns: IHouseholdDailyDetailPkColumnsInput;
}

/** mutation root */
export interface IMutation_RootUpdateHouseholdDailyDetailManyArgs {
  updates: Array<IHouseholdDailyDetailUpdates>;
}

/** mutation root */
export interface IMutation_RootUpdateHouseholdGenreArgs {
  _inc?: InputMaybe<IHouseholdGenreIncInput>;
  _set?: InputMaybe<IHouseholdGenreSetInput>;
  where: IHouseholdGenreBoolExp;
}

/** mutation root */
export interface IMutation_RootUpdateHouseholdGenreByPkArgs {
  _inc?: InputMaybe<IHouseholdGenreIncInput>;
  _set?: InputMaybe<IHouseholdGenreSetInput>;
  pkColumns: IHouseholdGenrePkColumnsInput;
}

/** mutation root */
export interface IMutation_RootUpdateHouseholdGenreManyArgs {
  updates: Array<IHouseholdGenreUpdates>;
}

export interface IQuery_Root {
  /** fetch data from the table: "affiliation" */
  affiliation: Array<IAffiliation>;
  /** fetch aggregated fields from the table: "affiliation" */
  affiliationAggregate: IAffiliationAggregate;
  /** fetch data from the table: "affiliation" using primary key columns */
  affiliationByPk?: Maybe<IAffiliation>;
  /** fetch data from the table: "application" */
  application: Array<IApplication>;
  /** fetch aggregated fields from the table: "application" */
  applicationAggregate: IApplicationAggregate;
  /** fetch data from the table: "application" using primary key columns */
  applicationByPk?: Maybe<IApplication>;
  /** execute function "category_total_by_month" which returns "household.total_by_category_view" */
  categoryTotalByMonth: Array<IHouseholdTotalByCategoryView>;
  /** execute function "category_total_by_month" and query aggregates on result of table type "household.total_by_category_view" */
  categoryTotalByMonthAggregate: IHouseholdTotalByCategoryViewAggregate;
  /** execute function "daily_detail_by_date" which returns "household.daily_detail" */
  dailyDetailByDate: Array<IHouseholdDailyDetail>;
  /** execute function "daily_detail_by_date" and query aggregates on result of table type "household.daily_detail" */
  dailyDetailByDateAggregate: IHouseholdDailyDetailAggregate;
  /** execute function "genre_total_by_month" which returns "household.total_by_genre_view" */
  genreTotalByMonth: Array<IHouseholdTotalByGenreView>;
  /** execute function "genre_total_by_month" and query aggregates on result of table type "household.total_by_genre_view" */
  genreTotalByMonthAggregate: IHouseholdTotalByGenreViewAggregate;
  /** fetch data from the table: "group" */
  group: Array<IGroup>;
  /** fetch aggregated fields from the table: "group" */
  groupAggregate: IGroupAggregate;
  /** fetch data from the table: "group_application" */
  groupApplication: Array<IGroupApplication>;
  /** fetch aggregated fields from the table: "group_application" */
  groupApplicationAggregate: IGroupApplicationAggregate;
  /** fetch data from the table: "group_application" using primary key columns */
  groupApplicationByPk?: Maybe<IGroupApplication>;
  /** fetch data from the table: "group" using primary key columns */
  groupByPk?: Maybe<IGroup>;
  /** fetch data from the table: "household.account" */
  householdAccount: Array<IHouseholdAccount>;
  /** fetch aggregated fields from the table: "household.account" */
  householdAccountAggregate: IHouseholdAccountAggregate;
  /** fetch data from the table: "household.account" using primary key columns */
  householdAccountByPk?: Maybe<IHouseholdAccount>;
  /** fetch data from the table: "household.all_detail_view" */
  householdAllDetailView: Array<IHouseholdAllDetailView>;
  /** fetch aggregated fields from the table: "household.all_detail_view" */
  householdAllDetailViewAggregate: IHouseholdAllDetailViewAggregate;
  /** fetch data from the table: "household.category" */
  householdCategory: Array<IHouseholdCategory>;
  /** fetch data from the table: "household.category" using primary key columns */
  householdCategoryByPk?: Maybe<IHouseholdCategory>;
  /** fetch data from the table: "household.credit_card_detail" */
  householdCreditCardDetail: Array<IHouseholdCreditCardDetail>;
  /** fetch aggregated fields from the table: "household.credit_card_detail" */
  householdCreditCardDetailAggregate: IHouseholdCreditCardDetailAggregate;
  /** fetch data from the table: "household.credit_card_detail" using primary key columns */
  householdCreditCardDetailByPk?: Maybe<IHouseholdCreditCardDetail>;
  /** fetch data from the table: "household.credit_card_summary" */
  householdCreditCardSummary: Array<IHouseholdCreditCardSummary>;
  /** fetch aggregated fields from the table: "household.credit_card_summary" */
  householdCreditCardSummaryAggregate: IHouseholdCreditCardSummaryAggregate;
  /** fetch data from the table: "household.credit_card_summary" using primary key columns */
  householdCreditCardSummaryByPk?: Maybe<IHouseholdCreditCardSummary>;
  /** fetch data from the table: "household.credit_card_summary_total_by_account_view" */
  householdCreditCardSummaryTotalByAccountView: Array<IHouseholdCreditCardSummaryTotalByAccountView>;
  /** fetch aggregated fields from the table: "household.credit_card_summary_total_by_account_view" */
  householdCreditCardSummaryTotalByAccountViewAggregate: IHouseholdCreditCardSummaryTotalByAccountViewAggregate;
  /** fetch data from the table: "household.daily_detail" */
  householdDailyDetail: Array<IHouseholdDailyDetail>;
  /** fetch aggregated fields from the table: "household.daily_detail" */
  householdDailyDetailAggregate: IHouseholdDailyDetailAggregate;
  /** fetch data from the table: "household.daily_detail" using primary key columns */
  householdDailyDetailByPk?: Maybe<IHouseholdDailyDetail>;
  /** fetch data from the table: "household.daily_total_view" */
  householdDailyTotalView: Array<IHouseholdDailyTotalView>;
  /** fetch aggregated fields from the table: "household.daily_total_view" */
  householdDailyTotalViewAggregate: IHouseholdDailyTotalViewAggregate;
  /** fetch data from the table: "household.deposit_category" */
  householdDepositCategory: Array<IHouseholdDepositCategory>;
  /** fetch aggregated fields from the table: "household.deposit_category" */
  householdDepositCategoryAggregate: IHouseholdDepositCategoryAggregate;
  /** fetch data from the table: "household.deposit_category" using primary key columns */
  householdDepositCategoryByPk?: Maybe<IHouseholdDepositCategory>;
  /** fetch data from the table: "household.genre" */
  householdGenre: Array<IHouseholdGenre>;
  /** fetch aggregated fields from the table: "household.genre" */
  householdGenreAggregate: IHouseholdGenreAggregate;
  /** fetch data from the table: "household.genre" using primary key columns */
  householdGenreByPk?: Maybe<IHouseholdGenre>;
  /** fetch data from the table: "household.import_file_history" */
  householdImportFileHistory: Array<IHouseholdImportFileHistory>;
  /** fetch aggregated fields from the table: "household.import_file_history" */
  householdImportFileHistoryAggregate: IHouseholdImportFileHistoryAggregate;
  /** fetch data from the table: "household.import_file_history" using primary key columns */
  householdImportFileHistoryByPk?: Maybe<IHouseholdImportFileHistory>;
  /** fetch data from the table: "household.summary_category" */
  householdSummaryCategory: Array<IHouseholdSummaryCategory>;
  /** fetch aggregated fields from the table: "household.summary_category" */
  householdSummaryCategoryAggregate: IHouseholdSummaryCategoryAggregate;
  /** fetch data from the table: "household.summary_category" using primary key columns */
  householdSummaryCategoryByPk?: Maybe<IHouseholdSummaryCategory>;
  /** fetch data from the table: "household.total_by_category_view" */
  householdTotalByCategoryView: Array<IHouseholdTotalByCategoryView>;
  /** fetch aggregated fields from the table: "household.total_by_category_view" */
  householdTotalByCategoryViewAggregate: IHouseholdTotalByCategoryViewAggregate;
  /** fetch data from the table: "household.total_by_genre_view" */
  householdTotalByGenreView: Array<IHouseholdTotalByGenreView>;
  /** fetch aggregated fields from the table: "household.total_by_genre_view" */
  householdTotalByGenreViewAggregate: IHouseholdTotalByGenreViewAggregate;
  /** fetch data from the table: "household.transfer_category" */
  householdTransferCategory: Array<IHouseholdTransferCategory>;
  /** fetch aggregated fields from the table: "household.transfer_category" */
  householdTransferCategoryAggregate: IHouseholdTransferCategoryAggregate;
  /** fetch data from the table: "household.transfer_category" using primary key columns */
  householdTransferCategoryByPk?: Maybe<IHouseholdTransferCategory>;
  /** fetch data from the table: "user" */
  user: Array<IUser>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: IUserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<IUser>;
}

export interface IQuery_RootAffiliationArgs {
  distinctOn?: InputMaybe<Array<IAffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IAffiliationOrderBy>>;
  where?: InputMaybe<IAffiliationBoolExp>;
}

export interface IQuery_RootAffiliationAggregateArgs {
  distinctOn?: InputMaybe<Array<IAffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IAffiliationOrderBy>>;
  where?: InputMaybe<IAffiliationBoolExp>;
}

export interface IQuery_RootAffiliationByPkArgs {
  id: Scalars["String"];
}

export interface IQuery_RootApplicationArgs {
  distinctOn?: InputMaybe<Array<IApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IApplicationOrderBy>>;
  where?: InputMaybe<IApplicationBoolExp>;
}

export interface IQuery_RootApplicationAggregateArgs {
  distinctOn?: InputMaybe<Array<IApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IApplicationOrderBy>>;
  where?: InputMaybe<IApplicationBoolExp>;
}

export interface IQuery_RootApplicationByPkArgs {
  id: Scalars["String"];
}

export interface IQuery_RootCategoryTotalByMonthArgs {
  args: ICategoryTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<IHouseholdTotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTotalByCategoryViewOrderBy>>;
  where?: InputMaybe<IHouseholdTotalByCategoryViewBoolExp>;
}

export interface IQuery_RootCategoryTotalByMonthAggregateArgs {
  args: ICategoryTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<IHouseholdTotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTotalByCategoryViewOrderBy>>;
  where?: InputMaybe<IHouseholdTotalByCategoryViewBoolExp>;
}

export interface IQuery_RootDailyDetailByDateArgs {
  args: IDailyDetailByDateArgs;
  distinctOn?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

export interface IQuery_RootDailyDetailByDateAggregateArgs {
  args: IDailyDetailByDateArgs;
  distinctOn?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

export interface IQuery_RootGenreTotalByMonthArgs {
  args: IGenreTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<IHouseholdTotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTotalByGenreViewOrderBy>>;
  where?: InputMaybe<IHouseholdTotalByGenreViewBoolExp>;
}

export interface IQuery_RootGenreTotalByMonthAggregateArgs {
  args: IGenreTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<IHouseholdTotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTotalByGenreViewOrderBy>>;
  where?: InputMaybe<IHouseholdTotalByGenreViewBoolExp>;
}

export interface IQuery_RootGroupArgs {
  distinctOn?: InputMaybe<Array<IGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IGroupOrderBy>>;
  where?: InputMaybe<IGroupBoolExp>;
}

export interface IQuery_RootGroupAggregateArgs {
  distinctOn?: InputMaybe<Array<IGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IGroupOrderBy>>;
  where?: InputMaybe<IGroupBoolExp>;
}

export interface IQuery_RootGroupApplicationArgs {
  distinctOn?: InputMaybe<Array<IGroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IGroupApplicationOrderBy>>;
  where?: InputMaybe<IGroupApplicationBoolExp>;
}

export interface IQuery_RootGroupApplicationAggregateArgs {
  distinctOn?: InputMaybe<Array<IGroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IGroupApplicationOrderBy>>;
  where?: InputMaybe<IGroupApplicationBoolExp>;
}

export interface IQuery_RootGroupApplicationByPkArgs {
  id: Scalars["String"];
}

export interface IQuery_RootGroupByPkArgs {
  id: Scalars["String"];
}

export interface IQuery_RootHouseholdAccountArgs {
  distinctOn?: InputMaybe<Array<IHouseholdAccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdAccountOrderBy>>;
  where?: InputMaybe<IHouseholdAccountBoolExp>;
}

export interface IQuery_RootHouseholdAccountAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdAccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdAccountOrderBy>>;
  where?: InputMaybe<IHouseholdAccountBoolExp>;
}

export interface IQuery_RootHouseholdAccountByPkArgs {
  id: Scalars["String"];
}

export interface IQuery_RootHouseholdAllDetailViewArgs {
  distinctOn?: InputMaybe<Array<IHouseholdAllDetailViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdAllDetailViewOrderBy>>;
  where?: InputMaybe<IHouseholdAllDetailViewBoolExp>;
}

export interface IQuery_RootHouseholdAllDetailViewAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdAllDetailViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdAllDetailViewOrderBy>>;
  where?: InputMaybe<IHouseholdAllDetailViewBoolExp>;
}

export interface IQuery_RootHouseholdCategoryArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdCategoryBoolExp>;
}

export interface IQuery_RootHouseholdCategoryByPkArgs {
  id: Scalars["String"];
}

export interface IQuery_RootHouseholdCreditCardDetailArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
}

export interface IQuery_RootHouseholdCreditCardDetailAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
}

export interface IQuery_RootHouseholdCreditCardDetailByPkArgs {
  id: Scalars["String"];
}

export interface IQuery_RootHouseholdCreditCardSummaryArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardSummaryOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardSummaryBoolExp>;
}

export interface IQuery_RootHouseholdCreditCardSummaryAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardSummaryOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardSummaryBoolExp>;
}

export interface IQuery_RootHouseholdCreditCardSummaryByPkArgs {
  id: Scalars["String"];
}

export interface IQuery_RootHouseholdCreditCardSummaryTotalByAccountViewArgs {
  distinctOn?: InputMaybe<
    Array<IHouseholdCreditCardSummaryTotalByAccountViewSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<
    Array<IHouseholdCreditCardSummaryTotalByAccountViewOrderBy>
  >;
  where?: InputMaybe<IHouseholdCreditCardSummaryTotalByAccountViewBoolExp>;
}

export interface IQuery_RootHouseholdCreditCardSummaryTotalByAccountViewAggregateArgs {
  distinctOn?: InputMaybe<
    Array<IHouseholdCreditCardSummaryTotalByAccountViewSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<
    Array<IHouseholdCreditCardSummaryTotalByAccountViewOrderBy>
  >;
  where?: InputMaybe<IHouseholdCreditCardSummaryTotalByAccountViewBoolExp>;
}

export interface IQuery_RootHouseholdDailyDetailArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

export interface IQuery_RootHouseholdDailyDetailAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

export interface IQuery_RootHouseholdDailyDetailByPkArgs {
  id: Scalars["String"];
}

export interface IQuery_RootHouseholdDailyTotalViewArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDailyTotalViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyTotalViewOrderBy>>;
  where?: InputMaybe<IHouseholdDailyTotalViewBoolExp>;
}

export interface IQuery_RootHouseholdDailyTotalViewAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDailyTotalViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyTotalViewOrderBy>>;
  where?: InputMaybe<IHouseholdDailyTotalViewBoolExp>;
}

export interface IQuery_RootHouseholdDepositCategoryArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDepositCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDepositCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdDepositCategoryBoolExp>;
}

export interface IQuery_RootHouseholdDepositCategoryAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDepositCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDepositCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdDepositCategoryBoolExp>;
}

export interface IQuery_RootHouseholdDepositCategoryByPkArgs {
  categoryId: Scalars["String"];
}

export interface IQuery_RootHouseholdGenreArgs {
  distinctOn?: InputMaybe<Array<IHouseholdGenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdGenreOrderBy>>;
  where?: InputMaybe<IHouseholdGenreBoolExp>;
}

export interface IQuery_RootHouseholdGenreAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdGenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdGenreOrderBy>>;
  where?: InputMaybe<IHouseholdGenreBoolExp>;
}

export interface IQuery_RootHouseholdGenreByPkArgs {
  id: Scalars["String"];
}

export interface IQuery_RootHouseholdImportFileHistoryArgs {
  distinctOn?: InputMaybe<Array<IHouseholdImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdImportFileHistoryOrderBy>>;
  where?: InputMaybe<IHouseholdImportFileHistoryBoolExp>;
}

export interface IQuery_RootHouseholdImportFileHistoryAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdImportFileHistoryOrderBy>>;
  where?: InputMaybe<IHouseholdImportFileHistoryBoolExp>;
}

export interface IQuery_RootHouseholdImportFileHistoryByPkArgs {
  id: Scalars["String"];
}

export interface IQuery_RootHouseholdSummaryCategoryArgs {
  distinctOn?: InputMaybe<Array<IHouseholdSummaryCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdSummaryCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdSummaryCategoryBoolExp>;
}

export interface IQuery_RootHouseholdSummaryCategoryAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdSummaryCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdSummaryCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdSummaryCategoryBoolExp>;
}

export interface IQuery_RootHouseholdSummaryCategoryByPkArgs {
  id: Scalars["String"];
}

export interface IQuery_RootHouseholdTotalByCategoryViewArgs {
  distinctOn?: InputMaybe<Array<IHouseholdTotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTotalByCategoryViewOrderBy>>;
  where?: InputMaybe<IHouseholdTotalByCategoryViewBoolExp>;
}

export interface IQuery_RootHouseholdTotalByCategoryViewAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdTotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTotalByCategoryViewOrderBy>>;
  where?: InputMaybe<IHouseholdTotalByCategoryViewBoolExp>;
}

export interface IQuery_RootHouseholdTotalByGenreViewArgs {
  distinctOn?: InputMaybe<Array<IHouseholdTotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTotalByGenreViewOrderBy>>;
  where?: InputMaybe<IHouseholdTotalByGenreViewBoolExp>;
}

export interface IQuery_RootHouseholdTotalByGenreViewAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdTotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTotalByGenreViewOrderBy>>;
  where?: InputMaybe<IHouseholdTotalByGenreViewBoolExp>;
}

export interface IQuery_RootHouseholdTransferCategoryArgs {
  distinctOn?: InputMaybe<Array<IHouseholdTransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTransferCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdTransferCategoryBoolExp>;
}

export interface IQuery_RootHouseholdTransferCategoryAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdTransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTransferCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdTransferCategoryBoolExp>;
}

export interface IQuery_RootHouseholdTransferCategoryByPkArgs {
  groupId: Scalars["String"];
}

export interface IQuery_RootUserArgs {
  distinctOn?: InputMaybe<Array<IUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IUserOrderBy>>;
  where?: InputMaybe<IUserBoolExp>;
}

export interface IQuery_RootUserAggregateArgs {
  distinctOn?: InputMaybe<Array<IUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IUserOrderBy>>;
  where?: InputMaybe<IUserBoolExp>;
}

export interface IQuery_RootUserByPkArgs {
  id: Scalars["String"];
}

export interface ISubscription_Root {
  /** fetch data from the table: "affiliation" */
  affiliation: Array<IAffiliation>;
  /** fetch aggregated fields from the table: "affiliation" */
  affiliationAggregate: IAffiliationAggregate;
  /** fetch data from the table: "affiliation" using primary key columns */
  affiliationByPk?: Maybe<IAffiliation>;
  /** fetch data from the table in a streaming manner: "affiliation" */
  affiliationStream: Array<IAffiliation>;
  /** fetch data from the table: "application" */
  application: Array<IApplication>;
  /** fetch aggregated fields from the table: "application" */
  applicationAggregate: IApplicationAggregate;
  /** fetch data from the table: "application" using primary key columns */
  applicationByPk?: Maybe<IApplication>;
  /** fetch data from the table in a streaming manner: "application" */
  applicationStream: Array<IApplication>;
  /** execute function "category_total_by_month" which returns "household.total_by_category_view" */
  categoryTotalByMonth: Array<IHouseholdTotalByCategoryView>;
  /** execute function "category_total_by_month" and query aggregates on result of table type "household.total_by_category_view" */
  categoryTotalByMonthAggregate: IHouseholdTotalByCategoryViewAggregate;
  /** execute function "daily_detail_by_date" which returns "household.daily_detail" */
  dailyDetailByDate: Array<IHouseholdDailyDetail>;
  /** execute function "daily_detail_by_date" and query aggregates on result of table type "household.daily_detail" */
  dailyDetailByDateAggregate: IHouseholdDailyDetailAggregate;
  /** execute function "genre_total_by_month" which returns "household.total_by_genre_view" */
  genreTotalByMonth: Array<IHouseholdTotalByGenreView>;
  /** execute function "genre_total_by_month" and query aggregates on result of table type "household.total_by_genre_view" */
  genreTotalByMonthAggregate: IHouseholdTotalByGenreViewAggregate;
  /** fetch data from the table: "group" */
  group: Array<IGroup>;
  /** fetch aggregated fields from the table: "group" */
  groupAggregate: IGroupAggregate;
  /** fetch data from the table: "group_application" */
  groupApplication: Array<IGroupApplication>;
  /** fetch aggregated fields from the table: "group_application" */
  groupApplicationAggregate: IGroupApplicationAggregate;
  /** fetch data from the table: "group_application" using primary key columns */
  groupApplicationByPk?: Maybe<IGroupApplication>;
  /** fetch data from the table in a streaming manner: "group_application" */
  groupApplicationStream: Array<IGroupApplication>;
  /** fetch data from the table: "group" using primary key columns */
  groupByPk?: Maybe<IGroup>;
  /** fetch data from the table in a streaming manner: "group" */
  groupStream: Array<IGroup>;
  /** fetch data from the table: "household.account" */
  householdAccount: Array<IHouseholdAccount>;
  /** fetch aggregated fields from the table: "household.account" */
  householdAccountAggregate: IHouseholdAccountAggregate;
  /** fetch data from the table: "household.account" using primary key columns */
  householdAccountByPk?: Maybe<IHouseholdAccount>;
  /** fetch data from the table in a streaming manner: "household.account" */
  householdAccountStream: Array<IHouseholdAccount>;
  /** fetch data from the table: "household.all_detail_view" */
  householdAllDetailView: Array<IHouseholdAllDetailView>;
  /** fetch aggregated fields from the table: "household.all_detail_view" */
  householdAllDetailViewAggregate: IHouseholdAllDetailViewAggregate;
  /** fetch data from the table in a streaming manner: "household.all_detail_view" */
  householdAllDetailViewStream: Array<IHouseholdAllDetailView>;
  /** fetch data from the table: "household.category" */
  householdCategory: Array<IHouseholdCategory>;
  /** fetch data from the table: "household.category" using primary key columns */
  householdCategoryByPk?: Maybe<IHouseholdCategory>;
  /** fetch data from the table in a streaming manner: "household.category" */
  householdCategoryStream: Array<IHouseholdCategory>;
  /** fetch data from the table: "household.credit_card_detail" */
  householdCreditCardDetail: Array<IHouseholdCreditCardDetail>;
  /** fetch aggregated fields from the table: "household.credit_card_detail" */
  householdCreditCardDetailAggregate: IHouseholdCreditCardDetailAggregate;
  /** fetch data from the table: "household.credit_card_detail" using primary key columns */
  householdCreditCardDetailByPk?: Maybe<IHouseholdCreditCardDetail>;
  /** fetch data from the table in a streaming manner: "household.credit_card_detail" */
  householdCreditCardDetailStream: Array<IHouseholdCreditCardDetail>;
  /** fetch data from the table: "household.credit_card_summary" */
  householdCreditCardSummary: Array<IHouseholdCreditCardSummary>;
  /** fetch aggregated fields from the table: "household.credit_card_summary" */
  householdCreditCardSummaryAggregate: IHouseholdCreditCardSummaryAggregate;
  /** fetch data from the table: "household.credit_card_summary" using primary key columns */
  householdCreditCardSummaryByPk?: Maybe<IHouseholdCreditCardSummary>;
  /** fetch data from the table in a streaming manner: "household.credit_card_summary" */
  householdCreditCardSummaryStream: Array<IHouseholdCreditCardSummary>;
  /** fetch data from the table: "household.credit_card_summary_total_by_account_view" */
  householdCreditCardSummaryTotalByAccountView: Array<IHouseholdCreditCardSummaryTotalByAccountView>;
  /** fetch aggregated fields from the table: "household.credit_card_summary_total_by_account_view" */
  householdCreditCardSummaryTotalByAccountViewAggregate: IHouseholdCreditCardSummaryTotalByAccountViewAggregate;
  /** fetch data from the table in a streaming manner: "household.credit_card_summary_total_by_account_view" */
  householdCreditCardSummaryTotalByAccountViewStream: Array<IHouseholdCreditCardSummaryTotalByAccountView>;
  /** fetch data from the table: "household.daily_detail" */
  householdDailyDetail: Array<IHouseholdDailyDetail>;
  /** fetch aggregated fields from the table: "household.daily_detail" */
  householdDailyDetailAggregate: IHouseholdDailyDetailAggregate;
  /** fetch data from the table: "household.daily_detail" using primary key columns */
  householdDailyDetailByPk?: Maybe<IHouseholdDailyDetail>;
  /** fetch data from the table in a streaming manner: "household.daily_detail" */
  householdDailyDetailStream: Array<IHouseholdDailyDetail>;
  /** fetch data from the table: "household.daily_total_view" */
  householdDailyTotalView: Array<IHouseholdDailyTotalView>;
  /** fetch aggregated fields from the table: "household.daily_total_view" */
  householdDailyTotalViewAggregate: IHouseholdDailyTotalViewAggregate;
  /** fetch data from the table in a streaming manner: "household.daily_total_view" */
  householdDailyTotalViewStream: Array<IHouseholdDailyTotalView>;
  /** fetch data from the table: "household.deposit_category" */
  householdDepositCategory: Array<IHouseholdDepositCategory>;
  /** fetch aggregated fields from the table: "household.deposit_category" */
  householdDepositCategoryAggregate: IHouseholdDepositCategoryAggregate;
  /** fetch data from the table: "household.deposit_category" using primary key columns */
  householdDepositCategoryByPk?: Maybe<IHouseholdDepositCategory>;
  /** fetch data from the table in a streaming manner: "household.deposit_category" */
  householdDepositCategoryStream: Array<IHouseholdDepositCategory>;
  /** fetch data from the table: "household.genre" */
  householdGenre: Array<IHouseholdGenre>;
  /** fetch aggregated fields from the table: "household.genre" */
  householdGenreAggregate: IHouseholdGenreAggregate;
  /** fetch data from the table: "household.genre" using primary key columns */
  householdGenreByPk?: Maybe<IHouseholdGenre>;
  /** fetch data from the table in a streaming manner: "household.genre" */
  householdGenreStream: Array<IHouseholdGenre>;
  /** fetch data from the table: "household.import_file_history" */
  householdImportFileHistory: Array<IHouseholdImportFileHistory>;
  /** fetch aggregated fields from the table: "household.import_file_history" */
  householdImportFileHistoryAggregate: IHouseholdImportFileHistoryAggregate;
  /** fetch data from the table: "household.import_file_history" using primary key columns */
  householdImportFileHistoryByPk?: Maybe<IHouseholdImportFileHistory>;
  /** fetch data from the table in a streaming manner: "household.import_file_history" */
  householdImportFileHistoryStream: Array<IHouseholdImportFileHistory>;
  /** fetch data from the table: "household.summary_category" */
  householdSummaryCategory: Array<IHouseholdSummaryCategory>;
  /** fetch aggregated fields from the table: "household.summary_category" */
  householdSummaryCategoryAggregate: IHouseholdSummaryCategoryAggregate;
  /** fetch data from the table: "household.summary_category" using primary key columns */
  householdSummaryCategoryByPk?: Maybe<IHouseholdSummaryCategory>;
  /** fetch data from the table in a streaming manner: "household.summary_category" */
  householdSummaryCategoryStream: Array<IHouseholdSummaryCategory>;
  /** fetch data from the table: "household.total_by_category_view" */
  householdTotalByCategoryView: Array<IHouseholdTotalByCategoryView>;
  /** fetch aggregated fields from the table: "household.total_by_category_view" */
  householdTotalByCategoryViewAggregate: IHouseholdTotalByCategoryViewAggregate;
  /** fetch data from the table in a streaming manner: "household.total_by_category_view" */
  householdTotalByCategoryViewStream: Array<IHouseholdTotalByCategoryView>;
  /** fetch data from the table: "household.total_by_genre_view" */
  householdTotalByGenreView: Array<IHouseholdTotalByGenreView>;
  /** fetch aggregated fields from the table: "household.total_by_genre_view" */
  householdTotalByGenreViewAggregate: IHouseholdTotalByGenreViewAggregate;
  /** fetch data from the table in a streaming manner: "household.total_by_genre_view" */
  householdTotalByGenreViewStream: Array<IHouseholdTotalByGenreView>;
  /** fetch data from the table: "household.transfer_category" */
  householdTransferCategory: Array<IHouseholdTransferCategory>;
  /** fetch aggregated fields from the table: "household.transfer_category" */
  householdTransferCategoryAggregate: IHouseholdTransferCategoryAggregate;
  /** fetch data from the table: "household.transfer_category" using primary key columns */
  householdTransferCategoryByPk?: Maybe<IHouseholdTransferCategory>;
  /** fetch data from the table in a streaming manner: "household.transfer_category" */
  householdTransferCategoryStream: Array<IHouseholdTransferCategory>;
  /** fetch data from the table: "user" */
  user: Array<IUser>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: IUserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<IUser>;
  /** fetch data from the table in a streaming manner: "user" */
  userStream: Array<IUser>;
}

export interface ISubscription_RootAffiliationArgs {
  distinctOn?: InputMaybe<Array<IAffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IAffiliationOrderBy>>;
  where?: InputMaybe<IAffiliationBoolExp>;
}

export interface ISubscription_RootAffiliationAggregateArgs {
  distinctOn?: InputMaybe<Array<IAffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IAffiliationOrderBy>>;
  where?: InputMaybe<IAffiliationBoolExp>;
}

export interface ISubscription_RootAffiliationByPkArgs {
  id: Scalars["String"];
}

export interface ISubscription_RootAffiliationStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<IAffiliationStreamCursorInput>>;
  where?: InputMaybe<IAffiliationBoolExp>;
}

export interface ISubscription_RootApplicationArgs {
  distinctOn?: InputMaybe<Array<IApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IApplicationOrderBy>>;
  where?: InputMaybe<IApplicationBoolExp>;
}

export interface ISubscription_RootApplicationAggregateArgs {
  distinctOn?: InputMaybe<Array<IApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IApplicationOrderBy>>;
  where?: InputMaybe<IApplicationBoolExp>;
}

export interface ISubscription_RootApplicationByPkArgs {
  id: Scalars["String"];
}

export interface ISubscription_RootApplicationStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<IApplicationStreamCursorInput>>;
  where?: InputMaybe<IApplicationBoolExp>;
}

export interface ISubscription_RootCategoryTotalByMonthArgs {
  args: ICategoryTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<IHouseholdTotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTotalByCategoryViewOrderBy>>;
  where?: InputMaybe<IHouseholdTotalByCategoryViewBoolExp>;
}

export interface ISubscription_RootCategoryTotalByMonthAggregateArgs {
  args: ICategoryTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<IHouseholdTotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTotalByCategoryViewOrderBy>>;
  where?: InputMaybe<IHouseholdTotalByCategoryViewBoolExp>;
}

export interface ISubscription_RootDailyDetailByDateArgs {
  args: IDailyDetailByDateArgs;
  distinctOn?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

export interface ISubscription_RootDailyDetailByDateAggregateArgs {
  args: IDailyDetailByDateArgs;
  distinctOn?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

export interface ISubscription_RootGenreTotalByMonthArgs {
  args: IGenreTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<IHouseholdTotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTotalByGenreViewOrderBy>>;
  where?: InputMaybe<IHouseholdTotalByGenreViewBoolExp>;
}

export interface ISubscription_RootGenreTotalByMonthAggregateArgs {
  args: IGenreTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<IHouseholdTotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTotalByGenreViewOrderBy>>;
  where?: InputMaybe<IHouseholdTotalByGenreViewBoolExp>;
}

export interface ISubscription_RootGroupArgs {
  distinctOn?: InputMaybe<Array<IGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IGroupOrderBy>>;
  where?: InputMaybe<IGroupBoolExp>;
}

export interface ISubscription_RootGroupAggregateArgs {
  distinctOn?: InputMaybe<Array<IGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IGroupOrderBy>>;
  where?: InputMaybe<IGroupBoolExp>;
}

export interface ISubscription_RootGroupApplicationArgs {
  distinctOn?: InputMaybe<Array<IGroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IGroupApplicationOrderBy>>;
  where?: InputMaybe<IGroupApplicationBoolExp>;
}

export interface ISubscription_RootGroupApplicationAggregateArgs {
  distinctOn?: InputMaybe<Array<IGroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IGroupApplicationOrderBy>>;
  where?: InputMaybe<IGroupApplicationBoolExp>;
}

export interface ISubscription_RootGroupApplicationByPkArgs {
  id: Scalars["String"];
}

export interface ISubscription_RootGroupApplicationStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<IGroupApplicationStreamCursorInput>>;
  where?: InputMaybe<IGroupApplicationBoolExp>;
}

export interface ISubscription_RootGroupByPkArgs {
  id: Scalars["String"];
}

export interface ISubscription_RootGroupStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<IGroupStreamCursorInput>>;
  where?: InputMaybe<IGroupBoolExp>;
}

export interface ISubscription_RootHouseholdAccountArgs {
  distinctOn?: InputMaybe<Array<IHouseholdAccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdAccountOrderBy>>;
  where?: InputMaybe<IHouseholdAccountBoolExp>;
}

export interface ISubscription_RootHouseholdAccountAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdAccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdAccountOrderBy>>;
  where?: InputMaybe<IHouseholdAccountBoolExp>;
}

export interface ISubscription_RootHouseholdAccountByPkArgs {
  id: Scalars["String"];
}

export interface ISubscription_RootHouseholdAccountStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<IHouseholdAccountStreamCursorInput>>;
  where?: InputMaybe<IHouseholdAccountBoolExp>;
}

export interface ISubscription_RootHouseholdAllDetailViewArgs {
  distinctOn?: InputMaybe<Array<IHouseholdAllDetailViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdAllDetailViewOrderBy>>;
  where?: InputMaybe<IHouseholdAllDetailViewBoolExp>;
}

export interface ISubscription_RootHouseholdAllDetailViewAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdAllDetailViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdAllDetailViewOrderBy>>;
  where?: InputMaybe<IHouseholdAllDetailViewBoolExp>;
}

export interface ISubscription_RootHouseholdAllDetailViewStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<IHouseholdAllDetailViewStreamCursorInput>>;
  where?: InputMaybe<IHouseholdAllDetailViewBoolExp>;
}

export interface ISubscription_RootHouseholdCategoryArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdCategoryBoolExp>;
}

export interface ISubscription_RootHouseholdCategoryByPkArgs {
  id: Scalars["String"];
}

export interface ISubscription_RootHouseholdCategoryStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<IHouseholdCategoryStreamCursorInput>>;
  where?: InputMaybe<IHouseholdCategoryBoolExp>;
}

export interface ISubscription_RootHouseholdCreditCardDetailArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
}

export interface ISubscription_RootHouseholdCreditCardDetailAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
}

export interface ISubscription_RootHouseholdCreditCardDetailByPkArgs {
  id: Scalars["String"];
}

export interface ISubscription_RootHouseholdCreditCardDetailStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<IHouseholdCreditCardDetailStreamCursorInput>>;
  where?: InputMaybe<IHouseholdCreditCardDetailBoolExp>;
}

export interface ISubscription_RootHouseholdCreditCardSummaryArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardSummaryOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardSummaryBoolExp>;
}

export interface ISubscription_RootHouseholdCreditCardSummaryAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdCreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdCreditCardSummaryOrderBy>>;
  where?: InputMaybe<IHouseholdCreditCardSummaryBoolExp>;
}

export interface ISubscription_RootHouseholdCreditCardSummaryByPkArgs {
  id: Scalars["String"];
}

export interface ISubscription_RootHouseholdCreditCardSummaryStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<IHouseholdCreditCardSummaryStreamCursorInput>>;
  where?: InputMaybe<IHouseholdCreditCardSummaryBoolExp>;
}

export interface ISubscription_RootHouseholdCreditCardSummaryTotalByAccountViewArgs {
  distinctOn?: InputMaybe<
    Array<IHouseholdCreditCardSummaryTotalByAccountViewSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<
    Array<IHouseholdCreditCardSummaryTotalByAccountViewOrderBy>
  >;
  where?: InputMaybe<IHouseholdCreditCardSummaryTotalByAccountViewBoolExp>;
}

export interface ISubscription_RootHouseholdCreditCardSummaryTotalByAccountViewAggregateArgs {
  distinctOn?: InputMaybe<
    Array<IHouseholdCreditCardSummaryTotalByAccountViewSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<
    Array<IHouseholdCreditCardSummaryTotalByAccountViewOrderBy>
  >;
  where?: InputMaybe<IHouseholdCreditCardSummaryTotalByAccountViewBoolExp>;
}

export interface ISubscription_RootHouseholdCreditCardSummaryTotalByAccountViewStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<
    InputMaybe<IHouseholdCreditCardSummaryTotalByAccountViewStreamCursorInput>
  >;
  where?: InputMaybe<IHouseholdCreditCardSummaryTotalByAccountViewBoolExp>;
}

export interface ISubscription_RootHouseholdDailyDetailArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

export interface ISubscription_RootHouseholdDailyDetailAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

export interface ISubscription_RootHouseholdDailyDetailByPkArgs {
  id: Scalars["String"];
}

export interface ISubscription_RootHouseholdDailyDetailStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<IHouseholdDailyDetailStreamCursorInput>>;
  where?: InputMaybe<IHouseholdDailyDetailBoolExp>;
}

export interface ISubscription_RootHouseholdDailyTotalViewArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDailyTotalViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyTotalViewOrderBy>>;
  where?: InputMaybe<IHouseholdDailyTotalViewBoolExp>;
}

export interface ISubscription_RootHouseholdDailyTotalViewAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDailyTotalViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDailyTotalViewOrderBy>>;
  where?: InputMaybe<IHouseholdDailyTotalViewBoolExp>;
}

export interface ISubscription_RootHouseholdDailyTotalViewStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<IHouseholdDailyTotalViewStreamCursorInput>>;
  where?: InputMaybe<IHouseholdDailyTotalViewBoolExp>;
}

export interface ISubscription_RootHouseholdDepositCategoryArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDepositCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDepositCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdDepositCategoryBoolExp>;
}

export interface ISubscription_RootHouseholdDepositCategoryAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdDepositCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdDepositCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdDepositCategoryBoolExp>;
}

export interface ISubscription_RootHouseholdDepositCategoryByPkArgs {
  categoryId: Scalars["String"];
}

export interface ISubscription_RootHouseholdDepositCategoryStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<IHouseholdDepositCategoryStreamCursorInput>>;
  where?: InputMaybe<IHouseholdDepositCategoryBoolExp>;
}

export interface ISubscription_RootHouseholdGenreArgs {
  distinctOn?: InputMaybe<Array<IHouseholdGenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdGenreOrderBy>>;
  where?: InputMaybe<IHouseholdGenreBoolExp>;
}

export interface ISubscription_RootHouseholdGenreAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdGenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdGenreOrderBy>>;
  where?: InputMaybe<IHouseholdGenreBoolExp>;
}

export interface ISubscription_RootHouseholdGenreByPkArgs {
  id: Scalars["String"];
}

export interface ISubscription_RootHouseholdGenreStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<IHouseholdGenreStreamCursorInput>>;
  where?: InputMaybe<IHouseholdGenreBoolExp>;
}

export interface ISubscription_RootHouseholdImportFileHistoryArgs {
  distinctOn?: InputMaybe<Array<IHouseholdImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdImportFileHistoryOrderBy>>;
  where?: InputMaybe<IHouseholdImportFileHistoryBoolExp>;
}

export interface ISubscription_RootHouseholdImportFileHistoryAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdImportFileHistoryOrderBy>>;
  where?: InputMaybe<IHouseholdImportFileHistoryBoolExp>;
}

export interface ISubscription_RootHouseholdImportFileHistoryByPkArgs {
  id: Scalars["String"];
}

export interface ISubscription_RootHouseholdImportFileHistoryStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<IHouseholdImportFileHistoryStreamCursorInput>>;
  where?: InputMaybe<IHouseholdImportFileHistoryBoolExp>;
}

export interface ISubscription_RootHouseholdSummaryCategoryArgs {
  distinctOn?: InputMaybe<Array<IHouseholdSummaryCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdSummaryCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdSummaryCategoryBoolExp>;
}

export interface ISubscription_RootHouseholdSummaryCategoryAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdSummaryCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdSummaryCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdSummaryCategoryBoolExp>;
}

export interface ISubscription_RootHouseholdSummaryCategoryByPkArgs {
  id: Scalars["String"];
}

export interface ISubscription_RootHouseholdSummaryCategoryStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<IHouseholdSummaryCategoryStreamCursorInput>>;
  where?: InputMaybe<IHouseholdSummaryCategoryBoolExp>;
}

export interface ISubscription_RootHouseholdTotalByCategoryViewArgs {
  distinctOn?: InputMaybe<Array<IHouseholdTotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTotalByCategoryViewOrderBy>>;
  where?: InputMaybe<IHouseholdTotalByCategoryViewBoolExp>;
}

export interface ISubscription_RootHouseholdTotalByCategoryViewAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdTotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTotalByCategoryViewOrderBy>>;
  where?: InputMaybe<IHouseholdTotalByCategoryViewBoolExp>;
}

export interface ISubscription_RootHouseholdTotalByCategoryViewStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<IHouseholdTotalByCategoryViewStreamCursorInput>>;
  where?: InputMaybe<IHouseholdTotalByCategoryViewBoolExp>;
}

export interface ISubscription_RootHouseholdTotalByGenreViewArgs {
  distinctOn?: InputMaybe<Array<IHouseholdTotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTotalByGenreViewOrderBy>>;
  where?: InputMaybe<IHouseholdTotalByGenreViewBoolExp>;
}

export interface ISubscription_RootHouseholdTotalByGenreViewAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdTotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTotalByGenreViewOrderBy>>;
  where?: InputMaybe<IHouseholdTotalByGenreViewBoolExp>;
}

export interface ISubscription_RootHouseholdTotalByGenreViewStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<IHouseholdTotalByGenreViewStreamCursorInput>>;
  where?: InputMaybe<IHouseholdTotalByGenreViewBoolExp>;
}

export interface ISubscription_RootHouseholdTransferCategoryArgs {
  distinctOn?: InputMaybe<Array<IHouseholdTransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTransferCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdTransferCategoryBoolExp>;
}

export interface ISubscription_RootHouseholdTransferCategoryAggregateArgs {
  distinctOn?: InputMaybe<Array<IHouseholdTransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IHouseholdTransferCategoryOrderBy>>;
  where?: InputMaybe<IHouseholdTransferCategoryBoolExp>;
}

export interface ISubscription_RootHouseholdTransferCategoryByPkArgs {
  groupId: Scalars["String"];
}

export interface ISubscription_RootHouseholdTransferCategoryStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<IHouseholdTransferCategoryStreamCursorInput>>;
  where?: InputMaybe<IHouseholdTransferCategoryBoolExp>;
}

export interface ISubscription_RootUserArgs {
  distinctOn?: InputMaybe<Array<IUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IUserOrderBy>>;
  where?: InputMaybe<IUserBoolExp>;
}

export interface ISubscription_RootUserAggregateArgs {
  distinctOn?: InputMaybe<Array<IUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IUserOrderBy>>;
  where?: InputMaybe<IUserBoolExp>;
}

export interface ISubscription_RootUserByPkArgs {
  id: Scalars["String"];
}

export interface ISubscription_RootUserStreamArgs {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<IUserStreamCursorInput>>;
  where?: InputMaybe<IUserBoolExp>;
}

export type ICreateAccountMutationVariables = Exact<{
  accountId: Scalars["String"];
  accountName: Scalars["String"];
  displayOrder: Scalars["Int"];
  groupId: Scalars["String"];
}>;

export type ICreateAccountMutation = {
  insertAccount?: { returning: Array<{ accountId: string }> } | null;
};

export type ICreateCategoryMutationVariables = Exact<{
  categoryId: Scalars["String"];
  categoryName: Scalars["String"];
  genreId: Scalars["String"];
  displayOrder: Scalars["Int"];
  validFlag: Scalars["Boolean"];
  groupId: Scalars["String"];
}>;

export type ICreateCategoryMutation = {
  insertCategory?: { returning: Array<{ id: string }> } | null;
};

export type ICreateCreditCardDetailMutationVariables = Exact<{
  id: Scalars["String"];
  date: Scalars["date"];
  genreId: Scalars["String"];
  iocomeType: Scalars["String"];
  categoryId: Scalars["String"];
  amount: Scalars["numeric"];
  memo: Scalars["String"];
  summaryId: Scalars["String"];
  userId: Scalars["String"];
  groupId: Scalars["String"];
}>;

export type ICreateCreditCardDetailMutation = {
  insertCreditCardDetail?: { returning: Array<{ id: string }> } | null;
};

export type ICreateCreditCardSummaryMutationVariables = Exact<{
  accountId: Scalars["String"];
  count: Scalars["Int"];
  creditCard: Scalars["String"];
  groupId: Scalars["String"];
  id: Scalars["String"];
  totalAmount: Scalars["numeric"];
  withdrawalDate: Scalars["date"];
}>;

export type ICreateCreditCardSummaryMutation = {
  insertCreditCardSummary?: { returning: Array<{ id: string }> } | null;
};

export type ICreateDailyDetailMutationVariables = Exact<{
  accountId: Scalars["String"];
  amount: Scalars["numeric"];
  genreId: Scalars["String"];
  iocomeType: Scalars["String"];
  categoryId: Scalars["String"];
  date: Scalars["date"];
  groupId: Scalars["String"];
  id: Scalars["String"];
  memo?: InputMaybe<Scalars["String"]>;
  userId: Scalars["String"];
}>;

export type ICreateDailyDetailMutation = {
  insertDailyDetail?: { returning: Array<{ id: string }> } | null;
};

export type ICreateImportFileHistoryMutationVariables = Exact<{
  fileName: Scalars["String"];
  fileType: Scalars["String"];
  groupId: Scalars["String"];
  id: Scalars["String"];
  importDatetime: Scalars["timestamp"];
  importUserId: Scalars["String"];
}>;

export type ICreateImportFileHistoryMutation = {
  insertImportFileHistory?: { returning: Array<{ id: string }> } | null;
};

export type ICreateSummaryCategoryMutationVariables = Exact<{
  id: Scalars["String"];
  displayOrder: Scalars["Int"];
  categoryId: Scalars["String"];
  groupId: Scalars["String"];
}>;

export type ICreateSummaryCategoryMutation = {
  insertSummaryCategoryByGroup?: { returning: Array<{ id: string }> } | null;
};

export type ICreateUserMutationVariables = Exact<{
  userId: Scalars["String"];
  userName: Scalars["String"];
  email: Scalars["String"];
  displayOrder: Scalars["Int"];
}>;

export type ICreateUserMutation = {
  insertUser?: { returning: Array<{ email: string; userId: string }> } | null;
};

export type IDeleteDailyDetailBySerialNoMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type IDeleteDailyDetailBySerialNoMutation = {
  deleteDailyDetailByPk?: { id: string } | null;
};

export type IDeleteSummaryCategoryMutationVariables = Exact<{
  groupId: Scalars["String"];
}>;

export type IDeleteSummaryCategoryMutation = {
  deleteSummaryCategoryByGroup?: { returning: Array<{ id: string }> } | null;
};

export type IUpdateCategoryByIdMutationVariables = Exact<{
  categoryId: Scalars["String"];
  categoryName: Scalars["String"];
  genreId: Scalars["String"];
  displayOrder: Scalars["Int"];
  validFlag: Scalars["Boolean"];
}>;

export type IUpdateCategoryByIdMutation = {
  updateCategoryByPk?: { id: string } | null;
};

export type IUpdateCreditCardDetailByIdMutationVariables = Exact<{
  id: Scalars["String"];
  categoryId: Scalars["String"];
  memo?: InputMaybe<Scalars["String"]>;
}>;

export type IUpdateCreditCardDetailByIdMutation = {
  updateCreditCardDetailByPk?: { id: string } | null;
};

export type IUpdateCreditCardSummaryTotalMutationVariables = Exact<{
  id: Scalars["String"];
  totalAmount: Scalars["numeric"];
  count: Scalars["Int"];
}>;

export type IUpdateCreditCardSummaryTotalMutation = {
  updateCreditCardSummary?: { id: string } | null;
};

export type IUpdateDailyDetailByIdMutationVariables = Exact<{
  id: Scalars["String"];
  date: Scalars["date"];
  genreId: Scalars["String"];
  iocomeType: Scalars["String"];
  categoryId: Scalars["String"];
  accountId: Scalars["String"];
  amount: Scalars["numeric"];
  memo?: InputMaybe<Scalars["String"]>;
}>;

export type IUpdateDailyDetailByIdMutation = {
  updateDailyDetailByPk?: { id: string } | null;
};

export type IUpdateGenreByIdMutationVariables = Exact<{
  genreId: Scalars["String"];
  validFlag: Scalars["Boolean"];
  iocomeType: Scalars["String"];
  genreType: Scalars["String"];
  genreName: Scalars["String"];
  displayOrder: Scalars["Int"];
}>;

export type IUpdateGenreByIdMutation = {
  updateGenreByPk?: { id: string } | null;
};

export type IGetAccountBalanceListQueryVariables = Exact<{
  groupId: Scalars["String"];
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
}>;

export type IGetAccountBalanceListQuery = {
  account: Array<{
    id: string;
    accountName: string;
    allDetailViewsAggregate: {
      aggregate?: { sum?: { signedAmount?: any | null } | null } | null;
    };
  }>;
};

export type IGetAllCategoriesQueryVariables = Exact<{
  groupId: Scalars["String"];
}>;

export type IGetAllCategoriesQuery = {
  categories: Array<{
    id: string;
    displayOrder: number;
    validFlag?: boolean | null;
    categoryName: string;
    genre: { genreId: string; genreName: string };
  }>;
};

export type IGetAllCategoryListWithCriteriaQueryVariables = Exact<{
  validCategoryIn?: InputMaybe<Array<Scalars["Boolean"]> | Scalars["Boolean"]>;
  validGenreIn?: InputMaybe<Array<Scalars["Boolean"]> | Scalars["Boolean"]>;
  iocomeTypeIn?: InputMaybe<Array<Scalars["String"]> | Scalars["String"]>;
  categoryNotIn?: InputMaybe<Array<Scalars["String"]> | Scalars["String"]>;
}>;

export type IGetAllCategoryListWithCriteriaQuery = {
  genres: Array<{
    id: string;
    name: string;
    iocomeType: string;
    validFlag?: boolean | null;
    displayOrder: number;
    type: string;
    categories: Array<{
      id: string;
      name: string;
      validFlag?: boolean | null;
      displayOrder: number;
    }>;
  }>;
};

export type IGetAllGenreQueryVariables = Exact<{
  groupId: Scalars["String"];
}>;

export type IGetAllGenreQuery = {
  genre: Array<{
    id: string;
    genreType: string;
    iocomeType: string;
    validFlag?: boolean | null;
    displayOrder: number;
    genreName: string;
  }>;
};

export type IGetAllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type IGetAllUsersQuery = {
  users: Array<{
    id: string;
    name?: string | null;
    email: string;
    affiliation: Array<{ group: { id: string; name: string } }>;
  }>;
};

export type IGetApplicationByGroupIdQueryVariables = Exact<{
  groupId: Scalars["String"];
}>;

export type IGetApplicationByGroupIdQuery = {
  group: Array<{ app: { id: string; name: string; topUrl: string } }>;
};

export type IGetCategoryByIdQueryVariables = Exact<{
  categoryId: Scalars["String"];
}>;

export type IGetCategoryByIdQuery = {
  category?: {
    validFlag?: boolean | null;
    displayOrder: number;
    categoryName: string;
    genre: { iocomeType: string; genreId: string };
  } | null;
};

export type IGetCategoryTotalByMonthQueryVariables = Exact<{
  fromDate?: InputMaybe<Scalars["date"]>;
  toDate?: InputMaybe<Scalars["date"]>;
  groupId: Scalars["String"];
}>;

export type IGetCategoryTotalByMonthQuery = {
  categoryTotalByMonth: Array<{
    date?: any | null;
    iocomeType?: string | null;
    genreId?: string | null;
    genreName?: string | null;
    categoryId?: string | null;
    categoryName?: string | null;
    total?: any | null;
  }>;
};

export type IGetCreditCardDetailByIdQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type IGetCreditCardDetailByIdQuery = {
  creditCardDetailByPk?: {
    id: string;
    date: any;
    amount: any;
    memo?: string | null;
    summaryId: string;
    category: {
      categoryId: string;
      categoryName: string;
      genre: {
        genreType: string;
        iocomeType: string;
        genreId: string;
        genreName: string;
      };
    };
  } | null;
};

export type IGetCreditCardDetailBySummaryIdQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type IGetCreditCardDetailBySummaryIdQuery = {
  creditCardSummary?: {
    id: string;
    creditCard: string;
    withdrawalDate: any;
    count: number;
    totalAmount: any;
    account: { id: string; name: string };
    creditCardDetails: Array<{
      id: string;
      date: any;
      memo?: string | null;
      amount: any;
      category: {
        id: string;
        name: string;
        genre: {
          id: string;
          name: string;
          genreType: string;
          iocomeType: string;
        };
      };
    }>;
  } | null;
};

export type IGetCreditCardListQueryVariables = Exact<{
  groupId: Scalars["String"];
}>;

export type IGetCreditCardListQuery = {
  allCreditCardSummariesList: Array<{
    id: string;
    creditCard: string;
    count: number;
    withdrawalDate: any;
    totalAmount: any;
    account: { id: string; name: string };
  }>;
};

export type IGetCreditCardSummaryBetweenWithdrawalDateQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["String"];
}>;

export type IGetCreditCardSummaryBetweenWithdrawalDateQuery = {
  allCreditCardSummariesList: Array<{
    id: string;
    withdrawalDate: any;
    totalAmount: any;
    creditCard: string;
    accountByAccountId: { accountId: string; accountName: string };
  }>;
};

export type IGetCreditCardSummaryByAccountIdBetweenDateQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  accountId: Scalars["String"];
}>;

export type IGetCreditCardSummaryByAccountIdBetweenDateQuery = {
  allCreditCardSummariesList: Array<{
    id: string;
    withdrawalDate: any;
    totalAmount: any;
    creditCard: string;
    accountByAccountId: { accountId: string; accountName: string };
  }>;
};

export type IGetDailyDetailByDateQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["String"];
}>;

export type IGetDailyDetailByDateQuery = {
  dailyDetailByDateList: Array<{
    id: string;
    date: any;
    amount: any;
    memo?: string | null;
    categoryByCategoryId: {
      categoryId: string;
      categoryName: string;
      genreByGenreId: {
        genreType: string;
        iocomeType: string;
        genreId: string;
        genreName: string;
      };
    };
    accountByAccountId: { accountId: string; accountName: string };
    userByUserId: { userId: string; userName?: string | null };
  }>;
};

export type IGetDailyDetailByDateAccountIdQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  accountId: Scalars["String"];
  groupId: Scalars["String"];
}>;

export type IGetDailyDetailByDateAccountIdQuery = {
  dailyDetailByDateList: Array<{
    id: string;
    date: any;
    amount: any;
    memo?: string | null;
    categoryByCategoryId: {
      categoryId: string;
      categoryName: string;
      genreByGenreId: {
        genreType: string;
        iocomeType: string;
        genreId: string;
        genreName: string;
      };
    };
    accountByAccountId: { accountId: string; accountName: string };
    userByUserId: { userId: string; userName?: string | null };
  }>;
};

export type IGetDailyDetailByDateCategoryIdQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["String"];
  categoryId: Scalars["String"];
}>;

export type IGetDailyDetailByDateCategoryIdQuery = {
  dailyDetailByDateList: Array<{
    id: string;
    date: any;
    amount: any;
    memo?: string | null;
    categoryByCategoryId: {
      categoryId: string;
      categoryName: string;
      genreByGenreId: {
        genreType: string;
        iocomeType: string;
        genreId: string;
        genreName: string;
      };
    };
    accountByAccountId: { accountId: string; accountName: string };
    userByUserId: { userId: string; userName?: string | null };
  }>;
};

export type IGetDailyDetailByDateGenreIdQueryVariables = Exact<{
  genreId: Scalars["String"];
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["String"];
}>;

export type IGetDailyDetailByDateGenreIdQuery = {
  allCategoriesList: Array<{
    dailyDetailsByCategoryIdList: Array<{
      id: string;
      date: any;
      amount: any;
      memo?: string | null;
      categoryByCategoryId: {
        categoryId: string;
        categoryName: string;
        genreByGenreId: {
          genreType: string;
          iocomeType: string;
          genreId: string;
          genreName: string;
        };
      };
      accountByAccountId: { accountId: string; accountName: string };
      userByUserId: { userId: string; userName?: string | null };
    }>;
  }>;
};

export type IGetGenreByIdQueryVariables = Exact<{
  genreId: Scalars["String"];
}>;

export type IGetGenreByIdQuery = {
  genreById?: {
    id: string;
    genreType: string;
    iocomeType: string;
    validFlag?: boolean | null;
    displayOrder: number;
    genreName: string;
    categories: Array<{ categoryId: string; categoryName: string }>;
  } | null;
};

export type IGetGenreTotalByMonthQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["String"];
}>;

export type IGetGenreTotalByMonthQuery = {
  genreTotalByMonthList: Array<{
    date?: any | null;
    iocomeType?: string | null;
    genreId?: string | null;
    genreName?: string | null;
    total?: any | null;
  }>;
};

export type IGetSummaryCategoriesQueryVariables = Exact<{
  groupId: Scalars["String"];
}>;

export type IGetSummaryCategoriesQuery = {
  categories: Array<{
    id: string;
    groupId: string;
    displayOrder: number;
    category: {
      id: string;
      name: string;
      genre: { id: string; name: string; iocomeType: string; type: string };
    };
  }>;
};

export type IGetSummaryCategoryBetweenDateQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["String"];
}>;

export type IGetSummaryCategoryBetweenDateQuery = {
  summaryCategoryList: Array<{
    category: {
      name: string;
      id: string;
      genre: { iocomeType: string };
      daily: Array<{ date: any; amount: any }>;
      creditCard: Array<{ date: any; amount: any }>;
    };
  }>;
};

export type IGetTotalBetweenDateQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["String"];
}>;

export type IGetTotalBetweenDateQuery = {
  incomeTotalByDate: Array<{
    date?: any | null;
    iocomeType?: string | null;
    total?: any | null;
  }>;
  outcomeTotalByDate: Array<{
    date?: any | null;
    iocomeType?: string | null;
    total?: any | null;
  }>;
};

export type IGetTransferCategoryByQueryVariables = Exact<{
  groupId: Scalars["String"];
}>;

export type IGetTransferCategoryByQuery = {
  transferCategory?: {
    id: string;
    incomeCategory: {
      categoryId: string;
      genre: { iocomeType: string; genreId: string };
    };
    outcomeCategory: {
      categoryId: string;
      genre: { iocomeType: string; genreId: string };
    };
  } | null;
};

export type IGetUserByEmailQueryVariables = Exact<{
  email: Scalars["String"];
}>;

export type IGetUserByEmailQuery = {
  userByEmail: Array<{
    email: string;
    id: string;
    name?: string | null;
    affiliation: Array<{
      groupRole: string;
      group: { id: string; name: string };
    }>;
  }>;
};

export type IGetValidAccountsQueryVariables = Exact<{
  groupId: Scalars["String"];
}>;

export type IGetValidAccountsQuery = {
  allAccountsList: Array<{ accountId: string; accountName: string }>;
};

export type IGetValidCategoryByGenreIdQueryVariables = Exact<{
  groupId: Scalars["String"];
  genreId?: InputMaybe<Scalars["String"]>;
}>;

export type IGetValidCategoryByGenreIdQuery = {
  genreById: Array<{
    id: string;
    name: string;
    categories: Array<{ id: string; name: string; displayOrder: number }>;
  }>;
};

export type IGetValidGenreListByIocomeTypeQueryVariables = Exact<{
  iocomeType: Scalars["String"];
  groupId: Scalars["String"];
}>;

export type IGetValidGenreListByIocomeTypeQuery = {
  allGenresList: Array<{
    genreType: string;
    iocomeType: string;
    displayOrder: number;
    genreId: string;
    genreName: string;
    categoriesByGenreIdList: Array<{
      displayOrder: number;
      categoryId: string;
      categoryName: string;
    }>;
  }>;
};

export type IGetDepositQueryVariables = Exact<{
  groupId: Scalars["String"];
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
}>;

export type IGetDepositQuery = {
  depositCategory: Array<{
    category: {
      id: string;
      categoryName: string;
      daily: {
        aggregate?: {
          count: number;
          sum?: { amount?: any | null } | null;
          avg?: { amount?: number | null } | null;
        } | null;
        nodes: Array<{
          id: string;
          date: any;
          amount: any;
          memo?: string | null;
        }>;
      };
      credit: {
        aggregate?: {
          count: number;
          sum?: { amount?: any | null } | null;
          avg?: { amount?: number | null } | null;
        } | null;
        nodes: Array<{
          id: string;
          date: any;
          amount: any;
          memo?: string | null;
        }>;
      };
    };
  }>;
};

export const CreateAccountDocument = gql`
  mutation CreateAccount(
    $accountId: String!
    $accountName: String!
    $displayOrder: Int!
    $groupId: String!
  ) {
    insertAccount: insertHouseholdAccount(
      objects: {
        id: $accountId
        name: $accountName
        displayOrder: $displayOrder
        groupId: $groupId
        validFlag: true
      }
    ) {
      returning {
        accountId: id
      }
    }
  }
`;

export function useCreateAccountMutation() {
  return Urql.useMutation<
    ICreateAccountMutation,
    ICreateAccountMutationVariables
  >(CreateAccountDocument);
}
export const CreateCategoryDocument = gql`
  mutation CreateCategory(
    $categoryId: String!
    $categoryName: String!
    $genreId: String!
    $displayOrder: Int!
    $validFlag: Boolean!
    $groupId: String!
  ) {
    insertCategory: insertHouseholdCategory(
      objects: {
        id: $categoryId
        name: $categoryName
        genreId: $genreId
        displayOrder: $displayOrder
        validFlag: $validFlag
        groupId: $groupId
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export function useCreateCategoryMutation() {
  return Urql.useMutation<
    ICreateCategoryMutation,
    ICreateCategoryMutationVariables
  >(CreateCategoryDocument);
}
export const CreateCreditCardDetailDocument = gql`
  mutation CreateCreditCardDetail(
    $id: String!
    $date: date!
    $genreId: String!
    $iocomeType: String!
    $categoryId: String!
    $amount: numeric!
    $memo: String!
    $summaryId: String!
    $userId: String!
    $groupId: String!
  ) {
    insertCreditCardDetail: insertHouseholdCreditCardDetail(
      objects: {
        id: $id
        date: $date
        genreId: $genreId
        iocomeType: $iocomeType
        categoryId: $categoryId
        amount: $amount
        summaryId: $summaryId
        userId: $userId
        memo: $memo
        groupId: $groupId
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export function useCreateCreditCardDetailMutation() {
  return Urql.useMutation<
    ICreateCreditCardDetailMutation,
    ICreateCreditCardDetailMutationVariables
  >(CreateCreditCardDetailDocument);
}
export const CreateCreditCardSummaryDocument = gql`
  mutation CreateCreditCardSummary(
    $accountId: String!
    $count: Int!
    $creditCard: String!
    $groupId: String!
    $id: String!
    $totalAmount: numeric!
    $withdrawalDate: date!
  ) {
    insertCreditCardSummary: insertHouseholdCreditCardSummary(
      objects: {
        id: $id
        creditCard: $creditCard
        accountId: $accountId
        totalAmount: $totalAmount
        count: $count
        withdrawalDate: $withdrawalDate
        groupId: $groupId
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export function useCreateCreditCardSummaryMutation() {
  return Urql.useMutation<
    ICreateCreditCardSummaryMutation,
    ICreateCreditCardSummaryMutationVariables
  >(CreateCreditCardSummaryDocument);
}
export const CreateDailyDetailDocument = gql`
  mutation CreateDailyDetail(
    $accountId: String!
    $amount: numeric!
    $genreId: String!
    $iocomeType: String!
    $categoryId: String!
    $date: date!
    $groupId: String!
    $id: String!
    $memo: String
    $userId: String!
  ) {
    insertDailyDetail: insertHouseholdDailyDetail(
      objects: {
        id: $id
        date: $date
        genreId: $genreId
        iocomeType: $iocomeType
        categoryId: $categoryId
        accountId: $accountId
        userId: $userId
        amount: $amount
        memo: $memo
        groupId: $groupId
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export function useCreateDailyDetailMutation() {
  return Urql.useMutation<
    ICreateDailyDetailMutation,
    ICreateDailyDetailMutationVariables
  >(CreateDailyDetailDocument);
}
export const CreateImportFileHistoryDocument = gql`
  mutation CreateImportFileHistory(
    $fileName: String!
    $fileType: String!
    $groupId: String!
    $id: String!
    $importDatetime: timestamp!
    $importUserId: String!
  ) {
    insertImportFileHistory: insertHouseholdImportFileHistory(
      objects: {
        id: $id
        fileType: $fileType
        fileName: $fileName
        importUserId: $importUserId
        importDatetime: $importDatetime
        groupId: $groupId
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export function useCreateImportFileHistoryMutation() {
  return Urql.useMutation<
    ICreateImportFileHistoryMutation,
    ICreateImportFileHistoryMutationVariables
  >(CreateImportFileHistoryDocument);
}
export const CreateSummaryCategoryDocument = gql`
  mutation CreateSummaryCategory(
    $id: String!
    $displayOrder: Int!
    $categoryId: String!
    $groupId: String!
  ) {
    insertSummaryCategoryByGroup: insertHouseholdSummaryCategory(
      objects: {
        id: $id
        categoryId: $categoryId
        groupId: $groupId
        displayOrder: $displayOrder
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export function useCreateSummaryCategoryMutation() {
  return Urql.useMutation<
    ICreateSummaryCategoryMutation,
    ICreateSummaryCategoryMutationVariables
  >(CreateSummaryCategoryDocument);
}
export const CreateUserDocument = gql`
  mutation CreateUser(
    $userId: String!
    $userName: String!
    $email: String!
    $displayOrder: Int!
  ) {
    insertUser: insertUser(
      objects: {
        id: $userId
        name: $userName
        email: $email
        displayOrder: $displayOrder
      }
    ) {
      returning {
        userId: id
        email
      }
    }
  }
`;

export function useCreateUserMutation() {
  return Urql.useMutation<ICreateUserMutation, ICreateUserMutationVariables>(
    CreateUserDocument,
  );
}
export const DeleteDailyDetailBySerialNoDocument = gql`
  mutation DeleteDailyDetailBySerialNo($id: String!) {
    deleteDailyDetailByPk: deleteHouseholdDailyDetailByPk(id: $id) {
      id
    }
  }
`;

export function useDeleteDailyDetailBySerialNoMutation() {
  return Urql.useMutation<
    IDeleteDailyDetailBySerialNoMutation,
    IDeleteDailyDetailBySerialNoMutationVariables
  >(DeleteDailyDetailBySerialNoDocument);
}
export const DeleteSummaryCategoryDocument = gql`
  mutation DeleteSummaryCategory($groupId: String!) {
    deleteSummaryCategoryByGroup: deleteHouseholdSummaryCategory(
      where: { groupId: { _eq: $groupId } }
    ) {
      returning {
        id
      }
    }
  }
`;

export function useDeleteSummaryCategoryMutation() {
  return Urql.useMutation<
    IDeleteSummaryCategoryMutation,
    IDeleteSummaryCategoryMutationVariables
  >(DeleteSummaryCategoryDocument);
}
export const UpdateCategoryByIdDocument = gql`
  mutation UpdateCategoryById(
    $categoryId: String!
    $categoryName: String!
    $genreId: String!
    $displayOrder: Int!
    $validFlag: Boolean!
  ) {
    updateCategoryByPk: updateHouseholdCategoryByPk(
      pkColumns: { id: $categoryId }
      _set: {
        name: $categoryName
        genreId: $genreId
        displayOrder: $displayOrder
        validFlag: $validFlag
      }
    ) {
      id
    }
  }
`;

export function useUpdateCategoryByIdMutation() {
  return Urql.useMutation<
    IUpdateCategoryByIdMutation,
    IUpdateCategoryByIdMutationVariables
  >(UpdateCategoryByIdDocument);
}
export const UpdateCreditCardDetailByIdDocument = gql`
  mutation UpdateCreditCardDetailById(
    $id: String!
    $categoryId: String!
    $memo: String
  ) {
    updateCreditCardDetailByPk: updateHouseholdCreditCardDetailByPk(
      pkColumns: { id: $id }
      _set: { categoryId: $categoryId, memo: $memo }
    ) {
      id
    }
  }
`;

export function useUpdateCreditCardDetailByIdMutation() {
  return Urql.useMutation<
    IUpdateCreditCardDetailByIdMutation,
    IUpdateCreditCardDetailByIdMutationVariables
  >(UpdateCreditCardDetailByIdDocument);
}
export const UpdateCreditCardSummaryTotalDocument = gql`
  mutation UpdateCreditCardSummaryTotal(
    $id: String!
    $totalAmount: numeric!
    $count: Int!
  ) {
    updateCreditCardSummary: updateHouseholdCreditCardSummaryByPk(
      pkColumns: { id: $id }
      _set: { totalAmount: $totalAmount, count: $count }
    ) {
      id
    }
  }
`;

export function useUpdateCreditCardSummaryTotalMutation() {
  return Urql.useMutation<
    IUpdateCreditCardSummaryTotalMutation,
    IUpdateCreditCardSummaryTotalMutationVariables
  >(UpdateCreditCardSummaryTotalDocument);
}
export const UpdateDailyDetailByIdDocument = gql`
  mutation UpdateDailyDetailById(
    $id: String!
    $date: date!
    $genreId: String!
    $iocomeType: String!
    $categoryId: String!
    $accountId: String!
    $amount: numeric!
    $memo: String
  ) {
    updateDailyDetailByPk: updateHouseholdDailyDetailByPk(
      _set: {
        date: $date
        genreId: $genreId
        iocomeType: $iocomeType
        categoryId: $categoryId
        accountId: $accountId
        amount: $amount
        memo: $memo
      }
      pkColumns: { id: $id }
    ) {
      id
    }
  }
`;

export function useUpdateDailyDetailByIdMutation() {
  return Urql.useMutation<
    IUpdateDailyDetailByIdMutation,
    IUpdateDailyDetailByIdMutationVariables
  >(UpdateDailyDetailByIdDocument);
}
export const UpdateGenreByIdDocument = gql`
  mutation UpdateGenreById(
    $genreId: String!
    $validFlag: Boolean!
    $iocomeType: String!
    $genreType: String!
    $genreName: String!
    $displayOrder: Int!
  ) {
    updateGenreByPk: updateHouseholdGenreByPk(
      pkColumns: { id: $genreId }
      _set: {
        name: $genreName
        genreType: $genreType
        iocomeType: $iocomeType
        validFlag: $validFlag
        displayOrder: $displayOrder
      }
    ) {
      id
    }
  }
`;

export function useUpdateGenreByIdMutation() {
  return Urql.useMutation<
    IUpdateGenreByIdMutation,
    IUpdateGenreByIdMutationVariables
  >(UpdateGenreByIdDocument);
}
export const GetAccountBalanceListDocument = gql`
  query GetAccountBalanceList(
    $groupId: String!
    $fromDate: date!
    $toDate: date!
  ) {
    account: householdAccount(where: { _and: { groupId: { _eq: $groupId } } }) {
      id
      accountName: name
      allDetailViewsAggregate(
        where: { date: { _gte: $fromDate }, _and: { date: { _lte: $toDate } } }
      ) {
        aggregate {
          sum {
            signedAmount
          }
        }
      }
    }
  }
`;

export function useGetAccountBalanceListQuery(
  options: Omit<
    Urql.UseQueryArgs<IGetAccountBalanceListQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    IGetAccountBalanceListQuery,
    IGetAccountBalanceListQueryVariables
  >({ query: GetAccountBalanceListDocument, ...options });
}
export const GetAllCategoriesDocument = gql`
  query GetAllCategories($groupId: String!) {
    categories: householdCategory(
      where: { groupId: { _eq: $groupId } }
      orderBy: [{ genre: { displayOrder: ASC } }, { displayOrder: ASC }]
    ) {
      id
      categoryName: name
      displayOrder
      validFlag
      genre {
        genreId: id
        genreName: name
      }
    }
  }
`;

export function useGetAllCategoriesQuery(
  options: Omit<Urql.UseQueryArgs<IGetAllCategoriesQueryVariables>, "query">,
) {
  return Urql.useQuery<IGetAllCategoriesQuery, IGetAllCategoriesQueryVariables>(
    { query: GetAllCategoriesDocument, ...options },
  );
}
export const GetAllCategoryListWithCriteriaDocument = gql`
  query GetAllCategoryListWithCriteria(
    $validCategoryIn: [Boolean!] = [true, false]
    $validGenreIn: [Boolean!] = [true, false]
    $iocomeTypeIn: [String!] = ["INCOME", "OUTCOME"]
    $categoryNotIn: [String!] = []
  ) {
    genres: householdGenre(
      where: {
        validFlag: { _in: $validCategoryIn }
        _and: { iocomeType: { _in: $iocomeTypeIn } }
      }
      orderBy: { displayOrder: ASC }
    ) {
      id
      name
      type: genreType
      iocomeType
      validFlag
      displayOrder
      categories(
        where: {
          validFlag: { _in: $validGenreIn }
          _and: { id: { _nin: $categoryNotIn } }
        }
        orderBy: { displayOrder: ASC }
      ) {
        id
        name
        validFlag
        displayOrder
      }
    }
  }
`;

export function useGetAllCategoryListWithCriteriaQuery(
  options?: Omit<
    Urql.UseQueryArgs<IGetAllCategoryListWithCriteriaQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    IGetAllCategoryListWithCriteriaQuery,
    IGetAllCategoryListWithCriteriaQueryVariables
  >({ query: GetAllCategoryListWithCriteriaDocument, ...options });
}
export const GetAllGenreDocument = gql`
  query GetAllGenre($groupId: String!) @cached {
    genre: householdGenre(
      where: { groupId: { _eq: $groupId } }
      orderBy: { displayOrder: ASC }
    ) {
      id
      genreName: name
      genreType
      iocomeType
      validFlag
      displayOrder
    }
  }
`;

export function useGetAllGenreQuery(
  options: Omit<Urql.UseQueryArgs<IGetAllGenreQueryVariables>, "query">,
) {
  return Urql.useQuery<IGetAllGenreQuery, IGetAllGenreQueryVariables>({
    query: GetAllGenreDocument,
    ...options,
  });
}
export const GetAllUsersDocument = gql`
  query GetAllUsers {
    users: user(orderBy: { displayOrder: ASC }) {
      id
      name
      email
      affiliation: affiliations {
        group {
          id
          name
        }
      }
    }
  }
`;

export function useGetAllUsersQuery(
  options?: Omit<Urql.UseQueryArgs<IGetAllUsersQueryVariables>, "query">,
) {
  return Urql.useQuery<IGetAllUsersQuery, IGetAllUsersQueryVariables>({
    query: GetAllUsersDocument,
    ...options,
  });
}
export const GetApplicationByGroupIdDocument = gql`
  query getApplicationByGroupId($groupId: String!) {
    group: groupApplication(where: { groupId: { _eq: $groupId } }) {
      app: application {
        id
        name
        topUrl
      }
    }
  }
`;

export function useGetApplicationByGroupIdQuery(
  options: Omit<
    Urql.UseQueryArgs<IGetApplicationByGroupIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    IGetApplicationByGroupIdQuery,
    IGetApplicationByGroupIdQueryVariables
  >({ query: GetApplicationByGroupIdDocument, ...options });
}
export const GetCategoryByIdDocument = gql`
  query GetCategoryById($categoryId: String!) {
    category: householdCategoryByPk(id: $categoryId) {
      categoryName: name
      validFlag
      displayOrder
      genre {
        genreId: id
        iocomeType
      }
    }
  }
`;

export function useGetCategoryByIdQuery(
  options: Omit<Urql.UseQueryArgs<IGetCategoryByIdQueryVariables>, "query">,
) {
  return Urql.useQuery<IGetCategoryByIdQuery, IGetCategoryByIdQueryVariables>({
    query: GetCategoryByIdDocument,
    ...options,
  });
}
export const GetCategoryTotalByMonthDocument = gql`
  query GetCategoryTotalByMonth(
    $fromDate: date
    $toDate: date
    $groupId: String!
  ) {
    categoryTotalByMonth(
      args: { from_date: $fromDate, to_date: $toDate, group_id: $groupId }
    ) {
      date
      iocomeType
      genreId
      genreName
      categoryId
      categoryName
      total
    }
  }
`;

export function useGetCategoryTotalByMonthQuery(
  options: Omit<
    Urql.UseQueryArgs<IGetCategoryTotalByMonthQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    IGetCategoryTotalByMonthQuery,
    IGetCategoryTotalByMonthQueryVariables
  >({ query: GetCategoryTotalByMonthDocument, ...options });
}
export const GetCreditCardDetailByIdDocument = gql`
  query GetCreditCardDetailById($id: String!) {
    creditCardDetailByPk: householdCreditCardDetailByPk(id: $id) {
      id
      date
      amount
      memo
      summaryId
      category {
        categoryId: id
        categoryName: name
        genre {
          genreId: id
          genreName: name
          genreType
          iocomeType
        }
      }
    }
  }
`;

export function useGetCreditCardDetailByIdQuery(
  options: Omit<
    Urql.UseQueryArgs<IGetCreditCardDetailByIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    IGetCreditCardDetailByIdQuery,
    IGetCreditCardDetailByIdQueryVariables
  >({ query: GetCreditCardDetailByIdDocument, ...options });
}
export const GetCreditCardDetailBySummaryIdDocument = gql`
  query GetCreditCardDetailBySummaryId($id: String!) {
    creditCardSummary: householdCreditCardSummaryByPk(id: $id) {
      id
      creditCard
      withdrawalDate
      account {
        id
        name
      }
      count
      totalAmount
      creditCardDetails(orderBy: { date: ASC }) {
        id
        date
        memo
        amount
        category {
          id
          name
          genre {
            id
            name
            genreType
            iocomeType
          }
        }
      }
    }
  }
`;

export function useGetCreditCardDetailBySummaryIdQuery(
  options: Omit<
    Urql.UseQueryArgs<IGetCreditCardDetailBySummaryIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    IGetCreditCardDetailBySummaryIdQuery,
    IGetCreditCardDetailBySummaryIdQueryVariables
  >({ query: GetCreditCardDetailBySummaryIdDocument, ...options });
}
export const GetCreditCardListDocument = gql`
  query GetCreditCardList($groupId: String!) {
    allCreditCardSummariesList: householdCreditCardSummary(
      where: { groupId: { _eq: $groupId } }
      orderBy: { withdrawalDate: DESC }
    ) {
      id
      creditCard
      account {
        id
        name
      }
      count
      withdrawalDate
      totalAmount
    }
  }
`;

export function useGetCreditCardListQuery(
  options: Omit<Urql.UseQueryArgs<IGetCreditCardListQueryVariables>, "query">,
) {
  return Urql.useQuery<
    IGetCreditCardListQuery,
    IGetCreditCardListQueryVariables
  >({ query: GetCreditCardListDocument, ...options });
}
export const GetCreditCardSummaryBetweenWithdrawalDateDocument = gql`
  query GetCreditCardSummaryBetweenWithdrawalDate(
    $fromDate: date!
    $toDate: date!
    $groupId: String!
  ) {
    allCreditCardSummariesList: householdCreditCardSummary(
      where: {
        withdrawalDate: { _gte: $fromDate }
        _and: {
          withdrawalDate: { _lte: $toDate }
          _and: { groupId: { _eq: $groupId } }
        }
      }
      orderBy: { withdrawalDate: ASC }
    ) {
      id
      withdrawalDate
      totalAmount
      creditCard
      accountByAccountId: account {
        accountId: id
        accountName: name
      }
    }
  }
`;

export function useGetCreditCardSummaryBetweenWithdrawalDateQuery(
  options: Omit<
    Urql.UseQueryArgs<IGetCreditCardSummaryBetweenWithdrawalDateQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    IGetCreditCardSummaryBetweenWithdrawalDateQuery,
    IGetCreditCardSummaryBetweenWithdrawalDateQueryVariables
  >({ query: GetCreditCardSummaryBetweenWithdrawalDateDocument, ...options });
}
export const GetCreditCardSummaryByAccountIdBetweenDateDocument = gql`
  query GetCreditCardSummaryByAccountIdBetweenDate(
    $fromDate: date!
    $toDate: date!
    $accountId: String!
  ) {
    allCreditCardSummariesList: householdCreditCardSummary(
      where: {
        withdrawalDate: { _gte: $fromDate }
        _and: {
          withdrawalDate: { _lte: $toDate }
          _and: { accountId: { _eq: $accountId } }
        }
      }
      orderBy: { withdrawalDate: ASC }
    ) {
      id
      withdrawalDate
      totalAmount
      creditCard
      accountByAccountId: account {
        accountId: id
        accountName: name
      }
    }
  }
`;

export function useGetCreditCardSummaryByAccountIdBetweenDateQuery(
  options: Omit<
    Urql.UseQueryArgs<IGetCreditCardSummaryByAccountIdBetweenDateQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    IGetCreditCardSummaryByAccountIdBetweenDateQuery,
    IGetCreditCardSummaryByAccountIdBetweenDateQueryVariables
  >({ query: GetCreditCardSummaryByAccountIdBetweenDateDocument, ...options });
}
export const GetDailyDetailByDateDocument = gql`
  query GetDailyDetailByDate(
    $fromDate: date!
    $toDate: date!
    $groupId: String!
  ) {
    dailyDetailByDateList: dailyDetailByDate(
      args: { from_date: $fromDate, to_date: $toDate, group_id: $groupId }
    ) {
      id
      date
      amount
      memo
      categoryByCategoryId: category {
        categoryId: id
        categoryName: name
        genreByGenreId: genre {
          genreId: id
          genreName: name
          genreType
          iocomeType
        }
      }
      accountByAccountId: account {
        accountId: id
        accountName: name
      }
      userByUserId: user {
        userId: id
        userName: name
      }
    }
  }
`;

export function useGetDailyDetailByDateQuery(
  options: Omit<
    Urql.UseQueryArgs<IGetDailyDetailByDateQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    IGetDailyDetailByDateQuery,
    IGetDailyDetailByDateQueryVariables
  >({ query: GetDailyDetailByDateDocument, ...options });
}
export const GetDailyDetailByDateAccountIdDocument = gql`
  query GetDailyDetailByDateAccountId(
    $fromDate: date!
    $toDate: date!
    $accountId: String!
    $groupId: String!
  ) {
    dailyDetailByDateList: dailyDetailByDate(
      args: { group_id: $groupId, from_date: $fromDate, to_date: $toDate }
      where: { accountId: { _eq: $accountId } }
    ) {
      id
      date
      amount
      memo
      categoryByCategoryId: category {
        categoryId: id
        categoryName: name
        genreByGenreId: genre {
          genreId: id
          genreName: name
          genreType
          iocomeType
        }
      }
      accountByAccountId: account {
        accountId: id
        accountName: name
      }
      userByUserId: user {
        userId: id
        userName: name
      }
    }
  }
`;

export function useGetDailyDetailByDateAccountIdQuery(
  options: Omit<
    Urql.UseQueryArgs<IGetDailyDetailByDateAccountIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    IGetDailyDetailByDateAccountIdQuery,
    IGetDailyDetailByDateAccountIdQueryVariables
  >({ query: GetDailyDetailByDateAccountIdDocument, ...options });
}
export const GetDailyDetailByDateCategoryIdDocument = gql`
  query GetDailyDetailByDateCategoryId(
    $fromDate: date!
    $toDate: date!
    $groupId: String!
    $categoryId: String!
  ) {
    dailyDetailByDateList: dailyDetailByDate(
      args: { from_date: $fromDate, to_date: $toDate, group_id: $groupId }
      where: { categoryId: { _eq: $categoryId } }
    ) {
      id
      date
      amount
      memo
      categoryByCategoryId: category {
        categoryId: id
        categoryName: name
        genreByGenreId: genre {
          genreId: id
          genreName: name
          genreType
          iocomeType
        }
      }
      accountByAccountId: account {
        accountId: id
        accountName: name
      }
      userByUserId: user {
        userId: id
        userName: name
      }
    }
  }
`;

export function useGetDailyDetailByDateCategoryIdQuery(
  options: Omit<
    Urql.UseQueryArgs<IGetDailyDetailByDateCategoryIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    IGetDailyDetailByDateCategoryIdQuery,
    IGetDailyDetailByDateCategoryIdQueryVariables
  >({ query: GetDailyDetailByDateCategoryIdDocument, ...options });
}
export const GetDailyDetailByDateGenreIdDocument = gql`
  query GetDailyDetailByDateGenreId(
    $genreId: String!
    $fromDate: date!
    $toDate: date!
    $groupId: String!
  ) {
    allCategoriesList: householdCategory(
      where: { genreId: { _eq: $genreId } }
    ) {
      dailyDetailsByCategoryIdList: dailyDetails(
        where: {
          date: { _gte: $fromDate }
          _and: {
            date: { _lte: $toDate }
            _and: { groupId: { _eq: $groupId } }
          }
        }
      ) {
        id
        date
        amount
        memo
        categoryByCategoryId: category {
          categoryId: id
          categoryName: name
          genreByGenreId: genre {
            genreId: id
            genreName: name
            genreType
            iocomeType
          }
        }
        accountByAccountId: account {
          accountId: id
          accountName: name
        }
        userByUserId: user {
          userId: id
          userName: name
        }
      }
    }
  }
`;

export function useGetDailyDetailByDateGenreIdQuery(
  options: Omit<
    Urql.UseQueryArgs<IGetDailyDetailByDateGenreIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    IGetDailyDetailByDateGenreIdQuery,
    IGetDailyDetailByDateGenreIdQueryVariables
  >({ query: GetDailyDetailByDateGenreIdDocument, ...options });
}
export const GetGenreByIdDocument = gql`
  query GetGenreById($genreId: String!) {
    genreById: householdGenreByPk(id: $genreId) {
      id
      genreName: name
      genreType
      iocomeType
      validFlag
      displayOrder
      categories(where: { validFlag: { _eq: true } }) {
        categoryId: id
        categoryName: name
      }
    }
  }
`;

export function useGetGenreByIdQuery(
  options: Omit<Urql.UseQueryArgs<IGetGenreByIdQueryVariables>, "query">,
) {
  return Urql.useQuery<IGetGenreByIdQuery, IGetGenreByIdQueryVariables>({
    query: GetGenreByIdDocument,
    ...options,
  });
}
export const GetGenreTotalByMonthDocument = gql`
  query GetGenreTotalByMonth(
    $fromDate: date!
    $toDate: date!
    $groupId: String!
  ) {
    genreTotalByMonthList: genreTotalByMonth(
      args: { from_date: $fromDate, to_date: $toDate, group_id: $groupId }
    ) {
      date
      iocomeType
      genreId
      genreName
      total
    }
  }
`;

export function useGetGenreTotalByMonthQuery(
  options: Omit<
    Urql.UseQueryArgs<IGetGenreTotalByMonthQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    IGetGenreTotalByMonthQuery,
    IGetGenreTotalByMonthQueryVariables
  >({ query: GetGenreTotalByMonthDocument, ...options });
}
export const GetSummaryCategoriesDocument = gql`
  query GetSummaryCategories($groupId: String!) {
    categories: householdSummaryCategory(
      where: { groupId: { _eq: $groupId } }
      orderBy: { displayOrder: ASC }
    ) {
      id
      groupId
      displayOrder
      category: category {
        id
        name
        genre: genre {
          id
          name
          type: genreType
          iocomeType
        }
      }
    }
  }
`;

export function useGetSummaryCategoriesQuery(
  options: Omit<
    Urql.UseQueryArgs<IGetSummaryCategoriesQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    IGetSummaryCategoriesQuery,
    IGetSummaryCategoriesQueryVariables
  >({ query: GetSummaryCategoriesDocument, ...options });
}
export const GetSummaryCategoryBetweenDateDocument = gql`
  query GetSummaryCategoryBetweenDate(
    $fromDate: date!
    $toDate: date!
    $groupId: String!
  ) {
    summaryCategoryList: householdSummaryCategory(
      orderBy: { displayOrder: ASC }
      where: { groupId: { _eq: $groupId } }
    ) {
      category {
        name
        id
        genre {
          iocomeType
        }
        daily: dailyDetails(
          where: {
            groupId: { _eq: $groupId }
            _and: {
              date: { _gte: $fromDate }
              _and: { date: { _lte: $toDate } }
            }
          }
          orderBy: { date: ASC }
        ) {
          date
          amount
        }
        creditCard: creditCardDetails(
          where: {
            groupId: { _eq: $groupId }
            _and: {
              date: { _gte: $fromDate }
              _and: { date: { _lte: $toDate } }
            }
          }
          orderBy: { date: ASC }
        ) {
          date
          amount
        }
      }
    }
  }
`;

export function useGetSummaryCategoryBetweenDateQuery(
  options: Omit<
    Urql.UseQueryArgs<IGetSummaryCategoryBetweenDateQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    IGetSummaryCategoryBetweenDateQuery,
    IGetSummaryCategoryBetweenDateQueryVariables
  >({ query: GetSummaryCategoryBetweenDateDocument, ...options });
}
export const GetTotalBetweenDateDocument = gql`
  query GetTotalBetweenDate(
    $fromDate: date!
    $toDate: date!
    $groupId: String!
  ) {
    incomeTotalByDate: householdDailyTotalView(
      where: {
        iocomeType: { _eq: "INCOME" }
        _and: {
          groupId: { _eq: $groupId }
          _and: { date: { _gte: $fromDate }, _and: { date: { _lte: $toDate } } }
        }
      }
    ) {
      date
      iocomeType
      total
    }
    outcomeTotalByDate: householdDailyTotalView(
      where: {
        iocomeType: { _eq: "OUTCOME" }
        _and: {
          groupId: { _eq: $groupId }
          _and: { date: { _gte: $fromDate }, _and: { date: { _lte: $toDate } } }
        }
      }
    ) {
      date
      iocomeType
      total
    }
  }
`;

export function useGetTotalBetweenDateQuery(
  options: Omit<Urql.UseQueryArgs<IGetTotalBetweenDateQueryVariables>, "query">,
) {
  return Urql.useQuery<
    IGetTotalBetweenDateQuery,
    IGetTotalBetweenDateQueryVariables
  >({ query: GetTotalBetweenDateDocument, ...options });
}
export const GetTransferCategoryByDocument = gql`
  query GetTransferCategoryBy($groupId: String!) {
    transferCategory: householdTransferCategoryByPk(groupId: $groupId) {
      id: groupId
      incomeCategory: categoryByIncomeCategoryId {
        categoryId: id
        genre {
          genreId: id
          iocomeType
        }
      }
      outcomeCategory: categoryByOutcomeCategoryId {
        categoryId: id
        genre {
          genreId: id
          iocomeType
        }
      }
    }
  }
`;

export function useGetTransferCategoryByQuery(
  options: Omit<
    Urql.UseQueryArgs<IGetTransferCategoryByQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    IGetTransferCategoryByQuery,
    IGetTransferCategoryByQueryVariables
  >({ query: GetTransferCategoryByDocument, ...options });
}
export const GetUserByEmailDocument = gql`
  query GetUserByEmail($email: String!) {
    userByEmail: user(where: { email: { _eq: $email } }) {
      email
      id
      name
      affiliation: affiliations {
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
  options: Omit<Urql.UseQueryArgs<IGetUserByEmailQueryVariables>, "query">,
) {
  return Urql.useQuery<IGetUserByEmailQuery, IGetUserByEmailQueryVariables>({
    query: GetUserByEmailDocument,
    ...options,
  });
}
export const GetValidAccountsDocument = gql`
  query GetValidAccounts($groupId: String!) {
    allAccountsList: householdAccount(
      where: { validFlag: { _eq: true }, _and: { groupId: { _eq: $groupId } } }
      orderBy: { displayOrder: ASC }
    ) {
      accountId: id
      accountName: name
    }
  }
`;

export function useGetValidAccountsQuery(
  options: Omit<Urql.UseQueryArgs<IGetValidAccountsQueryVariables>, "query">,
) {
  return Urql.useQuery<IGetValidAccountsQuery, IGetValidAccountsQueryVariables>(
    { query: GetValidAccountsDocument, ...options },
  );
}
export const GetValidCategoryByGenreIdDocument = gql`
  query GetValidCategoryByGenreId($groupId: String!, $genreId: String) {
    genreById: householdGenre(
      where: {
        groupId: { _eq: $groupId }
        _and: { validFlag: { _eq: true }, _and: { id: { _eq: $genreId } } }
      }
      orderBy: { displayOrder: ASC }
    ) {
      id
      name
      categories(where: { validFlag: { _eq: true } }) {
        id
        name
        displayOrder
      }
    }
  }
`;

export function useGetValidCategoryByGenreIdQuery(
  options: Omit<
    Urql.UseQueryArgs<IGetValidCategoryByGenreIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    IGetValidCategoryByGenreIdQuery,
    IGetValidCategoryByGenreIdQueryVariables
  >({ query: GetValidCategoryByGenreIdDocument, ...options });
}
export const GetValidGenreListByIocomeTypeDocument = gql`
  query GetValidGenreListByIocomeType($iocomeType: String!, $groupId: String!) {
    allGenresList: householdGenre(
      where: {
        validFlag: { _eq: true }
        iocomeType: { _eq: $iocomeType }
        groupId: { _eq: $groupId }
      }
      orderBy: { displayOrder: ASC }
    ) {
      genreId: id
      genreName: name
      genreType
      iocomeType
      displayOrder
      categoriesByGenreIdList: categories(
        orderBy: { displayOrder: ASC }
        where: { validFlag: { _eq: true } }
      ) {
        categoryId: id
        categoryName: name
        displayOrder
      }
    }
  }
`;

export function useGetValidGenreListByIocomeTypeQuery(
  options: Omit<
    Urql.UseQueryArgs<IGetValidGenreListByIocomeTypeQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    IGetValidGenreListByIocomeTypeQuery,
    IGetValidGenreListByIocomeTypeQueryVariables
  >({ query: GetValidGenreListByIocomeTypeDocument, ...options });
}
export const GetDepositDocument = gql`
  query getDeposit($groupId: String!, $fromDate: date!, $toDate: date!) {
    depositCategory: householdDepositCategory(
      where: { groupId: { _eq: $groupId } }
    ) {
      category {
        id
        categoryName: name
        daily: dailyDetailsAggregate(
          orderBy: { date: ASC }
          where: {
            date: { _gte: $fromDate }
            _and: { date: { _lte: $toDate } }
          }
        ) {
          aggregate {
            count
            sum {
              amount
            }
            avg {
              amount
            }
          }
          nodes {
            id
            date
            amount
            memo
          }
        }
        credit: creditCardDetailsAggregate(
          orderBy: { date: ASC }
          where: {
            date: { _gte: $fromDate }
            _and: { date: { _lte: $toDate } }
          }
        ) {
          aggregate {
            count
            sum {
              amount
            }
            avg {
              amount
            }
          }
          nodes {
            id
            date
            amount
            memo
          }
        }
      }
    }
  }
`;

export function useGetDepositQuery(
  options: Omit<Urql.UseQueryArgs<IGetDepositQueryVariables>, "query">,
) {
  return Urql.useQuery<IGetDepositQuery, IGetDepositQueryVariables>({
    query: GetDepositDocument,
    ...options,
  });
}
