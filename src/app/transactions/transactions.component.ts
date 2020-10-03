import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngxs/store";
import { ASubscriptionCollector } from "../shared/abstract-classes/subscription-collector.abstract-class";
import { AddTransactionsActions } from "./actions/transactions.actions";
import { ITransactionsDTO } from "./transactions.interfaces";
import { TransactionsService } from "./transactions.service";

@Component({
  selector: "ptb-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsComponent extends ASubscriptionCollector {
  constructor(
    private transactionsService: TransactionsService,
    private store: Store
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.transactionsService
        .getData()
        .subscribe((transactions: ITransactionsDTO[]) => {
          this.store.dispatch(new AddTransactionsActions(transactions));
        })
    );
  }
}
