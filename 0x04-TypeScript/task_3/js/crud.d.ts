import { RowID, RowElement } from "./interface";

interface insertRowinterface {
  (row:RowElement):number;
}

interface deleterowinterface {
  (rowId:RowID): void;
}

interface updaterowinterface {
  (rowid:RowID, row:RowElement): RowID
}
