import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useColorModeValue } from "native-base";

import Ionicons from "@expo/vector-icons/Ionicons";

import HomeScreen from "../screens/home";
import BudgetsScreen from "../screens/budgets";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: useColorModeValue("white", "#1F2937"),
          borderTopWidth: 0,
          height: 40,
        },
        tabBarActiveTintColor: useColorModeValue("#1F2937", "white"),
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Orçamentos"
        component={BudgetsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="cash-multiple"
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notificações"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="notifications" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="person" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
