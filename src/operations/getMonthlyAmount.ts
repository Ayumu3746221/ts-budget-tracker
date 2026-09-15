import type { TransactionType } from "../types/transaction";
import { transactions } from "../app";

export const getMonthlyAmountByType = (type: TransactionType): number => {
  return transactions.reduce((sum, transaction) => {
    return transaction.type === type ? sum + transaction.amount : sum;
  }, 0);
};

export const getMonthlyBalance = () => {
  return getMonthlyAmountByType("income") - getMonthlyAmountByType("expense");
};
