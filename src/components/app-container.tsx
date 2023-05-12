import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import theme from "../theme";
import { GastarAPI } from "../@core/presentation/api";
import { useExpenses } from "../store/global-state";
import { State } from "@hookstate/core";
import { Expense } from "../@core/domain/entites";
import StackNavigation from "./stack-navigation";

function useGastarAPI() {}

export default function AppContainer() {
  const expensesState: State<Expense[]> = useExpenses();

  React.useEffect(() => {
    (async () => {
      const expensesResult = await GastarAPI.getExpenses();
      // console.log({expensesResult});
      expensesState.set(expensesResult);
    })();
  }, []);

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <StackNavigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
