import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngxs/store";
import { ISortCollection } from "src/app/shared/sort-collection.interface";
import { SortingTypes, SortDirection } from "src/app/shared/sorting.enum";
import { SortTransactionsAction } from "../actions/transactions.actions";

@Component({
  selector: "ptb-filter-transactions",
  templateUrl: "./filter-transactions.component.html",
  styleUrls: ["./filter-transactions.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterTransactionsComponent implements OnInit {
  public dateSort: SortingTypes = SortingTypes.DateSort;
  public beneficiarySort: SortingTypes = SortingTypes.BeneficiarySort;
  public amountSort: SortingTypes = SortingTypes.AmountSort;

  public sortCollection: ISortCollection = {
    [SortingTypes.DateSort]: SortDirection.None,
    [SortingTypes.BeneficiarySort]: SortDirection.None,
    [SortingTypes.AmountSort]: SortDirection.None,
  };

  constructor(private store: Store) {}

  ngOnInit(): void {}

  public onSort(sortBy: SortingTypes): void {
    if (this.sortCollection[sortBy] === SortDirection.None) {
      this.sortCollection[sortBy] = SortDirection.Ascending;
    } else if (this.sortCollection[sortBy] === SortDirection.Ascending) {
      this.sortCollection[sortBy] = SortDirection.Descending;
    } else {
      this.sortCollection[sortBy] = SortDirection.None;
    }

    this.store.dispatch(new SortTransactionsAction(this.sortCollection));
  }

  public getMarker(sortBy: SortingTypes): string {
    return this.sortCollection[sortBy] !== SortDirection.None
      ? `sort-${this.sortCollection[sortBy].toLowerCase()}`
      : "";
  }
}
