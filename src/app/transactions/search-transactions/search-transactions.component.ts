import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngxs/store";
import { SearchTransactionsAction } from "../actions/transactions.actions";

@Component({
  selector: "ptb-search-transactions",
  templateUrl: "./search-transactions.component.html",
  styleUrls: ["./search-transactions.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchTransactionsComponent implements OnInit {
  public searchQuery: string = "";

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onSearch() {
    this.store.dispatch(new SearchTransactionsAction(this.searchQuery));
  }

  clear() {
    this.searchQuery = "";
    this.onSearch();
  }
}
