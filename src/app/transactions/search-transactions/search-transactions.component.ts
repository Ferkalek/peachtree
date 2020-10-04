import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngxs/store";
import { SearchTransactionsAction } from "../actions/transactions.actions";

@Component({
  selector: "ptb-search-transactions",
  templateUrl: "./search-transactions.component.html",
  styleUrls: ["./search-transactions.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchTransactionsComponent {
  public searchQuery: string = "";

  constructor(private store: Store) {}

  public onSearch(): void {
    this.store.dispatch(new SearchTransactionsAction(this.searchQuery));
  }

  public clear(): void {
    this.searchQuery = "";
    this.onSearch();
  }
}
