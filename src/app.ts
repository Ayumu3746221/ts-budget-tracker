import { addTransaction } from "./operations/addTransaction";
import { deleteTransaction } from "./operations/deleteTransaction";
import { getExpenseByCategory } from "./operations/getExpenseByCategory";
import { getMonthlyAmountByType, getMonthlyBalance } from "./operations/getMonthlyAmount";
import type { Transaction } from "./types/transaction";

export const transactions: Transaction[] = [
  {
    id: 1,
    type: "expense",
    category: "food",
    amount: 1200,
    date: new Date("2026-09-10"),
    description: "昼食",
  },
  {
    id: 2,
    type: "income",
    category: "salary",
    amount: 50000,
    date: new Date("2026-09-11"),
    description: "アルバイト",
  },
  {
    id: 3,
    type: "expense",
    category: "alcohol",
    amount: 1300,
    date: new Date("2026-09-15"),
    description: "やけ酒",
  },
];

export default function App() {
  const newTransaction: Transaction = {
    id: 3,
    type: "income",
    category: "salary",
    amount: 30000,
    date: new Date("2026-09-15"),
    description: "給与振り込み",
  };

  let transactions_added = addTransaction(newTransaction, transactions);
  console.log(JSON.stringify(transactions_added));

  let transactions_deleted = deleteTransaction({ type: "income" }, transactions_added);
  console.log(JSON.stringify(transactions_deleted));

  // 月の支出
  console.log(
    getMonthlyAmountByType({ type: "expense", year: 2026, month: 9 }, transactions_deleted),
  );

  // 月の収入
  console.log(
    getMonthlyAmountByType({ type: "income", year: 2026, month: 9 }, transactions_deleted),
  );

  // 月の支出と収入のバランス
  console.log(getMonthlyBalance({ year: 2026, month: 9 }, transactions_deleted));

  // カテゴリーの計算
  console.log(getExpenseByCategory("food", transactions));

  // エラーを出力するはず
  console.error(
    "should be error",
    getMonthlyAmountByType({ type: "income", year: 2026, month: 13 }, transactions_deleted),
  );
}
