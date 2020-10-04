import { SortDirection, SortingTypes } from "./sorting.enum";

export interface ISortCollection {
  [SortingTypes.DateSort]: SortDirection;
  [SortingTypes.BeneficiarySort]: SortDirection;
  [SortingTypes.AmountSort]: SortDirection;
}
