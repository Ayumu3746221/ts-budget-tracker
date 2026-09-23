import type { Transaction } from "../types/transaction";

export const getExpenseByCategory = (category: string, transactions: Transaction[]) => {
  return transactions.reduce((sum, transaction) => {
    return transaction.category === category && transaction.type === "expense"
      ? sum + transaction.amount
      : sum;
  }, 0);
};
