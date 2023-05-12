import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  Signin: undefined;
  Home: NavigatorScreenParams<TabParamsList>;
};

export type TabParamsList = {
  Home: undefined;
  Budgets: undefined;
  Notifications: undefined;
  Profile: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
