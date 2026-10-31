export type TransactionType = "income" | "expense";

export interface Transaction {
  id: number;
  type: TransactionType;
  category: string;
  amount: number;
  date: Date;
  description: string;
}

export const parseTransaction = (arg: any): Transaction => {
  if (!(arg as Transaction).date) {
    throw new Error("Invalid Error: should be date");
  }
  arg.date = new Date(arg.date);

  if (isTransaction(arg)) {
    return arg;
  } else {
    throw new Error(`Invalid Error: data is incorrect\n${JSON.stringify(arg)}`);
  }
};

const isTransaction = (arg: any): arg is Transaction =>
  typeof arg === "object" &&
  arg !== null &&
  typeof (arg as Transaction).id === "number" &&
  typeof (arg as Transaction).type === "string" &&
  ((arg as Transaction).type === "income" || (arg as Transaction).type === "expense") &&
  typeof (arg as Transaction).category === "string" &&
  typeof (arg as Transaction).amount === "number" &&
  typeof (arg as Transaction).date === "object" &&
  (arg as Transaction).date instanceof Date &&
  typeof (arg as Transaction).description === "string";
