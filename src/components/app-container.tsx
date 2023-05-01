import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import theme from "../theme";
import TabNavigator from "./tab-navigation";

export default function AppContainer() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <TabNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
