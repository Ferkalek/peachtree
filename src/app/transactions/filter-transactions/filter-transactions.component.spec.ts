import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NgxsModule } from "@ngxs/store";
import { TransactionsState } from "../state/transaction.state";

import { FilterTransactionsComponent } from "./filter-transactions.component";
describe("FilterTransactionsComponent", () => {
  let component: FilterTransactionsComponent;
  let fixture: ComponentFixture<FilterTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterTransactionsComponent],
      imports: [NgxsModule.forRoot([TransactionsState])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
