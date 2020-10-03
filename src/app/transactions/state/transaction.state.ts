import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { ITransactionsDTO } from "../transactions.interfaces";
import { AddTransactionsActions } from "../actions/transactions.actions";

export class TransactionsStateModel {
  transactions: ITransactionsDTO[];
}
@State<TransactionsStateModel>({
  name: "transactions",
  defaults: {
    transactions: [],
  },
})
@Injectable()
export class TransactionsState {
  @Selector()
  static transactions(state: TransactionsStateModel): ITransactionsDTO[] {
    return state.transactions;
  }

  @Action(AddTransactionsActions)
  AddTransactions(
    { getState, setState }: StateContext<TransactionsStateModel>,
    { transactions }: AddTransactionsActions
  ) {
    const state = getState();
    console.log("....", state);

    setState({
      transactions: [...state.transactions, ...transactions],
    });
  }
}
