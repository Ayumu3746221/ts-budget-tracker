/* oxlint-disable */
import type { Transaction } from "./src/types/transaction";

const transactions: Transaction[] = [
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
];

