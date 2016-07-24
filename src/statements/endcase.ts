import { Statement } from "./statement";
import { Token } from "../tokens/";
import * as Combi from "../combi";

let str = Combi.str;

export class Endcase extends Statement {

  public static get_matcher(): Combi.IRunnable {
    return str("ENDCASE");
  }

  public static match(tokens: Array<Token>): Statement {
    let result = Combi.Combi.run(this.get_matcher( ), tokens, true);
    if (result === true) {
      return new Endcase(tokens);
    }
    return undefined;
  }

}