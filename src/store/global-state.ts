import { hookstate, useHookstate } from "@hookstate/core";

import { Expense, Income, Category, Bank } from "../@core/domain/entites";

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
};

type Auth = {
  token: string;
  user: User;
};

const globalState = hookstate({
  expenses: [] as Expense[],
  incomes: [] as Income[],
  categories: [] as Category[],
  banks: [] as Bank[],
  auth: {} as Auth,
});

export const useGlobalState = () => useHookstate(globalState);

export const useExpenses = () => useHookstate(globalState.expenses);
export const useIncomes = () => useHookstate(globalState.incomes);
export const useCategories = () => useHookstate(globalState.categories);
export const useBanks = () => useHookstate(globalState.banks);
export const useAuth = () => useHookstate(globalState.auth);
