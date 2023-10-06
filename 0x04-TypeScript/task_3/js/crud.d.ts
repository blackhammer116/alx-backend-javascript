import { RowId, RowElement } from "./interface";

export declare function insertRow(row: RowElement): RowID;
export declare function deleteRow(rowID: RowID): void;
export declate function updateRow(rowId: RowID, row: RowElement): RowID;
