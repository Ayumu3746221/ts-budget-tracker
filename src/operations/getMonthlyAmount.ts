import type { Transaction, TransactionType } from "../types/transaction";

interface MonthlyAmountDeps {
  type: TransactionType;
  year: number;
  month: number;
}

const validatedMonth = (month: number): number => {
  if (month < 0 || 11 < month) {
    throw new RangeError("The month should be inclusive between 0 and 11");
  }

  return month;
};

export const getMonthlyAmountByType = (
  { type, year, month }: Partial<MonthlyAmountDeps> & Pick<MonthlyAmountDeps, "type">,
  transactions: Transaction[],
): number => {
  const now = new Date();
  const targetYear = year ?? now.getFullYear();

  /**
   * month - 1としておくことで関数の呼び出しがわが9月なら9と指定すればよくなる
   */
  const targetMonth = month !== undefined ? validatedMonth(month - 1) : now.getMonth();

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

export const getMonthlyBalance = (
  { year, month }: Partial<Omit<MonthlyAmountDeps, "type">> = {},
  transactions: Transaction[],
) => {
  return (
    getMonthlyAmountByType({ type: "income", year, month }, transactions) -
    getMonthlyAmountByType({ type: "expense", year, month }, transactions)
  );
};
