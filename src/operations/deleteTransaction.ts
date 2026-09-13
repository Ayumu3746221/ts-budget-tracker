import { transactions } from "../app";
import type { Transaction } from "../types/transaction";

const transactionKeys = [
  "id",
  "type",
  "category",
  "amount",
  "date",
  "description",
] as const satisfies readonly (keyof Transaction)[];

const isMacth = (deleted: Partial<Transaction>, transaction: Transaction) => {
  for (const key of transactionKeys) {
    if (deleted[key] !== undefined && deleted[key] != transaction[key]) {
      return false;
    }
  }
  return true;
};

export const deleteTransaction = (deleted: Partial<Transaction>): Transaction[] => {
  return transactions.filter((transaction: Transaction): boolean => {
    return !isMacth(deleted, transaction);
  });
};
