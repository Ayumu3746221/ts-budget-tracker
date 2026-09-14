import { addTransaction } from "./operations/addTransaction";
import { deleteTransaction } from "./operations/deleteTransaction";
import { getMonthlyExpense } from "./operations/getMonthlyExpense";
import type { Transaction } from "./types/transaction";

export const transactions: Transaction[] = [
  {
    id: 1,
    type: "expense",
    category: "food",
    amount: 1200,
    date: "2026-09-10",
    description: "昼食",
  },
  {
    id: 2,
    type: "income",
    category: "salary",
    amount: 50000,
    date: "2026-09-11",
    description: "アルバイト",
  },
  {
    id: 3,
    type: "expense",
    category: "alcohol",
    amount: 1300,
    date: "2026-09-15",
    description: "やけ酒",
  },
];

export default function App() {
  const newTransaction: Transaction = {
    id: 3,
    type: "income",
    category: "salary",
    amount: 30000,
    date: "2026-09-25",
    description: "給与振り込み",
  };

  let transactions_added = addTransaction(newTransaction);
  console.log(JSON.stringify(transactions_added));

  let transactions_deleted = deleteTransaction({ type: "income" });
  console.log(JSON.stringify(transactions_deleted));

  let transactions_expense = getMonthlyExpense();
  console.log(transactions_expense);
}
