import { convertToAccounts, totalBalance } from "./parseToAccounts";

describe("convertToAccounts", () => {
  it("should convert data to accounts", () => {
    const data: Parameters<typeof convertToAccounts>[0] = {
      account: [
        {
          __typename: "HouseholdAccount",
          id: "1",
          accountName: "account1",
          allDetailViewsAggregate: {
            aggregate: {
              sum: {
                signedAmount: 100,
              },
            },
          },
        },
        {
          __typename: "HouseholdAccount",
          id: "2",
          accountName: "account2",
          allDetailViewsAggregate: {
            aggregate: {
              sum: {
                signedAmount: 200,
              },
            },
          },
        },
      ],
    };

    const actual = convertToAccounts(data);

    expect(actual).toEqual([
      {
        id: "1",
        accountName: "account1",
        balance: 100,
      },
      {
        id: "2",
        accountName: "account2",
        balance: 200,
      },
    ]);
  });
});

describe("totalBalance", () => {
  it("should calculate total balance", () => {
    const data: Parameters<typeof convertToAccounts>[0] = {
      account: [
        {
          __typename: "HouseholdAccount",
          id: "1",
          accountName: "account1",
          allDetailViewsAggregate: {
            aggregate: {
              sum: {
                __typename: "HouseholdAllDetailViewSumFields",
                signedAmount: 100,
              },
            },
          },
        },
        {
          __typename: "HouseholdAccount",
          id: "2",
          accountName: "account2",
          allDetailViewsAggregate: {
            aggregate: {
              sum: {
                __typename: "HouseholdAllDetailViewSumFields",
                signedAmount: 200,
              },
            },
          },
        },
      ],
    };

    const actual = totalBalance(data);

    expect(actual).toBe(300);
  });
});
