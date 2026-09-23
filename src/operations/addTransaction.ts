import type { Transaction } from "../types/transaction";

export const addTransaction = (added: Transaction, current: Transaction[]): Transaction[] => {
  return current.concat(added);
};
