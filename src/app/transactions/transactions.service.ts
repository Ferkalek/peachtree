import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TransactionsService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>("http://localhost:3030/api/transactions");
  }
}
