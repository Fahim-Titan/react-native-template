import { createStackNavigator } from "@react-navigation/stack";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { SettingsPage } from "./pages/SettingsPage";
import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  Setting: { userId: string };
  Login: undefined;
  Home: undefined;
};
export type StackNavigation = NavigationProp<RootStackParamList>;

export const NavigationStack = () => {
  const RootStack = createStackNavigator<RootStackParamList>();
  return (
    <RootStack.Navigator initialRouteName="Login">
      <RootStack.Screen name="Login" component={LoginPage} />
      <RootStack.Screen name="Home" component={HomePage} />
      <RootStack.Screen name="Setting" component={SettingsPage} />
    </RootStack.Navigator>
  );
};
