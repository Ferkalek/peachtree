import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DesignPageComponent } from "./design-page/design-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { TransactionsComponent } from "./transactions/transactions.component";

const routes: Routes = [
  { path: "", component: TransactionsComponent },
  { path: "design", component: DesignPageComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
