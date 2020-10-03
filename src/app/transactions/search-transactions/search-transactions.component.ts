import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "ptb-search-transactions",
  templateUrl: "./search-transactions.component.html",
  styleUrls: ["./search-transactions.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchTransactionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  clear() {
    console.log("...clear works");
  }
}
