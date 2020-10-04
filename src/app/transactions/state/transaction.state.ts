import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { ITransactionsDTO } from "../transactions.interfaces";
import {
  AddTransactionsActions,
  CreateTransactionAction,
  SearchTransactionsAction,
  SortTransactionsAction,
} from "../actions/transactions.actions";
import { ISortCollection } from "src/app/shared/sort-collection.interface";
import { SortDirection, SortingTypes } from "src/app/shared/sorting.enum";
import {
  filteredTransactions,
  sortedTransactionsByDate,
  sortedTransactionsByBeneficiary,
  sortedTransactionsByAmount,
} from "../../shared/utils";

export class TransactionsStateModel {
  transactions: ITransactionsDTO[];
  searchQuery: string;
  sortParameters: ISortCollection;
}
@State<TransactionsStateModel>({
  name: "transactions",
  defaults: {
    transactions: [],
    searchQuery: "",
    sortParameters: {
      [SortingTypes.DateSort]: SortDirection.None,
      [SortingTypes.BeneficiarySort]: SortDirection.None,
      [SortingTypes.AmountSort]: SortDirection.None,
    },
  },
})
@Injectable()
export class TransactionsState {
  @Selector()
  static transactions(state: TransactionsStateModel): ITransactionsDTO[] {
    return state.transactions;
  }

  @Selector()
  static filteredAndSortedTransactions(
    state: TransactionsStateModel
  ): ITransactionsDTO[] {
    const filtered = filteredTransactions(
      state.transactions,
      state.searchQuery
    );

    const sortedByDate = sortedTransactionsByDate(
      filtered,
      state.sortParameters
    );

    const sortedByBeneficiary = sortedTransactionsByBeneficiary(
      sortedByDate,
      state.sortParameters
    );

    const sortedByAmount = sortedTransactionsByAmount(
      sortedByBeneficiary,
      state.sortParameters
    );

    return sortedByAmount;
  }

  @Action(AddTransactionsActions)
  AddTransactions(
    { getState, patchState }: StateContext<TransactionsStateModel>,
    { transactions }: AddTransactionsActions
  ) {
    const state = getState();

    patchState({
      transactions: [...state.transactions, ...transactions],
    });
  }

  @Action(CreateTransactionAction)
  CreateTransaction(
    { getState, patchState }: StateContext<TransactionsStateModel>,
    { transaction }: CreateTransactionAction
  ) {
    const state = getState();

    patchState({
      transactions: [{ ...transaction }, ...state.transactions],
    });
  }

  @Action(SearchTransactionsAction)
  SearchTransactions(
    { patchState }: StateContext<TransactionsStateModel>,
    { searchQuery }: SearchTransactionsAction
  ) {
    patchState({
      searchQuery: searchQuery.toLowerCase(),
    });
  }

  @Action(SortTransactionsAction)
  SortTransactions(
    { patchState }: StateContext<TransactionsStateModel>,
    { sortCollection }: SortTransactionsAction
  ) {
    patchState({
      sortParameters: { ...sortCollection },
    });
  }
}
