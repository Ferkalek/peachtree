import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "amountFormat",
})
export class AmountFormatPipe implements PipeTransform {
  transform(value: string | number, transactionIndicator: any): string {
    if (transactionIndicator !== "DBIT") {
      return "$" + value;
    }

    return "-$" + value;
  }
}
