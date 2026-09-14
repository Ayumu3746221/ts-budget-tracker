import { transactions } from "../app";

export const getMonthlyExpense = (): number => {
  return transactions.reduce((sum, transaction) => {
    return transaction.type === "expense" ? sum + transaction.amount : sum;
  }, 0);
};
