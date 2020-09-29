import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransferFormComponent } from './transfer-form/transfer-form.component';



@NgModule({
  declarations: [TransactionsComponent, TransactionsListComponent, TransactionComponent, TransferFormComponent],
  imports: [
    CommonModule
  ]
})
export class TransactionsModule { }
