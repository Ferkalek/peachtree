import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import {
  UntypedFormGroup,
  Validators,
  UntypedFormBuilder,
  AbstractControl,
  ValidatorFn,
} from "@angular/forms";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { ASubscriptionCollector } from "src/app/shared/abstract-classes/subscription-collector.abstract-class";
import { CreateTransactionAction } from "../actions/transactions.actions";
import { TransactionsState } from "../state/transaction.state";
import {
  ITransactionsDTO,
  TransactionIndicator,
} from "../transactions.interfaces";
import { TransactionsService } from "../transactions.service";

@Component({
  selector: "ptb-transfer-form",
  templateUrl: "./transfer-form.component.html",
  styleUrls: ["./transfer-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransferFormComponent extends ASubscriptionCollector {
  @Select(TransactionsState.transactions) readonly transactions$: Observable<
    ITransactionsDTO[]
  >;

  public accountBalans: number = 0;

  public transferForm: UntypedFormGroup = this.fb.group({
    fromAccount: [{ value: "", disabled: true }],
    toAccount: [{ value: "Georgia Power Electric Company", disabled: true }],
    amount: [
      "",
      [
        Validators.required,
        Validators.pattern("^[0-9]+(.?[0-9]+)?$"),
        this.balansValidator(),
      ],
    ],
  });

  constructor(
    private fb: UntypedFormBuilder,
    private transactionsService: TransactionsService,
    private store: Store
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.transactions$.subscribe((transactions: ITransactionsDTO[]) => {
        this.accountBalans =
          Math.round(
            transactions.reduce(
              (accountBalans: number, t: ITransactionsDTO) => {
                return t.transaction.creditDebitIndicator ===
                  TransactionIndicator.Credit
                  ? accountBalans +
                      Number(t.transaction.amountCurrency.amount) * 100
                  : accountBalans -
                      Number(t.transaction.amountCurrency.amount) * 100;
              },
              0
            )
          ) / 100;

        this.transferForm.patchValue({
          fromAccount: `Free Checking(4692) - $${this.accountBalans}`,
        });
      })
    );
  }

  public sendTransfer() {
    this.subscriptions.push(
      this.transactionsService
        .sendTransfer(this.transferForm.value.amount)
        .subscribe(
          (transaction: ITransactionsDTO) => {
            this.store.dispatch(new CreateTransactionAction(transaction));
            this.transferForm.reset();
            this.transferForm.patchValue({
              fromAccount: `Free Checking(4692) - $${this.accountBalans}`,
              toAccount: "Georgia Power Electric Company",
            });
          },
          (err) => {
            console.log("Error", err);
          }
        )
    );
  }

  public getField(field: string) {
    return this.transferForm.get(field);
  }

  private balansValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let forbidden = false;

      if (control.value) {
        forbidden = this.accountBalans - control.value < 0;
      }
      return forbidden ? { invalidBalans: true } : null;
    };
  }
}
