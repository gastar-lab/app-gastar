import { Expense } from "../../domain/entites";
import { IExpensesService } from "../../domain/services/expenses.service";

export class ExpensesService implements IExpensesService {
  async getExpenses(page: number, limit: number): Promise<Expense[]> {
    const list = [
      new Expense({
        id: "1",
        description: "McDonalds",
        value: 112.5,
        date: new Date(),
        categoryId: "1",
        paymentMethod: "1",
        bankId: "1",
        location: "Aracaju - SE",
      }),
      new Expense({
        id: "2",
        description: "Mix Mateus",
        value: 760,
        date: new Date(),
        categoryId: "2",
        paymentMethod: "2",
        bankId: "2",
        location: "Aracaju - SE",
      }),
      new Expense({
        id: "3",
        description: "Posto Ipiranga",
        value: 88.9,
        date: new Date(),
        categoryId: "3",
        paymentMethod: "3",
        bankId: "3",
        location: "São Cristóvão - SE",
      }),
      new Expense({
        id: "4",
        description: "Shopping Jardins",
        value: 22.5,
        date: new Date(),
        categoryId: "1",
        paymentMethod: "1",
        bankId: "1",
        location: "Aracaju - SE",
      }),
      new Expense({
        id: "5",
        description: "Shopping Jardins",
        value: 39,
        date: new Date(),
        categoryId: "2",
        paymentMethod: "2",
        bankId: "2",
        location: "Aracaju - SE",
      }),
      new Expense({
        id: "6",
        description: "Shopping Jardins",
        value: 55.9,
        date: new Date(),
        categoryId: "3",
        paymentMethod: "3",
        bankId: "3",
        location: "Aracaju - SE",
      }),
    ];

    console.log("list", list);
    return Promise.resolve(list);
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
