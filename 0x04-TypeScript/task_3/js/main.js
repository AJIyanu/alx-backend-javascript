"use strict";
exports.__esModule = true;
var CRUD = require("./crud.js");
var row = {
    firstName: "Guillaume",
    lastName: "Salva"
};
var newRowID = CRUD.insertRow(row);
var updatedRow = row;
updatedRow.age = 23;
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
