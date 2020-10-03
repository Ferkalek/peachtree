type DatesType = string | number;

export enum TransactionIndicator {
  Credit = "CRDT",
  Debit = "DBIT",
}

interface IDates {
  valueDate: DatesType;
}

interface IAmountCurrency {
  amount: number;
  currencyCode: string;
}

interface ITransaction {
  amountCurrency: IAmountCurrency;
  type: string;
  creditDebitIndicator?: TransactionIndicator;
}

interface IMerchant {
  name: string;
  accountNumber: string;
  image: string;
}

export interface ITransactionsDTO {
  categoryCode: string;
  dates: IDates;
  transaction: ITransaction;
  merchant: IMerchant;
}
