import { Category } from "../../domain/entites";
import { ICategorysService } from "../../domain/services/category.services";

export class CategorysService implements ICategorysService {
  async getCategories(page: number, limit: number) {
    const list = [
      new Category({
        id: "1",
        name: "Aluguel",
      }),
      new Category({
        id: "2",
        name: "Comida",
      }),
      new Category({
        id: "3",
        name: "Entretenimento",
      }),
      new Category({
        id: "4",
        name: "Games",
      }),
      new Category({
        id: "5",
        name: "Outros",
      }),
    ];

    return Promise.resolve(list);
  }
  async getCategoryById(id: string) {
    const categories = await this.getCategories(1, 10);

    const target = categories.find((c) => c.id === id) ?? null;

    return target;
  }
}
