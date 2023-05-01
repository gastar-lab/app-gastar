import { IExpensesService } from "../../domain/services/expenses.service";

export class ExpensesController {
  constructor(private readonly expensesService: IExpensesService) {}

  async getExpenses(page: number, limit: number) {
    return await this.expensesService.getExpenses(page, limit);
  }

  async getExpenseById(id: string) {
    return await this.expensesService.getExpenseById(id);
  }

  async createExpense(expense: any) {
    return await this.expensesService.createExpense(expense);
  }

  async updateExpense(id: string, expense: any) {
    return await this.expensesService.updateExpense(id, expense);
  }
}
