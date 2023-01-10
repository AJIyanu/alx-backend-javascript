/// <reference types="./crud" />
import { RowElement, RowID } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName : "Guillaume",
  lastName : "Salva"
}

const newRowID:RowID = CRUD.insertRow(row);

const updatedRow: RowElement = row;
updatedRow.age = 23;

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
