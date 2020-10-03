import { ITransactionsDTO } from "../transactions.interfaces";

export class AddTransactionsActions {
  static readonly type = "[Transactions] Add Transactions";

  constructor(public readonly transactions: ITransactionsDTO[]) {
    console.log("--- transactions", transactions);
  }
}
