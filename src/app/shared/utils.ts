import { ITransactionsDTO } from "../transactions/transactions.interfaces";
import { ISortCollection } from "./sort-collection.interface";
import { SortDirection } from "./sorting.enum";

export function filteredTransactions(
  transactions: ITransactionsDTO[],
  query: string
): ITransactionsDTO[] {
  return query
    ? transactions.filter(
        (t) =>
          t.transaction.type.toLowerCase().includes(query) ||
          t.merchant.name.toLowerCase().includes(query)
      )
    : transactions;
}

export function sortedTransactionsByDate(
  transactions: ITransactionsDTO[],
  sortProperties: ISortCollection
): ITransactionsDTO[] {
  const newTransactions = [...transactions];
  if (sortProperties.dateSort === SortDirection.Ascending) {
    newTransactions.sort(function (a, b) {
      return Number(a.dates.valueDate) - Number(b.dates.valueDate);
    });
  } else if (sortProperties.dateSort === SortDirection.Descending) {
    newTransactions.sort(function (a, b) {
      return Number(b.dates.valueDate) - Number(a.dates.valueDate);
    });
  }
  return [...newTransactions];
}

export function sortedTransactionsByBeneficiary(
  transactions: ITransactionsDTO[],
  sortProperties: ISortCollection
): ITransactionsDTO[] {
  const newTransactions = [...transactions];
  if (sortProperties.beneficiarySort === SortDirection.Ascending) {
    newTransactions.sort(function (a, b) {
      if (a.merchant.name > b.merchant.name) {
        return 1;
      }
      if (a.merchant.name < b.merchant.name) {
        return -1;
      }
      return 0;
    });
  } else if (sortProperties.beneficiarySort === SortDirection.Descending) {
    newTransactions.sort(function (a, b) {
      if (a.merchant.name < b.merchant.name) {
        return 1;
      }
      if (a.merchant.name > b.merchant.name) {
        return -1;
      }
      return 0;
    });
  }
  return [...newTransactions];
}

export function sortedTransactionsByAmount(
  transactions: ITransactionsDTO[],
  sortProperties: ISortCollection
): ITransactionsDTO[] {
  const newTransactions = [...transactions];
  if (sortProperties.amountSort === SortDirection.Ascending) {
    newTransactions.sort(function (a, b) {
      return (
        a.transaction.amountCurrency.amount -
        b.transaction.amountCurrency.amount
      );
    });
  } else if (sortProperties.amountSort === SortDirection.Descending) {
    newTransactions.sort(function (a, b) {
      return (
        b.transaction.amountCurrency.amount -
        a.transaction.amountCurrency.amount
      );
    });
  }
  return [...newTransactions];
}
