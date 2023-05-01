import { Expense } from "../../domain/entites";
import { IExpensesService } from "../../domain/services/expenses.service";

export class ExpensesService implements IExpensesService {
  getExpenses(page: number, limit: number): Promise<Expense[]> {
    throw new Error("Method not implemented.");
  }
  getExpenseById(id: string): Promise<Expense> {
    throw new Error("Method not implemented.");
  }
  createExpense(expense: any): Promise<Expense> {
    throw new Error("Method not implemented.");
  }
  updateExpense(id: string, expense: Expense): Promise<Expense> {
    throw new Error("Method not implemented.");
  }
}
