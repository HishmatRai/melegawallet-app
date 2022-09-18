import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../dashboard";
import Receive from "../receive";
const Stack = createNativeStackNavigator();
function DashboardStack() {
  return (
    <Stack.Navigator>
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
      {/* <Stack.Screen
        name="Receive"
        component={Receive}
        options={{
          headerShown: false,
          presentation: "card",
          animationTypeForReplace: "pop",
          animation: "slide_from_right",
        }}
      /> */}
    </Stack.Navigator>
  );
}
export default DashboardStack;
