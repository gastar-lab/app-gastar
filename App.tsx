import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import AppContainer from "./src/components/app-container";
import ThemeToggle from "./src/components/theme-toggle";
import { Box, useColorModeValue } from "native-base";

export default function App() {
  const bg = useColorModeValue("warmGray.50", "coolGray.800");

  return <AppContainer />;
}
