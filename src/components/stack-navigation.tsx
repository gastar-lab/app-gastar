import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "../screens/signin";
import TabNavigator from "./tab-navigation";

const { Navigator, Screen } = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Navigator
      initialRouteName="Signin"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Signin" component={Signin} />
      <Screen name="Home" component={TabNavigator} />
    </Navigator>
  );
}
