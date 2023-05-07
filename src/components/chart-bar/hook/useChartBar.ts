import { State } from "@hookstate/core";
import { useEffect, useState } from "react";
import { Expense } from "../../../@core/domain/entites";
import { CategoriesService } from "../../../@core/infra/services/category.services";

type ChartDataType = {
  category: string | undefined;
  value: number;
};

export const useChartBar = (expenseState: State<Expense[]>) => {
  const [dataToChart, setDataToChart] = useState<ChartDataType[]>([]);
  const categoriesService = new CategoriesService();

  useEffect(() => {
    let expensesWithCategoryName: ChartDataType[] = [];

    expenseState.get().forEach(async (item) => {
      const category = await categoriesService.getCategoryById(item.categoryId);

      expensesWithCategoryName.push({
        category: category!.name,
        value: item.value,
      });

      const result = expensesWithCategoryName.reduce(
        (acc: ChartDataType[], obj) => {
          const category = obj.category;
          const isRepeat = acc.find((c) => c.category === category);

          if (isRepeat) {
            isRepeat.value += obj.value;
          } else {
            acc.push(obj);
          }

          return acc;
        },
        []
      );

      setDataToChart(result);
    });
  }, []);

  return { dataToChart };
};
