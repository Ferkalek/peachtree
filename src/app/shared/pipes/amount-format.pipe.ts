import { Pipe, PipeTransform } from "@angular/core";
import { TransactionIndicator } from "src/app/transactions/transactions.interfaces";

@Pipe({
  name: "amountFormat",
})
export class AmountFormatPipe implements PipeTransform {
  transform(value: string | number, transactionIndicator: any): string {
    if (transactionIndicator === TransactionIndicator.Credit) {
      return "$" + value;
    }

    return "-$" + value;
  }
}
