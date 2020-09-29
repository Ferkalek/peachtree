import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { TransactionsService } from "./transactions.service";

@Component({
  selector: "ptb-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsComponent implements OnInit {
  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.transactionsService.getData().subscribe((d) => console.log("....", d));
  }
}
