import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
  Swap,
  Wallet
} from "./../../screens";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import {
  AntDesign,
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import theme from "../../../theme";
import { WithLocalSvg } from "react-native-svg";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const width = Dimensions.get("window").width;
const tabWidth = width / 5;
const TabStack = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.primaryLight,
          bottom: 0,
          height: 74,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tab}>
              {focused ? (
                <Ionicons name="home-sharp" size={24} color={theme.black} />
              ) : (
                <Ionicons name="home-outline" size={24} color={theme.black} />
              )}
              <Text style={[styles.tabTitle]}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard1"
        component={Dashboard}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tab}>
              {focused ? (
                <FontAwesome5 name="user-alt" size={24} color={theme.black} />
              ) : (
                <FontAwesome5 name="user" size={24} color={theme.black} />
              )}
              <Text style={[styles.tabTitle]}>Profile</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Dastrhboard1"
        component={Dashboard}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.footballTab}>
              <WithLocalSvg
                asset={require("./../../../assets/svg/tabs-logo.svg")}
                width={60}
                height={60}
                fill={"#fff"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Swap"
        component={Swap}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tab}>
              {focused ? (
                <MaterialCommunityIcons
                  name="swap-vertical-circle"
                  size={24}
                  color={theme.black}
                />
              ) : (
                <MaterialCommunityIcons
                  name="swap-vertical-circle-outline"
                  size={24}
                  color={theme.black}
                />
              )}
              <Text style={[styles.tabTitle]}>Swap</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tab}>
              {focused ? (
                <Ionicons
                  name="md-wallet-sharp"
                  size={24}
                  color={theme.black}
                />
              ) : (
                <Ionicons
                  name="md-wallet-outline"
                  size={24}
                  color={theme.black}
                />
              )}
              <Text style={[styles.tabTitle]}>Wallet</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
let Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Select"
          component={Select}
          options={{
            headerShown: false,
            presentation: "card",
            animationTypeForReplace: "pop",
            animation: "slide_from_right",
          }}
        /> */}
        {/* <Stack.Screen
          name="CreateWallet"
          component={CreateWallet}
          options={{
            headerShown: false,
            presentation: "card",
            animationTypeForReplace: "pop",
            animation: "slide_from_right",
          }}
        /> */}
        {/* <Stack.Screen
          name="RecoveryPhase"
          component={RecoveryPhase}
          options={{
            headerShown: false,
            presentation: "card",
            animationTypeForReplace: "pop",
            animation: "slide_from_right",
          }}
        /> */}
        {/* <Stack.Screen
          name="Option"
          component={Option}
          options={{
            headerShown: false,
            presentation: "card",
            animationTypeForReplace: "pop",
            animation: "slide_from_right",
          }}
        /> */}
        {/* <Stack.Screen
          name="CardPair"
          component={CardPair}
          options={{
            headerShown: false,
            presentation: "card",
            animationTypeForReplace: "pop",
            animation: "slide_from_right",
          }}
        /> */}
        {/* <Stack.Screen
          name="QrCodeCamera"
          component={QrCodeCamera}
          options={{
            headerShown: false,
            presentation: "card",
            animationTypeForReplace: "pop",
            animation: "slide_from_right",
          }}
        /> */}
        {/* <Stack.Screen
          name="ImportWallet"
          component={ImportWallet}
          options={{
            headerShown: false,
            presentation: "card",
            animationTypeForReplace: "pop",
            animation: "slide_from_right",
          }}
        /> */}
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            presentation: "card",
            animationTypeForReplace: "pop",
            animation: "slide_from_right",
          }}
        /> */}
        <Stack.Screen
          name="TabStack"
          component={TabStack}
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
};
const styles = StyleSheet.create({
  tabNavigatorContainer: {
    width: "100%",
    maxHeight: 90,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "white",
    elevation: 0,
  },
  tab: {
    width: tabWidth,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  footballTab: {
    marginTop: -65,
  },
  footballContainer: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "white",
    marginTop: -30,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 1.5,
  },
  rightToFootball: {
    borderTopLeftRadius: 40 / 2,
  },
  tabTitle: {
    fontSize: 10,
    color: theme.black,
    fontFamily: theme.medium,
  },
});
export default Navigation;
