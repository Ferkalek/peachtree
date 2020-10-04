import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { TransactionsState } from "../state/transaction.state";
import { ITransactionsDTO } from "../transactions.interfaces";

@Component({
  selector: "ptb-transactions-list",
  templateUrl: "./transactions-list.component.html",
  styleUrls: ["./transactions-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsListComponent {
  @Select(TransactionsState.filteredAndSortedTransactions)
  readonly transactions$: Observable<ITransactionsDTO[]>;
}
