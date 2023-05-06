import { Expense } from "../../domain/entites";
import { ExpensesService } from "../../infra/services/expenses.services";
import { ExpensesController } from "../controllers/expenses.controller";

const DEFAULT_LIMIT = 10;

/**
 * @title GastarAPI
 * @description Interface de comunicação com a Gastar API, todo tratamento de dados com o servidor vai passar por aqui.
 * @GastarAPI
 * @example
 * const depesas = await GastarAPI.getExpenses(10, 1);
 * console.log(despesas);
 */
export class GastarAPI {
  constructor() {}

  /**
   * @title get
   * @description Método para buscar todas as despesas
   * @param page Número da página
   * @param limit Quantidade de registros por página
   * @returns Promise<Expense[]> Retorna um array de despesas
   **/
  static async getExpenses(
    limit: number = DEFAULT_LIMIT,
    page: number = 1
  ): Promise<Expense[]> {
    const expensesService = new ExpensesService();
    const expensesController = new ExpensesController(expensesService);
    return await expensesController.getExpenses(limit, page);
  }

  
}
