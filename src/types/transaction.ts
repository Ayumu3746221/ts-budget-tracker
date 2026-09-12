type TransactionType = "income" | "expense";

export interface Transaction {
  id: number;
  type: TransactionType;
  category: string;
  amount: number;
  date: string;
  description: string;
}
