import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { ITransactionsDTO } from "../transactions.interfaces";

@Component({
  selector: "ptb-transaction",
  templateUrl: "./transaction.component.html",
  styleUrls: ["./transaction.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionComponent implements OnInit {
  @Input() public transaction: ITransactionsDTO;

  constructor() {}

  ngOnInit(): void {}
}
