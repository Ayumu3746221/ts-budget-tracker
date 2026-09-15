import type { TransactionType } from "../types/transaction";
import { transactions } from "../app";

interface MonthlyAmountDeps {
  type: TransactionType;
  year: number;
  month: number;
}

export const getMonthlyAmountByType = ({
  type,
  year,
  month,
}: Partial<MonthlyAmountDeps> & Pick<MonthlyAmountDeps, "type">): number => {
  const now = new Date();
  const targetYear = year ?? now.getFullYear();
  const targetMonth = month ?? now.getMonth();

  return transactions.reduce((sum, transaction) => {
    if (
      transaction.type === type &&
      transaction.date.getFullYear() === targetYear &&
      transaction.date.getMonth() === targetMonth
    ) {
      return sum + transaction.amount;
    }

    return sum;
  }, 0);
};

export const getMonthlyBalance = ({
  year,
  month,
}: Partial<Omit<MonthlyAmountDeps, "type">> = {}) => {
  return (
    getMonthlyAmountByType({ type: "income", year, month }) -
    getMonthlyAmountByType({ type: "expense", year, month })
  );
};
