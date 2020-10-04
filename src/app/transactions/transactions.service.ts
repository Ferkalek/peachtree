import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { TransactionsDTO } from "./transactions.class";
import { transactions } from "./transactions.const";
import { ITransactionsDTO } from "./transactions.interfaces";

@Injectable({
  providedIn: "root",
})
export class TransactionsService {
  constructor(private http: HttpClient) {}

  getData(): Observable<ITransactionsDTO[]> {
    return this.http
      .get<{ data: ITransactionsDTO[] }>(
        `${environment.baseUrl}${environment.apiPrefex}${transactions}`
      )
      .pipe(
        map((res) => {
          return res.data.map((t: ITransactionsDTO) => {
            return {
              ...t,
              dates: {
                valueDate:
                  typeof t.dates.valueDate === "string"
                    ? Date.parse(t.dates.valueDate)
                    : t.dates.valueDate,
              },
              transaction: {
                ...t.transaction,
                amountCurrency: {
                  ...t.transaction.amountCurrency,
                  amount: t.transaction.amountCurrency.amount * 1,
                },
              },
            };
          });
        })
      );
  }

  sendTransfer(amount: number): Observable<ITransactionsDTO> {
    // here is functionality sending a transfer to server
    return of(new TransactionsDTO(amount));
  }
}
