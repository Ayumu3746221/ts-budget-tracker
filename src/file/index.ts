import { JSONL } from "bun";
import { parseTransaction, type Transaction } from "../types/transaction";

const JSONL_FILE = "/data.jsonl";

export const readFile = async (): Promise<Transaction[] | Error> => {
  const file = Bun.file(import.meta.dir + JSONL_FILE);
  if (!(await file.exists())) {
    return new Error("Not Found JSONL files");
  }

  const contents = await file.text();
  const json = JSONL.parse(contents);

  return json.map((content) => parseTransaction(content));
};
