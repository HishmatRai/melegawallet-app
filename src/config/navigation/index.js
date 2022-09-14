import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import { Select, CreateWallet, RecoveryPhase } from "./../../screens";
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
