import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import {
  Select,
  CreateWallet,
  RecoveryPhase,
  Option,
  CardPair,
  QrCodeCamera,
  Dashboard,
  ImportWallet,
  Login,
} from "./../../screens";
const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Select"
          component={Select}
          options={{
            headerShown: false,
            presentation: "card",
            animationTypeForReplace: "pop",
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="CreateWallet"
          component={CreateWallet}
          options={{
            headerShown: false,
            presentation: "card",
            animationTypeForReplace: "pop",
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="RecoveryPhase"
          component={RecoveryPhase}
          options={{
            headerShown: false,
            presentation: "card",
            animationTypeForReplace: "pop",
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="Option"
          component={Option}
          options={{
            headerShown: false,
            presentation: "card",
            animationTypeForReplace: "pop",
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="CardPair"
          component={CardPair}
          options={{
            headerShown: false,
            presentation: "card",
            animationTypeForReplace: "pop",
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="QrCodeCamera"
          component={QrCodeCamera}
          options={{
            headerShown: false,
            presentation: "card",
            animationTypeForReplace: "pop",
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
            presentation: "card",
            animationTypeForReplace: "pop",
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="ImportWallet"
          component={ImportWallet}
          options={{
            headerShown: false,
            presentation: "card",
            animationTypeForReplace: "pop",
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            presentation: "card",
            animationTypeForReplace: "pop",
            animation: "slide_from_right",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
