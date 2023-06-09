import React from "react";

import { Row, useColorMode, useColorModeValue } from "native-base";

import { useExpenses } from "../../store/global-state";
import { State } from "@hookstate/core";

import { StatusBar } from "expo-status-bar";
import { Expense } from "../../@core/domain/entites";
import { ExpensesList } from "../../components/expenses-list";
import { TotalBalance } from "../../components/total-balance";
import { MonthlyExpense } from "../../components/monthly-expense";
import { YourSavings } from "../../components/your-savings";
import { Greeting } from "../../components/greeting";
import { LayoutSpacing } from "../../components/layout/spacing";

export default function HomeScreen() {
  const expenses: State<Expense[]> = useExpenses();
  const bg = useColorModeValue("warmGray.100", "coolGray.800");
  return (
    <>
      <StatusBar
        style={useColorMode().colorMode === "dark" ? "light" : "dark"}
      />
      <LayoutSpacing bg={bg}>
        <Greeting userName="Felipe Santos" mb={4} />
        <Row justifyContent={"space-between"} w="100%">
          <MonthlyExpense monthlyExpense={2000000} />
          <YourSavings yourSavings={200000} />
        </Row>
        <TotalBalance totalBalance={20000000} />
        <ExpensesList expenses={expenses} />
      </LayoutSpacing>
    </>
  );
}
