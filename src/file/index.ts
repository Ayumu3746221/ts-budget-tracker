import { JSONL } from "bun";
import { parseTransaction, type Transaction } from "../types/transaction";

const JSONL_FILE = "/data.jsonl";

export const readFile = async (): Promise<Transaction[]> => {
  const file = Bun.file(import.meta.dir + JSONL_FILE);
  if (!(await file.exists())) {
    throw new Error("Not Found JSONL files");
  }

  const contents = await file.text();
  const json = JSONL.parse(contents);

  return json.map((content) => parseTransaction(content));
};

export const writeFile = async (transactions: Transaction[]) => {
  const file = Bun.file(import.meta.dir + JSONL_FILE);
  if (!(await file.exists())) {
    throw new Error("Not Found JSONL files");
  }

  const writer = file.writer();

  const contents = transactions.map((transaction) => JSON.stringify(transaction)).join("\n");

  writer.write(contents);
  writer.end();
};
