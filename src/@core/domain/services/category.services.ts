import { Category } from "../entites";

export interface ICategorysService {
  getCategories(page: number, limit: number): Promise<Category[]>;
  getCategoryById(id: string): Promise<Category | null>;
}
