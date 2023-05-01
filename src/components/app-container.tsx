import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, useColorMode } from "native-base";
import theme from "../theme";
import TabNavigator from "./tab-navigation";
import { GastarAPI } from "../@core/presentation/api";
import { useExpenses } from "../store/global-state";
import { State } from "@hookstate/core";
import { Expense } from "../@core/domain/entites";
import { StatusBar } from "expo-status-bar";

function useGastarAPI() {}

export default function AppContainer() {
  const expensesState: State<Expense[]> = useExpenses();

  React.useEffect(() => {
    (async () => {
      const expensesResult = await GastarAPI.getExpenses();
      console.log(expensesResult);
      expensesState.set(expensesResult);
    })();
  }, []);

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        
        <TabNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
