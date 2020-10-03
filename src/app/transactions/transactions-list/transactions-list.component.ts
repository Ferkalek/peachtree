import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
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
export class TransactionsListComponent implements OnInit {
  @Select(TransactionsState.transactions) readonly transactions$: Observable<
    ITransactionsDTO[]
  >;

  constructor() {}

  ngOnInit(): void {}
}
