import { readFile, writeFile } from "./file";
import { addTransaction } from "./operations/addTransaction";
import { deleteTransaction } from "./operations/deleteTransaction";
import { getExpenseByCategory } from "./operations/getExpenseByCategory";
import { getMonthlyAmountByType, getMonthlyBalance } from "./operations/getMonthlyAmount";
import type { Transaction } from "./types/transaction";

export default async function App() {
  const transactions = await readFile();
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

  writeFile(transactions_deleted);
}
