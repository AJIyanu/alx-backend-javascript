/// <reference types="./crud" />
import { RowElement, RowID } from "./interface";
import * as CRUD from "./crud.js";
import { insertRow } from "./crud";

const row: RowElement {
  firstName = "Guillaume",
  lastName = "Salva"
}

const newRowID: RowID = insertRow;
