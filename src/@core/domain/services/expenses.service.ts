import { Expense } from "../entites";

export interface IExpensesService {
  getExpenses(page: number, limit: number): Promise<Expense[]>;
  getExpenseById(id: string): Promise<Expense>;
  createExpense(expense: any): Promise<Expense>;
  updateExpense(id: string, expense: Expense): Promise<Expense>;
}
