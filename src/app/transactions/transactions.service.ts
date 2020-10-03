import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
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
      .pipe(map((res) => res.data));
  }
}
