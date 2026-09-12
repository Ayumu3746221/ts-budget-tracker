import type { Transaction } from "../types/transaction";
import { transactions } from "../app";

export const addTransaction = (transaction: Transaction): Transaction[] => {
  return transactions.concat(transaction);
};
