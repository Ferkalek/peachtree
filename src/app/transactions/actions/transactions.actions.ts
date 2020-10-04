import { ISortCollection } from "src/app/shared/sort-collection.interface";
import { ITransactionsDTO } from "../transactions.interfaces";

export class AddTransactionsActions {
  static readonly type = "[Transactions] Add Transactions";

  constructor(public readonly transactions: ITransactionsDTO[]) {}
}

export class CreateTransactionAction {
  static readonly type = "[Transaction] Create Transaction";

  constructor(public readonly transaction: ITransactionsDTO) {}
}

export class SearchTransactionsAction {
  static readonly type = "[Transactions] Search Transactions";

  constructor(public readonly searchQuery: string) {}
}

export class SortTransactionsAction {
  static readonly type = "[Transactions] Sort Transactions";

  constructor(public readonly sortCollection: ISortCollection) {}
}
