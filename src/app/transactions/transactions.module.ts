import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TransactionsComponent } from "./transactions.component";
import { TransactionsListComponent } from "./transactions-list/transactions-list.component";
import { TransactionComponent } from "./transaction/transaction.component";
import { TransferFormComponent } from "./transfer-form/transfer-form.component";
import { NgxsModule } from "@ngxs/store";
import { TransactionsState } from "./state/transaction.state";
import { DateParsPipe } from "../shared/pipes/date-pars.pipe";
import { AmountFormatPipe } from "../shared/pipes/amount-format.pipe";
import { FilterTransactionsComponent } from "./filter-transactions/filter-transactions.component";
import { SearchTransactionsComponent } from "./search-transactions/search-transactions.component";

@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionsListComponent,
    TransactionComponent,
    TransferFormComponent,
    DateParsPipe,
    AmountFormatPipe,
    FilterTransactionsComponent,
    SearchTransactionsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([TransactionsState]),
  ],
})
export class TransactionsModule {}
