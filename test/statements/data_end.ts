import {statementType} from "../utils";
import * as Statements from "../../src/statements/";

let tests = [
  "DATA end of foo.",
  "DATA END OF COMMON PART.",
];

statementType(tests, "DATA END", Statements.DataEnd);